"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { speakingEngagements, communityInitiatives } from "@/data/speaking";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function SpeakingThoughtLeadership() {
  const shouldReduceMotion = useReducedMotion();
  const keynote = speakingEngagements.find((s) => s.isFeatured) ?? speakingEngagements[0];
  const otherEngagements = speakingEngagements.filter((s) => !s.isFeatured);

  return (
    <section
      id="thought-leadership"
      className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-surface)]/20 relative"
    >
      <Container>
        <SectionHeading
          label="Ecosystem & Leadership"
          title="SPEAKING & COMMUNITY IMPACT"
          description="Participating actively in the technology ecosystem—mentoring emerging engineers, delivering keynote roadmaps, and advising on student employability."
          className="mb-16"
        />

        {/* SECTION 12: Featured Keynote Presentation */}
        <div className="mb-20 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[var(--color-accent)]/10 blur-[100px]"
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="accent" size="sm" className="font-mono">
              Featured Keynote Lecture
            </Badge>
            <span className="font-mono text-xs text-[var(--color-foreground-muted)]">
              {keynote.institution}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-foreground)] leading-tight mb-6 max-w-4xl">
            {keynote.title}
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-[var(--color-foreground-muted)] leading-relaxed mb-8 max-w-3xl">
            {keynote.description}
          </p>

          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] block">
              Core Presentation Themes & Discussion Points
            </span>
            <div className="flex flex-wrap gap-2">
              {keynote.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3.5 py-1.5 font-mono text-xs text-[var(--color-foreground-muted)]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 13: Community Initiatives & Job Fairs */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-foreground)] mb-2">
              Active Community Involvements
            </h3>
            <p className="text-sm text-[var(--color-foreground-muted)]">
              Real-world engagement with developer forums, Google Developer Groups, hackathons, and job fairs.
            </p>
          </div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12"
          >
            {communityInitiatives.map((init) => (
              <motion.div
                key={init.title}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]/80"
              >
                <span className="font-mono text-xs text-[var(--color-accent)] block mb-2">
                  ▹ Ecosystem
                </span>
                <h4 className="font-heading font-bold text-base text-[var(--color-foreground)] mb-2">
                  {init.title}
                </h4>
                <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                  {init.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Regional Institutional Engagements */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] block mb-4">
              Highlighted Ecosystem Collaborations
            </span>
            <div className="grid gap-4 md:grid-cols-3">
              {otherEngagements.map((item) => (
                <div key={item.id} className="border-l-2 border-[var(--color-accent)]/40 pl-4 py-1">
                  <span className="font-mono text-[0.65rem] text-[var(--color-accent)] block mb-1">
                    {item.event}
                  </span>
                  <h5 className="font-heading font-bold text-sm text-[var(--color-foreground)] mb-1">
                    {item.title}
                  </h5>
                  <p className="text-xs text-[var(--color-foreground-muted)]">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
