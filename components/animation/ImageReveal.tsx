"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { imageRevealOverlay, imageScale } from "@/lib/animations";
import Image from "next/image";

interface ImageRevealProps {
  /** Image source */
  src: string;
  /** Alt text (required for accessibility) */
  alt: string;
  /** Image dimensions */
  width: number;
  height: number;
  /** Priority loading (above-the-fold images) */
  priority?: boolean;
  /** Overlay color during reveal */
  overlayColor?: string;
  /** Direction the overlay wipes from */
  origin?: "left" | "right";
  className?: string;
  imageClassName?: string;
  /** Only animate once */
  once?: boolean;
}

/**
 * Image reveal with mask/overlay wipe animation.
 * Shows a colored overlay that slides away to reveal the image
 * while the image subtly scales in.
 */
export function ImageReveal({
  src,
  alt,
  width,
  height,
  priority = false,
  overlayColor = "var(--color-accent)",
  origin = "left",
  className,
  imageClassName,
  once = true,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={cn("h-full w-full object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Overlay wipe */}
      <motion.div
        variants={imageRevealOverlay}
        style={{
          backgroundColor: overlayColor,
          transformOrigin: origin === "left" ? "right" : "left",
        }}
        className="absolute inset-0 z-10"
      />

      {/* Image with scale */}
      <motion.div variants={imageScale} className="h-full w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={cn("h-full w-full object-cover", imageClassName)}
        />
      </motion.div>
    </motion.div>
  );
}
