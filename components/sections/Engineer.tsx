"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const processStages = [
  {
    step: "01",
    title: "Understand",
    subtitle: "The Problem",
    icon: (
      <svg className="w-4 h-4 text-[#00D2FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Architecture",
    icon: (
      <svg className="w-4 h-4 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Build",
    subtitle: "& Implement",
    icon: (
      <svg className="w-4 h-4 text-[#3B82F6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Test",
    subtitle: "& Validate",
    icon: (
      <svg className="w-4 h-4 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Deploy",
    subtitle: "& Scale",
    icon: (
      <svg className="w-4 h-4 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Improve",
    subtitle: "& Evolve",
    icon: (
      <svg className="w-4 h-4 text-[#EC4899]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 4v6h-6" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

/**
 * 04 — Engineer Section: HOW I THINK AS AN ENGINEER
 * Strictly Faithful to Reference Design.
 * Features:
 * - Left: "HOW I THINK / AS AN ENGINEER" (gradient) + paragraph + "View My Approach ➔"
 * - Right: 6-stage continuous horizontal process node pipeline with connecting line
 */
export function Engineer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="engineer"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#06080F] border-t border-[#1E293B]/60"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Statement, CTA */}
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                HOW I THINK <br />
                <span className="text-gradient-cyan-violet">AS AN ENGINEER</span>
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm leading-relaxed text-[#94A3B8] mb-8 max-w-sm">
                Engineering is a structured way of turning real-world problems into scalable solutions. I focus on clarity, simplicity and long-term impact.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <Link
                href="/experience#system-architecture"
                data-cursor="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0E1322] px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-[#00D2FF]/50 hover:bg-[#151C30]"
              >
                <span>View My Approach</span>
                <span className="text-sm font-bold">➔</span>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: 6-Stage Process Pipeline */}
          <div className="lg:col-span-8 relative">
            {/* Subtle connecting line across nodes on desktop */}
            <div className="hidden sm:block absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-[#00D2FF]/40 via-[#8B5CF6]/40 to-[#EC4899]/40 z-0" />

            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-2 relative z-10"
            >
              {processStages.map((stage) => (
                <motion.div
                  key={stage.step}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                  className="group flex flex-col items-center text-center p-2.5 rounded-xl transition-all duration-300 hover:bg-[#0E1322]/60"
                >
                  {/* Node Circle */}
                  <div className="relative mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#1E293B] bg-[#0A0E1A] shadow-lg transition-all duration-300 group-hover:border-[#00D2FF]/60 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.25)]">
                    {stage.icon}
                  </div>

                  {/* Step number */}
                  <span className="font-mono text-[0.6rem] text-[#64748B] mb-1 font-semibold">
                    {stage.step}
                  </span>

                  {/* Title & Subtitle */}
                  <div className="font-heading font-bold text-xs text-white leading-tight">
                    {stage.title}
                  </div>
                  <div className="text-[0.68rem] text-[#94A3B8] leading-tight mt-0.5">
                    {stage.subtitle}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
