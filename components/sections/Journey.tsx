"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const journeyMilestones = [
  {
    role: "Student",
    subtitle: "Learning Foundations",
    dotColor: "bg-[#00D2FF]",
    glowColor: "shadow-[0_0_12px_rgba(0,210,255,0.7)]",
    lineColor: "from-[#00D2FF] to-[#3B82F6]",
  },
  {
    role: "Developer",
    subtitle: "Building Real Solutions",
    dotColor: "bg-[#3B82F6]",
    glowColor: "shadow-[0_0_12px_rgba(59,130,246,0.7)]",
    lineColor: "from-[#3B82F6] to-[#8B5CF6]",
  },
  {
    role: "Trainer",
    subtitle: "Teaching Developers",
    dotColor: "bg-[#8B5CF6]",
    glowColor: "shadow-[0_0_12px_rgba(139,92,246,0.7)]",
    lineColor: "from-[#8B5CF6] to-[#F97316]",
  },
  {
    role: "Lecturer",
    subtitle: "Shaping Future Talent",
    dotColor: "bg-[#F97316]",
    glowColor: "shadow-[0_0_12px_rgba(249,115,22,0.7)]",
    lineColor: "from-[#F97316] to-[#FBBF24]",
  },
  {
    role: "Founder",
    subtitle: "Creating Opportunities",
    dotColor: "bg-[#FBBF24]",
    glowColor: "shadow-[0_0_12px_rgba(251,191,36,0.7)]",
    lineColor: "",
  },
];

/**
 * 06 — The Journey Section: Student to Founder.
 * Strictly Faithful to Reference Design.
 * Features:
 * - Left: THE JOURNEY / Student to Founder / Statement + "View My Story ➔"
 * - Right: Horizontal connected track with 5 colored milestone nodes (Student, Developer, Trainer, Lecturer, Founder)
 * - Atmospheric subtle mountain silhouette backdrop
 */
export function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="journey"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#06080F] border-t border-[#1E293B]/60"
    >
      {/* Mountain silhouette atmospheric background graphic */}
      <div className="pointer-events-none absolute right-0 bottom-0 top-0 w-1/2 opacity-20 bg-gradient-to-l from-[#1E293B]/30 to-transparent flex items-end justify-end overflow-hidden">
        <svg
          className="w-full h-48 sm:h-64 text-[#334155]"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,150 L120,40 L220,110 L340,20 L440,90 L500,60 L500,150 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Statement, CTA */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block mb-2">
                The Journey
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                Student to Founder
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm leading-relaxed text-[#94A3B8] mb-8 max-w-sm">
                A journey of continuous learning, building, teaching and creating opportunities.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <Link
                href="/about"
                data-cursor="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0E1322] px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-[#00D2FF]/50 hover:bg-[#151C30]"
              >
                <span>View My Story</span>
                <span className="text-sm font-bold">➔</span>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: 5 Connected Milestone Nodes */}
          <div className="lg:col-span-8 relative">
            {/* Desktop continuous connection line */}
            <div className="hidden md:block absolute top-3.5 left-8 right-8 h-[2px] bg-gradient-to-r from-[#00D2FF] via-[#8B5CF6] to-[#FBBF24] opacity-50 z-0" />

            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 relative z-10"
            >
              {journeyMilestones.map((milestone) => (
                <motion.div
                  key={milestone.role}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                  className="flex flex-col items-center md:items-start text-center md:text-left group"
                >
                  {/* Glowing Node Dot */}
                  <div className="mb-4 flex items-center justify-center">
                    <div className={`h-7 w-7 rounded-full flex items-center justify-center border-2 border-[#0A0E1A] bg-[#0E1322] ${milestone.glowColor}`}>
                      <span className={`h-2.5 w-2.5 rounded-full ${milestone.dotColor}`} />
                    </div>
                  </div>

                  {/* Role Title */}
                  <div className="font-heading font-bold text-sm text-white mb-1 group-hover:text-[#00D2FF] transition-colors">
                    {milestone.role}
                  </div>

                  {/* Subtitle */}
                  <div className="text-xs text-[#94A3B8] leading-tight">
                    {milestone.subtitle}
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
