"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { cn } from "@/lib/utils";

interface EngineeringPhase {
  id: string;
  step: string;
  title: string;
  focus: string;
  principle: string;
  artifacts: string[];
}

const engineeringStages: EngineeringPhase[] = [
  {
    id: "problem",
    step: "01",
    title: "PROBLEM",
    focus: "Domain Boundary & Constraint Deconstruction",
    principle: "Understand the core business bottleneck before writing a single line of code. Quantify latency, throughput, and user constraints.",
    artifacts: ["Requirements Matrix", "Domain Boundaries", "Success Metrics"],
  },
  {
    id: "architecture",
    step: "02",
    title: "ARCHITECTURE",
    focus: "Data Modeling & Contract Design",
    principle: "Schema correctness beats clever algorithms. Establish relational models, strict API specifications, and clear component responsibilities.",
    artifacts: ["ERD Schemas", "OpenAPI / Typed Contracts", "State Trees"],
  },
  {
    id: "implementation",
    step: "03",
    title: "IMPLEMENTATION",
    focus: "Type-Safe, Modular Execution",
    principle: "Write predictable, readable software with explicit error boundaries, strong TypeScript typing, and defensive programming practices.",
    artifacts: ["Next.js App Router", "Node.js / Express Services", "PostgreSQL / Prisma"],
  },
  {
    id: "testing",
    step: "04",
    title: "TESTING",
    focus: "Contract Validation & Regression Defense",
    principle: "If it is not tested, it is already broken. Exercise critical paths with unit tests, API integration tests, and end-to-end flows.",
    artifacts: ["Unit & Integration Suites", "E2E Playwright Flows", "Type-Check Gates"],
  },
  {
    id: "deployment",
    step: "05",
    title: "DEPLOYMENT",
    focus: "Automated Pipelines & Zero-Downtime Releases",
    principle: "Deployments should be routine, repeatable, and automated via declarative CI/CD, containerization, and safe configuration management.",
    artifacts: ["Docker Containers", "Vercel / AWS Infrastructure", "GitHub Actions CI"],
  },
  {
    id: "improvement",
    step: "06",
    title: "IMPROVEMENT",
    focus: "Telemetry, Observability & Refinement",
    principle: "Production is where software truly begins. Monitor p99 response times, audit database queries, gather telemetry, and iterate.",
    artifacts: ["Performance Profiling", "Query Optimization", "User Feedback Loops"],
  },
];

/**
 * 04 — Engineer Section (Rebuilt).
 * Visualizes the 6-stage engineering thinking pipeline:
 * PROBLEM → ARCHITECTURE → IMPLEMENTATION → TESTING → DEPLOYMENT → IMPROVEMENT
 */
export function Engineer() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const selected = engineeringStages[activeStage];

  return (
    <section
      id="engineer"
      className="relative overflow-hidden bg-[var(--color-background-alt)] py-28 sm:py-36 lg:py-44"
    >
      {/* Subtle architectural border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <Container>
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                01 / Engineering Discipline
              </span>
              <span className="h-px w-10 bg-[var(--color-border)]" />
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                Methodology &amp; Systems Thinking
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--color-foreground)] mb-6">
              How I Think <br />
              <span className="text-[var(--color-accent)]">As An Engineer</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--color-foreground-secondary)]">
              Engineering is not the act of stitching together random packages. It is a disciplined progression from ambiguous business requirements into resilient, verified, and observable production software.
            </p>
          </Reveal>
        </div>

        {/* 6-Stage Interactive Engineering Pipeline System */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Column: Stage Selector List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)] mb-3 px-2">
              The 6-Phase Engineering Pipeline
            </div>

            {engineeringStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    "w-full text-left rounded-xl p-4 sm:p-5 transition-all duration-300 border flex items-center justify-between group",
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-surface)] shadow-lg shadow-black/40"
                      : "border-[var(--color-border)]/70 bg-[var(--color-surface)]/40 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)]"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold transition-colors",
                        isActive ? "text-[var(--color-accent)]" : "text-[var(--color-foreground-subtle)] group-hover:text-[var(--color-foreground-muted)]"
                      )}
                    >
                      {stage.step}
                    </span>
                    <div>
                      <div
                        className={cn(
                          "font-heading font-bold tracking-tight text-base sm:text-lg transition-colors",
                          isActive ? "text-[var(--color-foreground)]" : "text-[var(--color-foreground-secondary)] group-hover:text-[var(--color-foreground)]"
                        )}
                      >
                        {stage.title}
                      </div>
                      <div className="text-xs text-[var(--color-foreground-subtle)] hidden sm:block truncate max-w-[240px]">
                        {stage.focus}
                      </div>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "font-mono text-xs transition-transform duration-200",
                      isActive ? "text-[var(--color-accent)] translate-x-1" : "text-[var(--color-border)] group-hover:text-[var(--color-foreground-subtle)]"
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Detail Inspector */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 shadow-2xl backdrop-blur-md">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    PHASE {selected.step} {"//"} {selected.title}
                  </span>
                </div>
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                  ACTIVE_INSPECTOR
                </span>
              </div>

              {/* Phase Title & Focus */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-2">
                  {selected.focus}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-[var(--color-foreground-secondary)]">
                  {selected.principle}
                </p>
              </div>

              {/* Engineering Artifacts & Deliverables */}
              <div className="border-t border-[var(--color-border)]/80 pt-6">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)] block mb-3">
                  Key Architectural Deliverables
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {selected.artifacts.map((art) => (
                    <span
                      key={art}
                      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3.5 py-2 font-mono text-xs text-[var(--color-foreground)]"
                    >
                      <span className="text-[var(--color-accent)] mr-2">›</span>
                      {art}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flow progression mini-footer */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]/60 flex items-center justify-between text-xs text-[var(--color-foreground-subtle)] font-mono">
                <span>STAGE {selected.step} OF 06</span>
                <span className="text-[var(--color-accent)]">
                  {activeStage < 5 ? `NEXT: ${engineeringStages[activeStage + 1].title}` : "LIFECYCLE CONTINUOUS LOOP"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
