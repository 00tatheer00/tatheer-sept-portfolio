"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Smooth scroll provider using Lenis.
 *
 * - Wraps the page with buttery-smooth inertial scrolling
 * - Automatically disabled for reduced-motion users
 * - Preserves anchor navigation and keyboard scrolling
 * - Cleans up on unmount
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    /* Respect reduced-motion preference */
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /* Handle anchor links */
    function handleAnchorClick(e: Event) {
      const target = e.target as HTMLAnchorElement;
      const href = target?.getAttribute("href");
      if (href?.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element as HTMLElement, { offset: -80 });
        }
      }
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
