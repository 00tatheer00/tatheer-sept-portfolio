"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Magnetic pull strength (px offset). Default 10. */
  strength?: number;
  /** Disable on touch devices automatically */
  disabled?: boolean;
}

/**
 * Wraps children with a magnetic hover effect.
 * The element subtly follows the cursor when hovered.
 * Desktop only — no effect on touch devices.
 */
export function MagneticButton({
  children,
  className,
  strength = 10,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  /* Scale subtly on hover */
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 400, damping: 25 });

  /* Slight inner rotation for depth */
  const rotateX = useTransform(springY, [-strength, strength], [2, -2]);
  const rotateY = useTransform(springX, [-strength, strength], [-2, 2]);

  function handleMouseMove(e: MouseEvent) {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(((e.clientX - centerX) / (rect.width / 2)) * strength);
    y.set(((e.clientY - centerY) / (rect.height / 2)) * strength);
    scale.set(1.03);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        rotateX,
        rotateY,
      }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
