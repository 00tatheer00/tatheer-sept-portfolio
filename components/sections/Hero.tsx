"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/animation/Reveal";
import { HeroGrid } from "./HeroGrid";

const systemPipeline = [
  { step: "01", name: "IDEA", desc: "Domain & Problem Scoping" },
  { step: "02", name: "ARCHITECTURE", desc: "Contracts & Data Models" },
  { step: "03", name: "CODE", desc: "Type-Safe Implementation" },
  { step: "04", name: "SYSTEM", desc: "Infrastructure & Resilience" },
  { step: "05", name: "PRODUCT", desc: "Production & User Impact" },
];

/**
 * 02 — Hero Section (Rebuilt).
 * Authoritative, cinematic personal digital identity for S Tatheer Hussain.
 * Communicates: S TATHEER HUSSAIN · Full-Stack Software Engineer · SaaS Developer · Technical Educator
 * Integrates: IDEA → ARCHITECTURE → CODE → SYSTEM → PRODUCT
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Subtle technical background grid */}
      <HeroGrid />

      <Container className="relative z-10 w-full">
        <div className="mx-auto max-w-5xl">
          {/* Status & Coordinate Tag */}
          <Reveal delay={shouldReduceMotion ? 0 : 0.1}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.25em] text-[var(--color-accent)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                SYSTEM // 34.0151° N, 71.5249° E
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">
                Peshawar · Full-Stack &amp; Systems Architecture
              </span>
            </div>
          </Reveal>

          {/* Primary Identity: Name */}
          <Reveal delay={shouldReduceMotion ? 0 : 0.2}>
            <h1 className="mb-4 text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold uppercase leading-[0.94] tracking-[-0.035em] text-[var(--color-foreground)]">
              S Tatheer <br className="hidden sm:inline" />
              <span className="text-[var(--color-accent)]">Hussain</span>
            </h1>
          </Reveal>

          {/* Three Core Roles — Clear Typographic Hierarchy */}
          <Reveal delay={shouldReduceMotion ? 0 : 0.35}>
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[var(--color-foreground-muted)]">
              <span className="text-[var(--color-foreground)] font-semibold">
                Full-Stack Software Engineer
              </span>
              <span className="text-[var(--color-accent)]/60">/</span>
              <span className="text-[var(--color-foreground)] font-semibold">
                SaaS Developer
              </span>
              <span className="text-[var(--color-accent)]/60">/</span>
              <span className="text-[var(--color-foreground)] font-semibold">
                Technical Educator
              </span>
            </div>
          </Reveal>

          {/* Core Visual Concept: IDEA → ARCHITECTURE → CODE → SYSTEM → PRODUCT */}
          <Reveal delay={shouldReduceMotion ? 0 : 0.5}>
            <div className="mb-10 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-4 backdrop-blur-md sm:p-5">
              <div className="mb-3 flex items-center justify-between border-b border-[var(--color-border)]/60 pb-2">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
                  Engineering Lifecycle &amp; Mental Model
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-accent)]">
                  5-Stage Continuous Delivery
                </span>
              </div>

              {/* Responsive Flow Stepper */}
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5 sm:gap-2">
                {systemPipeline.map((item, idx) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg border border-[var(--color-border)]/50 bg-[var(--color-background)]/50 p-2.5 transition-colors duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]"
                  >
                    <div className="flex items-center justify-between font-mono text-[0.6rem] text-[var(--color-foreground-subtle)] mb-1">
                      <span>{item.step}</span>
                      {idx < systemPipeline.length - 1 && (
                        <span className="hidden sm:inline text-[var(--color-accent)]/60">→</span>
                      )}
                    </div>
                    <div className="font-mono text-[0.72rem] font-bold tracking-wider text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[0.6rem] leading-tight text-[var(--color-foreground-subtle)] mt-0.5 hidden sm:block">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Supporting Statement */}
          <Reveal delay={shouldReduceMotion ? 0 : 0.65}>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-[var(--color-foreground-secondary)] sm:text-lg">
              I architect, engineer, and ship resilient multi-tenant SaaS products, cloud backends, and full-stack web platforms — while training over 500+ future software engineers through university lectures and professional masterclasses.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={shouldReduceMotion ? 0 : 0.8}>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  data-cursor="button"
                  className="font-mono text-xs uppercase tracking-widest font-semibold"
                >
                  Let&apos;s Build Something
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/projects"
                  data-cursor="button"
                  className="font-mono text-xs uppercase tracking-widest"
                >
                  Explore My Work
                </Button>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Subtle bottom scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.2, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-[var(--color-foreground-subtle)]">
          Scroll To Inspect
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-gradient-to-b from-[var(--color-accent)]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
