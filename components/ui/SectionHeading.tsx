"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  /** Small label above the title (e.g. "01 / About") */
  label?: string;
  /** Main heading */
  title: string;
  /** Optional description paragraph */
  description?: string;
  /** Heading alignment */
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section heading with optional label and description.
 * Animates in on scroll with staggered fade-up.
 */
export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-12 sm:mb-16 lg:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <motion.span
          variants={shouldReduceMotion ? undefined : fadeInUp}
          className={cn(
            "mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em]",
            "text-[var(--color-accent)]"
          )}
        >
          {label}
        </motion.span>
      )}

      <motion.h2
        variants={shouldReduceMotion ? undefined : fadeInUp}
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          "text-balance"
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={shouldReduceMotion ? undefined : fadeInUp}
          className={cn(
            "mt-4 text-base sm:text-lg",
            "text-[var(--color-foreground-secondary)]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
