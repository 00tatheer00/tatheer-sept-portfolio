"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/lib/animations";
import type { ReactNode } from "react";
import type { RevealType, AnimationDirection } from "@/types";

interface RevealProps {
  children: ReactNode;
  /** Animation type */
  type?: RevealType;
  /** Direction for slide animations */
  direction?: AnimationDirection;
  /** Delay before animation starts */
  delay?: number;
  /** Duration override */
  duration?: number;
  /** Only animate once */
  once?: boolean;
  /** Viewport margin for trigger */
  margin?: string;
  className?: string;
}

/** Map type + direction to motion variants */
function getVariants(type: RevealType, direction: AnimationDirection) {
  if (type === "scale") return scaleIn;
  if (type === "fade") return fadeIn;

  /* Slide variants */
  switch (direction) {
    case "up":
      return fadeInUp;
    case "down":
      return fadeInDown;
    case "left":
      return fadeInLeft;
    case "right":
      return fadeInRight;
    default:
      return fadeInUp;
  }
}

/**
 * Scroll-triggered reveal animation wrapper.
 * Wraps any content with configurable entrance animations.
 */
export function Reveal({
  children,
  type = "slide",
  direction = "up",
  delay = 0,
  duration,
  once = true,
  margin = "-80px",
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = getVariants(type, direction);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      transition={
        delay || duration
          ? {
              delay,
              ...(duration ? { duration } : {}),
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
