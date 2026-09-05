"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Subtle scroll progress indicator at the top of the page.
 * Thin accent-colored bar showing reading position.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[var(--z-sticky)] h-[2px] origin-left bg-[var(--color-accent)]"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
