import type { Variants, Transition } from "framer-motion";

/* ──────────────────────────────────────────────────────────────
   Motion Configuration
   ────────────────────────────────────────────────────────────── */

/** Default spring transition — snappy, professional */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/** Smooth ease transition */
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

/** Slow reveal transition */
export const revealTransition: Transition = {
  duration: 0.8,
  ease: [0.33, 1, 0.68, 1],
};

/** Stagger children delay */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Wider stagger for larger content blocks */
export const staggerContainerWide: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* ──────────────────────────────────────────────────────────────
   Reveal Variants
   ────────────────────────────────────────────────────────────── */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

/* ──────────────────────────────────────────────────────────────
   Text Animation Variants
   ────────────────────────────────────────────────────────────── */

/** Single character / word reveal */
export const charReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/** Line-by-line text reveal with clip */
export const lineReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: revealTransition,
  },
};

/* ──────────────────────────────────────────────────────────────
   Image Reveal Variants
   ────────────────────────────────────────────────────────────── */

export const imageRevealOverlay: Variants = {
  hidden: { scaleX: 1 },
  visible: {
    scaleX: 0,
    transition: {
      duration: 0.8,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

export const imageScale: Variants = {
  hidden: { scale: 1.3 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ──────────────────────────────────────────────────────────────
   Interactive Variants
   ────────────────────────────────────────────────────────────── */

/** Button / interactive element hover + tap */
export const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

/** Magnetic element offset (applied programmatically) */
export const magneticVariants: Variants = {
  idle: { x: 0, y: 0 },
  hover: { x: 0, y: 0 },
};

/* ──────────────────────────────────────────────────────────────
   Page Transition Variants
   ────────────────────────────────────────────────────────────── */

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ──────────────────────────────────────────────────────────────
   Reduced-Motion Utilities
   ────────────────────────────────────────────────────────────── */

/**
 * Strip motion from variants for reduced-motion users.
 * Keeps opacity transitions but removes positional/scale changes.
 */
export function reduceMotionVariants(variants: Variants): Variants {
  const reduced: Variants = {};
  for (const [key, value] of Object.entries(variants)) {
    if (typeof value === "object" && value !== null) {
      const { x, y, scale, rotate, skew, ...rest } = value as Record<
        string,
        unknown
      >;
      // Suppress unused variable warnings — these are intentionally destructured out
      void x;
      void y;
      void scale;
      void rotate;
      void skew;
      reduced[key] = {
        ...rest,
        transition: { duration: 0.01 },
      };
    }
  }
  return reduced;
}
