"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    step: "01",
    title: "Discover",
    description: "Understanding user needs, technical constraints and project goals.",
    icon: (
      <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Define",
    description: "Research, analyze requirements and define the core problem architecture.",
    icon: (
      <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Ideate",
    description: "Brainstorm solutions, structure user flows, wireframes & system models.",
    icon: (
      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Design & Build",
    description: "Crafting clean, intuitive interfaces and robust full-stack software code.",
    icon: (
      <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Test & Iterate",
    description: "Rigorous QA testing, user feedback loops, and continuous deployment.",
    icon: (
      <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

/**
 * Design Process I Follow — 1000% Matched to Reference Design Image.
 * Features:
 * - MY PROCESS badge
 * - "Design Process I Follow" heading
 * - 5 Frosted glass cards with icon boxes, step numbers, titles, descriptions, and connecting arrows
 */
export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Tag */}
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
            MY PROCESS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-12">
          Design Process I Follow
        </h2>

        {/* 5 Process Cards Row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group relative flex flex-col justify-between rounded-2xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
            >
              <div>
                {/* Header: Icon + Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50/80 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#94A3B8] tracking-wider">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>

              {/* Connecting Arrow for desktop (between items) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-[#CBD5E1] pointer-events-none"
                  aria-hidden="true"
                >
                  <span className="text-sm font-bold">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
