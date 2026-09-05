"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { charReveal } from "@/lib/animations";
import { useMemo } from "react";

interface AnimatedTextProps {
  /** Text to animate */
  text: string;
  /** Split and animate by character or word */
  splitBy?: "char" | "word";
  /** HTML tag for the wrapper */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Trigger animation once or every time in viewport */
  once?: boolean;
}

/**
 * Text reveal animation — splits text into characters or words
 * and staggers their appearance on scroll or mount.
 */
export function AnimatedText({
  text,
  splitBy = "word",
  as: Tag = "div",
  className,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const segments = useMemo(() => {
    if (splitBy === "char") {
      return text.split("").map((char, i) => ({
        key: `${char}-${i}`,
        content: char === " " ? "\u00A0" : char,
      }));
    }
    return text.split(" ").map((word, i) => ({
      key: `${word}-${i}`,
      content: word,
    }));
  }, [text, splitBy]);

  /* Reduced motion: render text immediately */
  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: splitBy === "char" ? 0.03 : 0.08,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      className={cn("flex flex-wrap", className)}
      role="heading"
      aria-label={text}
    >
      {segments.map(({ key, content }) => (
        <motion.span
          key={key}
          variants={charReveal}
          className={cn(
            "inline-block",
            splitBy === "word" && "mr-[0.3em]"
          )}
          aria-hidden="true"
        >
          {content}
        </motion.span>
      ))}
    </motion.div>
  );
}
