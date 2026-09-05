"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const technicalDomains = [
  {
    category: "Frontend",
    iconBg: "bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/30",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    iconBg: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: ["Node.js", "Express", "PHP", "Laravel", "NestJS"],
  },
  {
    category: "Database",
    iconBg: "bg-[#A855F7]/10 text-[#A855F7] border-[#A855F7]/30",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    category: "Cloud & DevOps",
    iconBg: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    skills: ["AWS", "Azure", "Docker", "Linux", "CI/CD"],
  },
  {
    category: "Testing",
    iconBg: "bg-[#EC4899]/10 text-[#EC4899] border-[#EC4899]/30",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    skills: ["Jest", "Playwright"],
  },
  {
    category: "AI & Automation",
    iconBg: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/30",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    skills: ["AI Integration", "Automation", "AI-assisted Development"],
  },
];

/**
 * 07 — Technical Expertise Section.
 * Strictly Faithful to Reference Design.
 * Features:
 * - TECHNICAL EXPERTISE / Turned Into Real Solutions + "View Full Skills ➔"
 * - 6 structured cards (Frontend, Backend, Database, Cloud & DevOps, Testing, AI & Automation)
 */
export function WhatIBuild() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#06080F] border-t border-[#1E293B]/60"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
                TECHNICAL EXPERTISE
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Turned <span className="text-gradient-cyan-violet">Into Real Solutions</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:max-w-md flex flex-col items-start lg:items-end gap-4">
            <Reveal delay={0.2}>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed lg:text-right">
                A modern, evolving stack focused on building scalable, maintainable and high-performance applications.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/experience#system-architecture"
                data-cursor="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0E1322] px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-[#00D2FF]/50 hover:bg-[#151C30]"
              >
                <span>View Full Skills</span>
                <span className="text-sm font-bold">➔</span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {technicalDomains.map((domain) => (
            <motion.div
              key={domain.category}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="rounded-2xl border border-[#1E293B] bg-[#0D1220] p-5 transition-all duration-300 hover:border-[#334155] hover:bg-[#12182B] flex flex-col justify-between group"
            >
              <div>
                {/* Icon Circle */}
                <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl border ${domain.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  {domain.icon}
                </div>

                {/* Category Title */}
                <h3 className="font-heading font-bold text-sm text-white mb-4 group-hover:text-[#00D2FF] transition-colors">
                  {domain.category}
                </h3>

                {/* Skills List */}
                <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                  {domain.skills.map((skill) => (
                    <li key={skill} className="leading-snug">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
