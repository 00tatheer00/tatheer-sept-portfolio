"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedText } from "@/components/animation/AnimatedText";
import { Reveal } from "@/components/animation/Reveal";
import { HeroGrid } from "./HeroGrid";

/**
 * 02 — Hero section.
 * Full-screen immersive experience with dynamic typographic composition
 * and interactive technical grid background.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      {/* Interactive grid background */}
      <HeroGrid />

      <Container className="relative z-10">
        <div className="py-20 sm:py-0">
          {/* Signature Digital Motif & System Coordinate Tag */}
          <Reveal delay={shouldReduceMotion ? 0 : 0.4}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                TH // 34.0151° N, 71.5249° E
              </span>
              <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)] sm:inline">
                Peshawar · System Architecture
              </span>
            </div>
          </Reveal>

          {/* Main typographic composition */}
          <div className="mb-6">
            <AnimatedText
              text="FULL-STACK"
              as="h1"
              splitBy="char"
              delay={shouldReduceMotion ? 0 : 0.6}
              className="text-[clamp(2.8rem,8.5vw,7.2rem)] font-bold leading-[0.92] tracking-[-0.035em]"
            />
            <AnimatedText
              text="SOFTWARE"
              as="h1"
              splitBy="char"
              delay={shouldReduceMotion ? 0 : 0.8}
              className="text-[clamp(2.8rem,8.5vw,7.2rem)] font-bold leading-[0.92] tracking-[-0.035em]"
            />
            <AnimatedText
              text="ENGINEER"
              as="h1"
              splitBy="char"
              delay={shouldReduceMotion ? 0 : 1.0}
              className="text-[clamp(2.8rem,8.5vw,7.2rem)] font-bold leading-[0.92] tracking-[-0.035em] text-[var(--color-accent)]"
            />
          </div>

          {/* Engineering Visual System Motif: Input -> Process -> Output */}
          <Reveal delay={shouldReduceMotion ? 0 : 1.3}>
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-lg border border-[var(--color-border)]/60 bg-[var(--color-surface)]/40 px-3 py-1.5 font-mono text-[0.6rem] tracking-wider text-[var(--color-foreground-muted)] backdrop-blur-sm">
              <span className="text-[var(--color-foreground)]">INPUT:</span>
              <span>COMPLEX REQUIREMENTS</span>
              <span className="text-[var(--color-accent)] font-bold">➔</span>
              <span className="text-[var(--color-foreground)]">ARCHITECTURE:</span>
              <span>MODULAR SYSTEMS</span>
              <span className="text-[var(--color-accent)] font-bold">➔</span>
              <span className="text-[var(--color-accent)] font-semibold">OUTPUT: PRODUCTION EXCELLENCE</span>
            </div>
          </Reveal>

          {/* Secondary roles — horizontal dynamic layout */}
          <Reveal delay={shouldReduceMotion ? 0 : 1.5}>
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-foreground-muted)] sm:text-xs">
              <span className="text-[var(--color-foreground)] font-medium">SaaS Developer</span>
              <span className="hidden text-[var(--color-accent)]/50 sm:inline">
                ◆
              </span>
              <span className="text-[var(--color-foreground)] font-medium">Technical Educator</span>
              <span className="hidden text-[var(--color-accent)]/50 sm:inline">
                ◆
              </span>
              <span className="text-[var(--color-foreground)] font-medium">Founder &amp; CEO</span>
            </div>
          </Reveal>

          {/* Supporting statement */}
          <Reveal delay={shouldReduceMotion ? 0 : 1.7}>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-[var(--color-foreground-secondary)] sm:text-lg">
              I architect and ship robust web applications, high-throughput backend services, and multi-tenant SaaS platforms — while training the next generation of engineers through university lectures and developer masterclasses.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={shouldReduceMotion ? 0 : 1.9}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Button
                  variant="primary"
                  size="lg"
                  href="#featured-work"
                  data-cursor="button"
                >
                  Explore Systems
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/contact"
                  data-cursor="button"
                >
                  Let&apos;s Build
                </Button>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
          Scroll to explore
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-gradient-to-b from-[var(--color-foreground-subtle)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
