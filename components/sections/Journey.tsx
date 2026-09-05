"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";

const stages = [
  { title: "STUDENT", description: "Learning the fundamentals.", number: "01" },
  { title: "DEVELOPER", description: "Turning knowledge into software.", number: "02" },
  { title: "TRAINER", description: "Teaching others to build.", number: "03" },
  { title: "LECTURER", description: "Taking practical knowledge into academia.", number: "04" },
  { title: "FOUNDER", description: "Building technology and opportunities.", number: "05" },
];

/**
 * 07 — Journey section.
 * Scroll-driven career progression where each stage transforms into the next.
 */
export function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-28 sm:py-36 lg:py-44"
    >
      <Container>
        {/* Section header */}
        <Reveal>
          <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            The Journey
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-semibold tracking-tight sm:mb-24 sm:text-4xl lg:text-5xl">
            From learning to build
            <br />
            <span className="text-[var(--color-accent)]">to building everything.</span>
          </h2>
        </Reveal>

        {/* Journey stages */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)] sm:left-8 lg:left-12" />

          <div className="space-y-0">
            {stages.map(({ title, description, number }, i) => {
              const isLast = i === stages.length - 1;

              return (
                <JourneyStage
                  key={title}
                  title={title}
                  description={description}
                  number={number}
                  index={i}
                  isLast={isLast}
                  scrollProgress={scrollYProgress}
                  shouldReduceMotion={!!shouldReduceMotion}
                  totalStages={stages.length}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Individual Journey Stage ─────────────────────────────── */

function JourneyStage({
  title,
  description,
  number,
  index,
  isLast,
  scrollProgress,
  shouldReduceMotion,
  totalStages,
}: {
  title: string;
  description: string;
  number: string;
  index: number;
  isLast: boolean;
  scrollProgress: MotionValue<number>;
  shouldReduceMotion: boolean;
  totalStages: number;
}) {
  /* Map scroll progress to active stage index */
  const activeIndex = useTransform(scrollProgress, [0.15, 0.85], [0, totalStages - 1]);

  /* Determine if this stage is "active" based on scroll */
  const opacity = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    if (dist < 0.5) return 1;
    if (dist < 1.5) return 0.3;
    return 0.15;
  });

  const scale = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    if (dist < 0.5) return 1;
    return 0.97;
  });

  const content = (
    <div className="group relative flex items-start gap-6 py-10 sm:gap-10 sm:py-14 lg:gap-14">
      {/* Timeline node */}
      <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center sm:h-16 sm:w-16 lg:h-24 lg:w-24">
        <div
          className={`flex h-full w-full items-center justify-center rounded-full border transition-colors duration-500 ${
            isLast
              ? "border-[var(--color-accent)] bg-[var(--color-accent-subtle)]"
              : "border-[var(--color-border)] bg-[var(--color-background)]"
          }`}
        >
          <span
            className={`font-mono text-[0.5rem] font-medium tracking-wider sm:text-xs ${
              isLast
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-foreground-muted)]"
            }`}
          >
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="pt-0 sm:pt-2 lg:pt-5">
        <h3
          className={`mb-2 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
            isLast
              ? "text-[var(--color-accent)]"
              : "text-[var(--color-foreground)]"
          }`}
        >
          {title}
        </h3>
        <p className="max-w-sm text-sm text-[var(--color-foreground-muted)] sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );

  if (shouldReduceMotion) {
    return <Reveal>{content}</Reveal>;
  }

  return (
    <motion.div style={{ opacity, scale }}>
      {content}
    </motion.div>
  );
}
