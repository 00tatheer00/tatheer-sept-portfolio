"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const portalElements = [
  { label: "Students", position: "top-left" },
  { label: "Courses", position: "top-right" },
  { label: "Trainers", position: "bottom-left" },
  { label: "Progress", position: "bottom-right" },
  { label: "Management", position: "center-bottom" },
];

/**
 * 10 — EEST Story section.
 * Featured story about building the EEST Portal/LMS.
 * Uses abstract portal visual instead of fake screenshots.
 */
export function EESTStory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="eest"
      className="relative overflow-hidden bg-[var(--color-background-alt)] py-28 sm:py-36 lg:py-44"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Story */}
          <div>
            <Reveal>
              <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Featured Story
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                <span className="text-[var(--color-foreground-secondary)]">
                  I don&apos;t only teach technology.
                </span>
                <br />
                <span className="text-[var(--color-foreground)]">
                  I build the technology behind learning.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-6 max-w-md text-base leading-relaxed text-[var(--color-foreground-secondary)]">
                The Emerging Edge School of Technology needed more than a
                curriculum — it needed a complete digital learning ecosystem.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                Personally developed and continuously maintained, the EEST
                Portal serves as the backbone of the school&apos;s educational
                operations — managing students, trainers, courses, progress
                tracking, and institutional workflows.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {["LMS", "Portal", "Full-Stack", "MERN", "Real-Time"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-foreground-muted)]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Right: Abstract portal ecosystem visual */}
          <Reveal delay={0.3}>
            <div className="relative">
              {/* Central hub */}
              <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                {/* Center label */}
                <div className="z-10 text-center">
                  <p className="mb-1 font-mono text-[0.5rem] uppercase tracking-[0.3em] text-[var(--color-accent)]/60">
                    System
                  </p>
                  <p className="text-lg font-semibold tracking-tight sm:text-xl">
                    EEST Portal
                  </p>
                  <p className="font-mono text-[0.6rem] text-[var(--color-foreground-muted)]">
                    Learning Ecosystem
                  </p>
                </div>

                {/* Orbital nodes */}
                <motion.div
                  variants={shouldReduceMotion ? undefined : staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {portalElements.map(({ label }, i) => {
                    const angle = (i / portalElements.length) * 2 * Math.PI - Math.PI / 2;
                    const radius = 42;
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);

                    return (
                      <motion.div
                        key={label}
                        variants={shouldReduceMotion ? undefined : fadeInUp}
                        className="absolute"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* Connection line to center */}
                        <div
                          className="absolute left-1/2 top-1/2 h-px origin-left bg-[var(--color-accent)]/10"
                          style={{
                            width: `${radius * 2}px`,
                            transform: `rotate(${angle + Math.PI}rad)`,
                          }}
                        />

                        {/* Node */}
                        <div className="relative rounded-[var(--radius-lg)] border border-[var(--color-accent)]/20 bg-[var(--color-background-alt)] px-3 py-2 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent-subtle)]">
                          <span className="whitespace-nowrap font-mono text-[0.55rem] font-medium uppercase tracking-wider text-[var(--color-accent)]">
                            {label}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Decorative ring */}
                <div className="absolute inset-8 rounded-full border border-dashed border-[var(--color-border)]/50" />
                <div className="absolute inset-16 rounded-full border border-[var(--color-accent)]/10" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
