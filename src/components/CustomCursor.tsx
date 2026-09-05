"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with hover support
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // High performance hardware-accelerated quickTo setters
    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3.out" });

    gsap.set([dot, ring], {
      xPercent: -50,
      yPercent: -50,
      pointerEvents: "none",
      willChange: "transform",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Dynamic hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("button, a, input, textarea, select, [data-cursor]");
      
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // Animate cursor state changes with GSAP
  useEffect(() => {
    const ring = cursorRingRef.current;
    const dot = cursorDotRef.current;
    if (!ring || !dot) return;

    if (isHovered) {
      gsap.to(ring, {
        width: cursorText ? 84 : 48,
        height: cursorText ? 84 : 48,
        backgroundColor: "rgba(124, 58, 237, 0.12)",
        borderColor: "rgba(139, 92, 246, 0.45)",
        backdropFilter: "blur(4px)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: cursorText ? 0 : 0.4,
        opacity: cursorText ? 0 : 0.6,
        duration: 0.2,
      });
    } else {
      gsap.to(ring, {
        width: 32,
        height: 32,
        backgroundColor: "transparent",
        borderColor: "rgba(139, 92, 246, 0.3)",
        backdropFilter: "blur(0px)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });
    }
  }, [isHovered, cursorText]);

  return (
    <>
      {/* Small Central Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-600 z-[9999] pointer-events-none transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Trailing Frosted Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full border border-purple-400/40 z-[9998] pointer-events-none flex items-center justify-center text-[10px] font-bold tracking-widest text-purple-700 uppercase transition-opacity duration-300 shadow-xs ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {cursorText && (
          <span className="scale-75 animate-pulse font-extrabold">{cursorText}</span>
        )}
      </div>
    </>
  );
}
