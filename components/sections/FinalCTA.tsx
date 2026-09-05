"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedText } from "@/components/animation/AnimatedText";
import { Reveal } from "@/components/animation/Reveal";

/**
 * 13 — Final CTA section.
 * Bold closing statement with clear call-to-action.
 */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-48"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <Container size="narrow" className="text-center">
        <Reveal>
          <span className="mb-8 inline-block font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Let&apos;s Connect
          </span>
        </Reveal>

        <div className="mb-6">
          <AnimatedText
            text="HAVE A PROBLEM"
            as="h2"
            splitBy="word"
            className="justify-center text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em] text-[var(--color-foreground-secondary)]"
          />
          <AnimatedText
            text="WORTH SOLVING?"
            as="h2"
            splitBy="word"
            delay={0.15}
            className="justify-center text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]"
          />
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mb-4 text-2xl font-semibold tracking-tight text-[var(--color-accent)] sm:text-3xl">
            Let&apos;s build it.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mx-auto mb-10 max-w-lg">
            <p className="mb-8 text-base leading-relaxed text-[var(--color-foreground-muted)]">
              Whether it&apos;s a SaaS product, business system, web application
              or something entirely new — let&apos;s turn the idea into something
              real.
            </p>

            {/* Core Brand Statement from Creative Director */}
            <div className="space-y-1.5 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--color-foreground-muted)]/80 border-y border-[var(--color-border)]/40 py-5">
              <p className="transition-colors hover:text-[var(--color-foreground)]">I BUILD SOFTWARE.</p>
              <p className="transition-colors hover:text-[var(--color-foreground)]">I BUILD SYSTEMS.</p>
              <p className="transition-colors hover:text-[var(--color-foreground)]">I BUILD DEVELOPERS.</p>
              <p className="transition-colors hover:text-[var(--color-accent)] font-semibold">I BUILD OPPORTUNITIES.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Button
                variant="accent"
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

          {/* Signature Brand Signoff */}
          <div className="mt-14 flex flex-col items-center">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-[var(--color-foreground)]">
              S TATHEER HUSSAIN
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[var(--color-accent)] mt-1">
              ENGINEER · EDUCATOR · ENTREPRENEUR
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
