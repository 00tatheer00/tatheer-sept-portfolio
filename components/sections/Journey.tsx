"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { cn } from "@/lib/utils";

interface CareerMilestone {
  step: string;
  stage: string;
  period: string;
  headline: string;
  narrative: string;
  milestones: string[];
}

const careerStages: CareerMilestone[] = [
  {
    step: "01",
    stage: "STUDENT",
    period: "2018 — 2022",
    headline: "Foundations in Computational Science",
    narrative:
      "Deep immersion in core computer science at the University of Peshawar. Mastered data structures, algorithmic design, memory constraints, and relational database normalization using C++ and Java.",
    milestones: ["BS Computer Science Degree", "Algorithmic Problem Solving", "Database Theory"],
  },
  {
    step: "02",
    stage: "DEVELOPER",
    period: "2020 — Present",
    headline: "Production Full-Stack Software Engineering",
    narrative:
      "Transitioned from theoretical fundamentals to shipping commercial software. Architecting full-stack React and Next.js applications, building robust REST APIs with Node.js/Express, and deploying scalable microservices.",
    milestones: ["Production SaaS Architectures", "Multi-Tenant Cloud Services", "Relational Schema Design"],
  },
  {
    step: "03",
    stage: "TRAINER",
    period: "2022 — Present",
    headline: "Industry Mentorship & Developer Bootcamps",
    narrative:
      "Recognized the gap between theoretical knowledge and commercial standards. Began leading intensive developer cohorts at SMIT (Saylani) and NAVTTC, transforming students into autonomous software builders.",
    milestones: ["500+ Mentored Engineers", "SMIT Lead Full-Stack Instructor", "Curriculum Standardization"],
  },
  {
    step: "04",
    stage: "LECTURER",
    period: "2023 — Present",
    headline: "Bringing Production Realities to Academia",
    narrative:
      "Appointed Visiting Lecturer at the University of Peshawar Department of Computer Science. Teaching advanced programming, web technologies, and software engineering with industry-grade rigor.",
    milestones: ["University CS Faculty", "Advanced Web Technologies", "Engineering Ethics & Standards"],
  },
  {
    step: "05",
    stage: "FOUNDER",
    period: "2024 — Present",
    headline: "Venture Leadership: Tech4Edges & EEST",
    narrative:
      "Synthesizing engineering, education, and business into enduring organizations. Founded Tech4Edges for software engineering services, and directing EEST while engineering its flagship LMS infrastructure.",
    milestones: ["Founder & CEO of Tech4Edges", "Director & LMS Architect at EEST", "Venture Scalability"],
  },
];

/**
 * 07 — Journey Section (Rebuilt).
 * Memorable career progression:
 * STUDENT → DEVELOPER → TRAINER → LECTURER → FOUNDER
 * Editorial milestone stepper with interactive depth and elegant typography.
 */
export function Journey() {
  const [activeIdx, setActiveIdx] = useState<number>(4); // Default to current 'FOUNDER' stage

  const current = careerStages[activeIdx];

  return (
    <section
      id="journey"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44 bg-[var(--color-background)]"
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <Container>
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                04 / Career Evolution
              </span>
              <span className="h-px w-10 bg-[var(--color-border)]" />
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                Chronological Trajectory
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--color-foreground)] mb-6">
              The Evolution: <br />
              <span className="text-[var(--color-accent)]">Student To Founder</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--color-foreground-secondary)]">
              A decade of deliberate progression from understanding computer science foundations to engineering enterprise systems, teaching hundreds of developers, and founding technology ventures.
            </p>
          </Reveal>
        </div>

        {/* Milestone Progression Stepper Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
            {careerStages.map((stage, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={stage.stage}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={cn(
                    "group relative rounded-xl p-4 text-left transition-all duration-300 border",
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-surface)] shadow-lg shadow-black/30"
                      : "border-[var(--color-border)]/60 bg-[var(--color-surface)]/40 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)]"
                  )}
                >
                  <div className="flex items-center justify-between font-mono text-[0.6rem] text-[var(--color-foreground-subtle)] mb-1">
                    <span>{stage.step}</span>
                    <span className="text-[0.55rem] text-[var(--color-accent)]/80">
                      {stage.period.split("—")[0]}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "font-heading font-bold tracking-tight text-sm sm:text-base uppercase transition-colors",
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-foreground-secondary)] group-hover:text-[var(--color-foreground)]"
                    )}
                  >
                    {stage.stage}
                  </div>

                  {/* Active highlight line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-journey-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] rounded-b-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Showcase Card */}
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 lg:p-14 relative overflow-hidden backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8 pb-8 border-b border-[var(--color-border)]/70">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                <span>STAGE {current.step} {"//"} 05</span>
                <span>·</span>
                <span>{current.period}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--color-foreground)] mb-3">
                {current.headline}
              </h3>

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-[var(--color-foreground-muted)]">
                {current.narrative}
              </p>
            </div>

            <div className="flex-shrink-0 font-heading text-6xl sm:text-8xl font-black text-[var(--color-accent)]/10 select-none hidden lg:block">
              {current.stage}
            </div>
          </div>

          {/* Key Achievements & Verification Markers */}
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)] block mb-3">
              Verified Progression Milestones
            </span>
            <div className="flex flex-wrap gap-3">
              {current.milestones.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 font-mono text-xs text-[var(--color-foreground)]"
                >
                  <span className="text-[var(--color-accent)] mr-2">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
