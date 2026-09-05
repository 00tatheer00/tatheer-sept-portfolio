"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface EvolutionStage {
  id: string;
  step: string;
  title: string;
  roleTitle: string;
  institution: string;
  tagline: string;
  description: string;
  keyFocus: string[];
  identityShift: string;
}

const evolutionStages: EvolutionStage[] = [
  {
    id: "student",
    step: "01",
    title: "STUDENT",
    roleTitle: "Computer Science Scholar",
    institution: "University of Peshawar",
    tagline: "Mastering theoretical computational logic & discrete fundamentals",
    description:
      "The foundation of engineering intuition. Deep immersion into data structures, memory models in C++, computational logic, and algorithmic complexity. Laying the groundwork where writing code is seen as systematic problem solving.",
    keyFocus: ["Algorithms", "Data Structures", "C++", "Java", "Computer Architecture", "Discrete Logic"],
    identityShift: "From curiosity ➔ rigorous computational fundamentals",
  },
  {
    id: "developer",
    step: "02",
    title: "DEVELOPER",
    roleTitle: "Full-Stack Software Engineer",
    institution: "Production Web & Enterprise Ecosystems",
    tagline: "Translating algorithmic theory into resilient production software",
    description:
      "Transitioning from academic exercises to production reality. Architecting full-stack web applications, designing RESTful interfaces, managing relational & document persistence, and building modern, responsive user experiences.",
    keyFocus: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
    identityShift: "From code syntax ➔ end-to-end full stack execution",
  },
  {
    id: "trainer",
    step: "03",
    title: "TRAINER",
    roleTitle: "Senior Technical Instructor",
    institution: "SMIT, NAVTTC, Arfa Karim Incubator & EEST",
    tagline: "Deconstructing complex engineering paradigms for the next generation",
    description:
      "Discovering that true mastery requires the ability to teach. Mentoring over 500 developers across major public and private IT initiatives. Creating hands-on, project-first curricula that bridge syntax to professional employment.",
    keyFocus: ["MERN Architecture", "Curriculum Design", "Clean Code Culture", "Git Workflows", "Mentorship"],
    identityShift: "From individual builder ➔ multiplying engineering talent",
  },
  {
    id: "lecturer",
    step: "04",
    title: "LECTURER",
    roleTitle: "Visiting University Lecturer",
    institution: "University of Peshawar — Department of Computer Science",
    tagline: "Elevating academic standards with real-world industry rigor",
    description:
      "Returning to academia to instruct collegiate computer science cohorts in Object-Oriented Programming (OOP) in C++ and Java. Blending university pedagogical foundations with modern software engineering craftsmanship.",
    keyFocus: ["OOP Paradigms", "Inheritance & Polymorphism", "Laboratory Instruction", "Academic Assessment"],
    identityShift: "From practical trainer ➔ accredited collegiate authority",
  },
  {
    id: "founder",
    step: "05",
    title: "FOUNDER",
    roleTitle: "Founder & CEO / EdTech Director",
    institution: "Tech4Edges & Emerging Edge School of Technology",
    tagline: "Building resilient organizations, software systems, and career ecosystems",
    description:
      "Synthesizing engineering and education into autonomous technology ventures. Heading Tech4Edges to engineer bespoke SaaS systems and directing EEST while architecting the proprietary LMS platform powering student learning.",
    keyFocus: ["Venture Leadership", "SaaS Engineering", "EEST LMS Platform", "AI Integration", "Product Strategy"],
    identityShift: "From technical specialist ➔ strategic technology founder",
  },
];

export function CareerEvolution() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const currentStage = evolutionStages[activeStageIndex];

  return (
    <section
      id="career-evolution"
      className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-surface)]/30 relative"
    >
      <Container>
        <SectionHeading
          label="Evolutionary Narrative"
          title="THE CAREER PROGRESSION"
          description="A deliberate multi-dimensional trajectory. Each phase built upon the last, expanding from technical mastery to pedagogical authority and venture leadership."
          className="mb-16"
        />

        {/* Interactive progression rail */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex min-w-[640px] items-center justify-between border-b border-[var(--color-border)] relative">
            {evolutionStages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className="group flex flex-col items-center pb-4 text-center transition-all relative flex-1 cursor-pointer focus:outline-none"
                >
                  <span className="font-mono text-[0.65rem] tracking-widest text-[var(--color-foreground-subtle)] mb-1">
                    PHASE {stage.step}
                  </span>
                  <span
                    className={cn(
                      "font-heading font-bold text-sm tracking-wider uppercase transition-colors",
                      isActive
                        ? "text-[var(--color-accent)]"
                        : isPast
                          ? "text-[var(--color-foreground)]"
                          : "text-[var(--color-foreground-subtle)] group-hover:text-[var(--color-foreground-muted)]"
                    )}
                  >
                    {stage.title}
                  </span>

                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-stage-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] shadow-[0_0_12px_rgba(200,169,110,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Content Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-12 shadow-sm"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                {/* Left overview */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="accent" size="sm" className="font-mono">
                      PHASE {currentStage.step}
                    </Badge>
                    <span className="text-xs font-mono text-[var(--color-foreground-muted)]">
                      {currentStage.institution}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-2">
                    {currentStage.roleTitle}
                  </h3>

                  <p className="text-sm font-medium text-[var(--color-accent)] mb-6">
                    {currentStage.tagline}
                  </p>

                  <p className="text-base sm:text-lg text-[var(--color-foreground-muted)] leading-relaxed mb-8">
                    {currentStage.description}
                  </p>

                  {/* Identity Shift Banner */}
                  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-foreground-subtle)] block mb-1">
                      Paradigm Shift
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[var(--color-accent)]">
                      {currentStage.identityShift}
                    </span>
                  </div>
                </div>

                {/* Right technologies & navigation */}
                <div className="lg:col-span-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]/60 p-6">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] mb-4">
                    Core Focus & Technology Stack
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentStage.keyFocus.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-mono text-[var(--color-foreground-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
                    <button
                      type="button"
                      disabled={activeStageIndex === 0}
                      onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 text-xs font-mono rounded border border-[var(--color-border)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--color-accent)]/50 transition-colors"
                    >
                      ← Previous Phase
                    </button>
                    <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
                      {activeStageIndex + 1} / {evolutionStages.length}
                    </span>
                    <button
                      type="button"
                      disabled={activeStageIndex === evolutionStages.length - 1}
                      onClick={() =>
                        setActiveStageIndex((prev) =>
                          Math.min(evolutionStages.length - 1, prev + 1)
                        )
                      }
                      className="px-3 py-1.5 text-xs font-mono rounded border border-[var(--color-border)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--color-accent)]/50 transition-colors"
                    >
                      Next Phase →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
