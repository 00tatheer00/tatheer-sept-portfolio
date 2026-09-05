"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";

const founderPillars = [
  {
    title: "Building Technology",
    subtitle: "Tech4Edges · Software Ventures",
    role: "Founder & CEO",
    description:
      "Engineering end-to-end digital solutions, custom multi-tenant SaaS platforms, and automated business workflows for high-growth enterprises and founders.",
    highlights: ["SaaS Architecture", "Custom Enterprise Software", "API Automation"],
    actionLabel: "Inspect Systems",
    href: "/projects",
  },
  {
    title: "Building People & Opportunities",
    subtitle: "Emerging Edge School of Technology (EEST)",
    role: "Director & LMS Architect",
    description:
      "Bridging the disconnect between academic curricula and production engineering. Architected the custom LMS platform powering students, mentors, and courses.",
    highlights: ["Custom LMS Portal", "500+ Trained Developers", "Curriculum Design"],
    actionLabel: "Read Case Study",
    href: "/projects/eest-portal",
  },
];

/**
 * 06 — Entrepreneur / Founder Section (Rebuilt).
 * Communicates: Building Technology + Building People + Building Opportunities
 * Naturally unites Tech4Edges and EEST as parts of the personal engineering journey.
 */
export function Entrepreneur() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="entrepreneur"
      className="relative overflow-hidden bg-[var(--color-background-alt)] py-28 sm:py-36 lg:py-44"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <Container>
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                03 / Founder &amp; Leadership
              </span>
              <span className="h-px w-10 bg-[var(--color-border)]" />
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                Venture Architecture
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--color-foreground)] mb-6">
              Building Technology. <br />
              Building People. <br />
              <span className="text-[var(--color-accent)]">Building Opportunities.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--color-foreground-secondary)]">
              Venture building is systems engineering applied to organizations. Code builds software tools; ventures build human capital, team autonomy, and sustainable economic impact.
            </p>
          </Reveal>
        </div>

        {/* Dual-Wing Founder Matrix: Tech4Edges & EEST */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {founderPillars.map((venture, idx) => (
            <motion.div
              key={venture.subtitle}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-8 sm:p-12 backdrop-blur-md transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)] flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                    0{idx + 1} {"//"} VENTURE
                  </span>
                  <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-accent)]">
                    {venture.role}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-2">
                  {venture.subtitle}
                </h3>

                <div className="font-mono text-xs text-[var(--color-foreground-subtle)] mb-6 uppercase tracking-widest">
                  {venture.title}
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[var(--color-foreground-muted)] mb-8">
                  {venture.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-8 border-t border-[var(--color-border)]/60 pt-6">
                  <span className="font-mono text-[0.62rem] uppercase tracking-wider text-[var(--color-foreground-subtle)] block mb-2">
                    Core Focus &amp; Delivery:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {venture.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)]/70 px-2.5 py-1 font-mono text-xs text-[var(--color-foreground-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="border-t border-[var(--color-border)]/60 pt-6">
                <Link
                  href={venture.href}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] transition-colors hover:text-white group-hover:translate-x-1 duration-200"
                >
                  <span>{venture.actionLabel}</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
