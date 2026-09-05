"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * 01 — Pre-entry branded entrance.
 * Brief typographic reveal of the name, then auto-dismisses into the hero.
 */
export function PreEntry() {
  const shouldReduceMotion = useReducedMotion();
  /* Default to true so the overlay shows initially, then dismiss via timer */
  const [isVisible, setIsVisible] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => setIsVisible(false), 1100);
    return () => clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible && shouldReduceMotion) return null;

  const name = "S TATHEER HUSSAIN";
  const letters = name.split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[var(--z-overlay)] flex items-center justify-center bg-[var(--color-background)]"
        >
          <div className="flex items-baseline gap-[0.08em] overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  delay: 0.1 + i * 0.025,
                  duration: 0.4,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`inline-block font-[var(--font-display)] text-2xl font-semibold tracking-[0.15em] sm:text-3xl lg:text-4xl ${
                  letter === " " ? "w-3 sm:w-4" : ""
                }`}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Subtle accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.55, duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
            className="absolute bottom-[45%] left-1/2 h-px w-16 -translate-x-1/2 origin-left bg-[var(--color-accent)]/40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
