"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CursorVariant } from "@/types";

/* ── Touch / hover detection via useSyncExternalStore ─────── */

function subscribeToMediaQuery(callback: () => void) {
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
  return true; // Assume touch on server
}

/**
 * Custom cursor for desktop devices.
 * Renders a dot + ring that follows the mouse and reacts to interactive elements.
 *
 * - Desktop only (hidden on touch)
 * - Does not block clicks (pointer-events: none)
 * - Reacts to data-cursor attributes on elements
 * - Respects reduced motion
 */
export function CustomCursor() {
  const isTouch = useSyncExternalStore(
    subscribeToMediaQuery,
    getIsTouchDevice,
    getServerSnapshot
  );

  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  /* Smoother spring for the outer ring */
  const ringX = useSpring(mouseX, { stiffness: 250, damping: 25 });
  const ringY = useSpring(mouseY, { stiffness: 250, damping: 25 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [mouseX, mouseY, isVisible]
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  /* Detect interactive elements via data-cursor attribute or tag */
  const handleElementDetection = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const closestInteractive = target.closest(
      "[data-cursor], a, button, [role='button'], input, textarea, select"
    );

    if (!closestInteractive) {
      setVariant("default");
      return;
    }

    /* Check explicit data-cursor attribute first */
    const cursorAttr = closestInteractive.getAttribute(
      "data-cursor"
    ) as CursorVariant | null;

    if (cursorAttr) {
      setVariant(cursorAttr);
      return;
    }

    /* Fall back to tag-based detection */
    const tag = closestInteractive.tagName.toLowerCase();
    if (tag === "a") setVariant("link");
    else if (tag === "button" || closestInteractive.getAttribute("role") === "button")
      setVariant("button");
    else setVariant("default");
  }, []);

  useEffect(() => {
    if (isTouch) return;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleElementDetection);

    /* Add class to body to hide default cursor */
    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleElementDetection);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [
    isTouch,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    handleElementDetection,
  ]);

  /* Don't render on touch devices */
  if (isTouch) return null;

  const isInteractive = variant !== "default";

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-[var(--z-cursor)]",
        !isVisible && "opacity-0"
      )}
      aria-hidden="true"
    >
      {/* Dot — precise position */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className={cn(
          "absolute -top-1 -left-1 h-2 w-2 rounded-full",
          "bg-[var(--color-accent)]",
          "transition-transform duration-150",
          isInteractive && "scale-0"
        )}
      />

      {/* Ring — springs behind with lag */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className={cn(
          "absolute -top-5 -left-5 h-10 w-10 rounded-full",
          "border border-[var(--color-accent)]/40",
          "transition-all duration-200",
          isInteractive && "scale-150 border-[var(--color-accent)]/60 bg-[var(--color-accent)]/5",
          variant === "project" && "scale-[2] border-[var(--color-accent)]/30",
          variant === "view" && "scale-[2] border-[var(--color-accent)]/30",
          variant === "drag" && "scale-75"
        )}
      >
        {/* Label inside ring for special states */}
        {(variant === "view" || variant === "project" || variant === "drag") && (
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "text-[8px] font-medium uppercase tracking-wider",
              "text-[var(--color-accent)]"
            )}
          >
            {variant === "view" && "View"}
            {variant === "project" && "Open"}
            {variant === "drag" && "Drag"}
          </span>
        )}
      </motion.div>
    </div>
  );
}
