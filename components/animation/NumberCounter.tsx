"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Scroll-triggered animated number counter.
 * Uses Framer Motion's motion values for 60fps hardware-accelerated number tweening.
 */
export function NumberCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(shouldReduceMotion ? value : 0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion, count]);

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums inline-flex items-baseline", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {prefix && <span>{prefix}</span>}
      {shouldReduceMotion ? (
        <span>{value.toLocaleString()}</span>
      ) : (
        <motion.span>{rounded}</motion.span>
      )}
      {suffix && <span>{suffix}</span>}
    </motion.span>
  );
}
