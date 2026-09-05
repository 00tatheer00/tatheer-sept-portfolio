"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";

/**
 * 11 — Tech4Edges section.
 * Editorial brand-focused founder section.
 */
export function Tech4Edges() {
  return (
    <section
      id="tech4edges"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Brand mark */}
          <div>
            <Reveal>
              <span className="mb-6 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Venture
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mb-4 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.02em]">
                TECH4EDGES
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-8 font-mono text-sm uppercase tracking-[0.15em] text-[var(--color-accent)]">
                Founder & CEO
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="h-px w-16 bg-[var(--color-border)]" />
            </Reveal>
          </div>

          {/* Right: Copy */}
          <div className="lg:pt-4">
            <Reveal delay={0.3}>
              <blockquote className="mb-8 border-l-2 border-[var(--color-accent)]/30 pl-6">
                <p className="text-xl font-medium leading-relaxed tracking-tight text-[var(--color-foreground)] sm:text-2xl">
                  &ldquo;From building products to building a technology
                  venture.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mb-6 max-w-md text-base leading-relaxed text-[var(--color-foreground-secondary)]">
                Tech4Edges is where engineering meets entrepreneurship —
                building technology solutions and digital products that serve
                real-world needs across industries.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                The vision is clear: leverage deep technical knowledge to
                create tools and platforms that make a genuine difference.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
