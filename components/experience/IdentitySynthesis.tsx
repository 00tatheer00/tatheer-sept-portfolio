"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function IdentitySynthesis() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="identity-synthesis"
      className="py-24 md:py-36 bg-[var(--color-background)] relative overflow-hidden"
    >
      {/* Background glow accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-accent)]/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={shouldReduceMotion ? undefined : fadeInUp} className="mb-6">
            <Badge variant="accent" size="sm" className="font-mono uppercase tracking-widest">
              The Unified Identity
            </Badge>
          </motion.div>

          {/* Large Typographic Triad */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[var(--color-foreground)] leading-[1.02] mb-12"
          >
            ENGINEER.
            <br />
            <span className="text-[var(--color-accent)]">EDUCATOR.</span>
            <br />
            ENTREPRENEUR.
          </motion.h2>

          {/* 3 Pillars Breakdown */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="grid gap-6 sm:grid-cols-3 text-left mb-16"
          >
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-2">
                ENGINEER
              </span>
              <h3 className="font-heading font-bold text-xl text-[var(--color-foreground)] mb-2">
                Building systems.
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                Architecting resilient full-stack platforms, cloud deployments, normalized schemas, and AI-enabled workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-2">
                EDUCATOR
              </span>
              <h3 className="font-heading font-bold text-xl text-[var(--color-foreground)] mb-2">
                Building developers.
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                Mentoring 500+ engineers, university lecturing at UoP, and engineering custom LMS learning infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-2">
                ENTREPRENEUR
              </span>
              <h3 className="font-heading font-bold text-xl text-[var(--color-foreground)] mb-2">
                Building opportunities.
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                Founding Tech4Edges, directing EEST, and creating scalable software solutions that drive measurable business impact.
              </p>
            </div>
          </motion.div>

          {/* Forward-looking CTAs */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90 hover:shadow-[0_0_30px_rgba(200,169,110,0.3)]"
            >
              Explore Project Lab →
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-3.5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)]"
            >
              Read The Personal Story
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
