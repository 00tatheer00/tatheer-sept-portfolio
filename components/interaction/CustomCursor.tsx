"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import type { CursorVariant } from "@/types";

/* ── Touch / pointer query subscriptions ─────────────────────── */

function subscribeToMediaQuery(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const hoverQuery = window.matchMedia("(hover: hover)");
  const pointerQuery = window.matchMedia("(pointer: fine)");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  hoverQuery.addEventListener("change", callback);
  pointerQuery.addEventListener("change", callback);
  motionQuery.addEventListener("change", callback);

  return () => {
    hoverQuery.removeEventListener("change", callback);
    pointerQuery.removeEventListener("change", callback);
    motionQuery.removeEventListener("change", callback);
  };
}

function getIsTouchDevice() {
  if (typeof window === "undefined") return true;
  const hasHover = window.matchMedia("(hover: hover)").matches;
  const hasPointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !hasHover || !hasPointer || reducedMotion;
}

function getServerSnapshot() {
  return true; // Default to non-rendering on SSR
}

/**
 * Premium, zero-latency cursor enhancement.
 *
 * Key Architecture:
 * 1. Preserves the native OS cursor at all times (never sets cursor: none).
 * 2. Positions via direct requestAnimationFrame & transform3d (bypasses React render loop).
 * 3. 100% pointer-events: none — never blocks clicks or text selection.
 * 4. Subtly reacts to interactive elements (links, buttons, project panels).
 * 5. Completely disabled on mobile, tablet, and touch screens.
 */
export function CustomCursor() {
  const isTouch = useSyncExternalStore(
    subscribeToMediaQuery,
    getIsTouchDevice,
    getServerSnapshot
  );

  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);

  // Direct mouse coordinates for high-fps RAF interpolation
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    pos.current.x = e.clientX;
    pos.current.y = e.clientY;
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  // Detect interactive element variants without heavy selectors
  const handleElementDetection = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    const interactive = target.closest(
      "[data-cursor], a, button, [role='button'], input, textarea, select"
    );

    if (!interactive) {
      setVariant((prev) => (prev === "default" ? prev : "default"));
      return;
    }

    const cursorAttr = interactive.getAttribute("data-cursor") as CursorVariant | null;
    if (cursorAttr) {
      setVariant((prev) => (prev === cursorAttr ? prev : cursorAttr));
      return;
    }

    const tag = interactive.tagName.toLowerCase();
    if (tag === "a") {
      setVariant((prev) => (prev === "link" ? prev : "link"));
    } else if (tag === "button" || interactive.getAttribute("role") === "button") {
      setVariant((prev) => (prev === "button" ? prev : "button"));
    } else {
      setVariant((prev) => (prev === "default" ? prev : "default"));
    }
  }, []);

  // Ultra-smooth RAF tick for follower ring
  useEffect(() => {
    if (isTouch) return;

    const tick = () => {
      // Smooth linear interpolation (lerp) with high responsiveness
      const lerp = 0.28;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleElementDetection, { passive: true });

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleElementDetection);
    };
  }, [isTouch, handleMouseMove, handleMouseLeave, handleMouseEnter, handleElementDetection]);

  if (isTouch) return null;

  const isInteractive = variant !== "default";
  const isProject = variant === "project" || variant === "view";

  return (
    <div
      ref={ringRef}
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-[var(--z-cursor)] will-change-transform",
        "transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
      aria-hidden="true"
    >
      {/* Precision ambient ring around the real hardware cursor */}
      <div
        className={cn(
          "relative -top-3 -left-3 flex items-center justify-center rounded-full",
          "border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/[0.03]",
          "transition-[width,height,transform,background-color,border-color] duration-200 ease-out",
          !isInteractive && "h-6 w-6",
          isInteractive && !isProject && "h-9 w-9 -top-4.5 -left-4.5 scale-110 border-[var(--color-accent)]/60 bg-[var(--color-accent)]/10",
          isProject && "h-12 w-12 -top-6 -left-6 border-[var(--color-accent)] bg-[var(--color-accent)]/15 backdrop-blur-[1px]"
        )}
      >
        {isProject && (
          <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
            VIEW
          </span>
        )}
      </div>
    </div>
  );
}
