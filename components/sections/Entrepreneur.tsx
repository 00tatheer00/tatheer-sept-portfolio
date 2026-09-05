"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";

/**
 * 06 — Entrepreneur section.
 * Introduces Tech4Edges and EEST founding roles with editorial brand layout.
 */
export function Entrepreneur() {
  return (
    <section
      id="entrepreneur"
      className="relative overflow-hidden bg-[var(--color-background-alt)] py-28 sm:py-36 lg:py-44"
    >
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-5 lg:gap-12">
          {/* Left: Title (2 cols) */}
          <div className="lg:col-span-2">
            <Reveal>
              <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                03 / Identity
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mb-2 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
                ENTRE-
                <br />
                PRENEUR
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-mono text-sm uppercase tracking-[0.15em] text-[var(--color-foreground-muted)]">
                Building Opportunities.
              </p>
            </Reveal>
          </div>

          {/* Right: Content (3 cols) */}
          <div className="lg:col-span-3 lg:pt-8">
            <Reveal delay={0.3}>
              <p className="mb-10 max-w-lg text-base leading-relaxed text-[var(--color-foreground-secondary)] sm:text-lg">
                From building software products to building something bigger —
                technology ventures that create opportunities for others.
              </p>
            </Reveal>

            {/* Ventures */}
            <div className="space-y-8">
              <Reveal delay={0.4}>
                <div className="group border-l-2 border-[var(--color-accent)]/30 py-2 pl-6 transition-colors hover:border-[var(--color-accent)]">
                  <h3 className="mb-1 text-xl font-semibold tracking-tight sm:text-2xl">
                    Tech4Edges
                  </h3>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    Founder & CEO
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    Building technology solutions and digital products that
                    serve real-world business needs.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="group border-l-2 border-[var(--color-border)] py-2 pl-6 transition-colors hover:border-[var(--color-accent)]">
                  <h3 className="mb-1 text-xl font-semibold tracking-tight sm:text-2xl">
                    Emerging Edge School of Technology
                  </h3>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    Director
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    Bridging the gap between academic learning and industry
                    practice through hands-on technology education.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
