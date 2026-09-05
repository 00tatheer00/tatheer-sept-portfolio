"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";

/**
 * 10 — Final CTA Section: HAVE A PROBLEM WORTH SOLVING?
 * Strictly Faithful to Reference Design.
 * Features:
 * - Stunning atmospheric aurora backdrop with mountain silhouette
 * - Left: "HAVE A PROBLEM / WORTH SOLVING?" ("SOLVING?" in glowing cyan) + "Let's build it together."
 * - Right: Description + "Get In Touch ➔" (gradient pill) & "View My Projects" (border pill)
 */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-36 bg-[#06080F]"
    >
      {/* Background Aurora Landscape from Reference Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <Image
          src="/cta-aurora-hd.png"
          alt="Atmospheric aurora background"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
        {/* Soft edge gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-[#06080F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080F] via-transparent to-[#06080F]" />
      </div>

      {/* Radial Neon Lights */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[350px] rounded-full bg-[#00D2FF]/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-[#8B5CF6]/25 blur-[150px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Headline */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05] mb-4">
                HAVE A PROBLEM <br />
                WORTH <span className="text-[#00D2FF] drop-shadow-[0_0_20px_rgba(0,210,255,0.6)]">SOLVING?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-lg sm:text-xl font-medium text-[#CBD5E1]">
                Let&apos;s build it together.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Narrative + Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end">
            <Reveal delay={0.3}>
              <p className="text-sm sm:text-base leading-relaxed text-[#94A3B8] mb-8 lg:text-right max-w-lg">
                Whether it&apos;s a SaaS product, business system, web application or something entirely new — let&apos;s turn the idea into something real.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary Button: Get In Touch ➔ */}
                <Link
                  href="/contact"
                  data-cursor="button"
                  className="inline-flex items-center gap-2 rounded-full btn-gradient-primary px-7 py-3 text-sm font-semibold tracking-wide text-white"
                >
                  <span>Get In Touch</span>
                  <span className="text-base font-bold">➔</span>
                </Link>

                {/* Secondary Button: View My Projects */}
                <Link
                  href="/projects"
                  data-cursor="button"
                  className="inline-flex items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322]/80 px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#334155] hover:bg-[#151C30]"
                >
                  View My Projects
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
