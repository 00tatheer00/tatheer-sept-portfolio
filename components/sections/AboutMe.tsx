"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * About Me Section — 1000% Matched to Reference Design Image.
 * Features:
 * - ABOUT ME badge
 * - Left: "Designing with Empathy / Building with Purpose" + Frosted 3-stat capsule
 * - Right: Narrative paragraph + "More About Me ↗" frosted pill button
 */
export function AboutMe() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Tag */}
        <div className="mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
            ABOUT ME
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Heading + Stats Capsule (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-8">
              Designing with Empathy<br />
              Building with Purpose
            </h2>

            {/* Frosted Glass Stats Capsule */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-5 sm:p-6 grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-slate-200/80 text-center"
            >
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center px-2">
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-[#6366F1]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">5+</span>
                <span className="text-[11px] sm:text-xs font-medium text-[#64748B]">Years Experience</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center px-2">
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-[#6366F1]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">30+</span>
                <span className="text-[11px] sm:text-xs font-medium text-[#64748B]">Projects Completed</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center px-2">
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-[#6366F1]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">500+</span>
                <span className="text-[11px] sm:text-xs font-medium text-[#64748B]">Engineers Mentored</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative + Action Button (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <p className="text-sm sm:text-base leading-relaxed text-[#64748B] mb-8">
              I am S Tatheer Hussain, a software engineer, technical educator, and founder based in Peshawar, Pakistan. Progression from student to developer, trainer, university lecturer, and founder of Tech4Edges &amp; EEST, I turn complex engineering problems into scalable, production-ready software while mentoring the next generation of developers.
            </p>

            <div>
              <Link
                href="/about"
                className="btn-glass-pill inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] shadow-sm"
              >
                <span>More About Me</span>
                <span className="text-xs font-bold text-[#6366F1]">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
