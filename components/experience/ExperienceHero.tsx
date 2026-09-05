"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const quickJumpLinks = [
  { label: "Career Evolution", href: "#career-evolution" },
  { label: "Roles & Impact", href: "#role-timeline" },
  { label: "System Architecture", href: "#system-architecture" },
  { label: "Teaching & LMS", href: "#teaching-ecosystem" },
  { label: "Credentials & Awards", href: "#credentials" },
  { label: "Speaking & Insights", href: "#thought-leadership" },
];

export function ExperienceHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]">
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow badge */}
          <motion.div variants={shouldReduceMotion ? undefined : fadeInUp} className="mb-6">
            <Badge variant="accent" size="sm" className="font-mono tracking-widest uppercase">
              Professional Journey & Depth
            </Badge>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.05] mb-6"
          >
            MORE THAN A <span className="text-[var(--color-accent)]">JOB TITLE</span>.
          </motion.h1>

          {/* Supporting thesis */}
          <motion.p
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-[var(--color-foreground-muted)] font-light leading-relaxed mb-10 max-w-3xl"
          >
            A deliberate evolution across software engineering, developer education, systems
            architecture, and venture building. Discovering how theory turns into scalable software,
            and software turns into human impact.
          </motion.p>

          {/* Quick chapter anchor navigation */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="pt-6 border-t border-[var(--color-border)]"
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)] mb-3">
              Direct Chapter Navigation
            </p>
            <div className="flex flex-wrap gap-2">
              {quickJumpLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-3.5 py-1 text-xs text-[var(--color-foreground-muted)] transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-foreground)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
