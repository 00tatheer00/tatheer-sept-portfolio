"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#00D2FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    iconBg: "bg-[#00D2FF]/10 border-[#00D2FF]/30",
    title: "SOFTWARE",
    subtitle: "That Works",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    iconBg: "bg-[#8B5CF6]/10 border-[#8B5CF6]/30",
    title: "PEOPLE",
    subtitle: "That Grow",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    iconBg: "bg-[#F97316]/10 border-[#F97316]/30",
    title: "OPPORTUNITIES",
    subtitle: "That Last",
  },
];

/**
 * 03 — Identity Section: I BUILD. I TEACH. I LEAD.
 * Strictly Faithful to Reference Design.
 * Features:
 * - Left: Giant typography with colored dots (Cyan, Violet, Orange)
 * - Right: 3-line manifesto paragraph + 3 compact cards (SOFTWARE, PEOPLE, OPPORTUNITIES)
 */
export function Identity() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="identity"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#06080F]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left: Giant Triad Typography */}
          <div className="lg:col-span-6 space-y-1">
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(3.2rem,8vw,5.8rem)] font-extrabold leading-[0.96] tracking-[-0.035em] text-white">
                I BUILD<span className="text-[#00D2FF]">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <h2 className="text-[clamp(3.2rem,8vw,5.8rem)] font-extrabold leading-[0.96] tracking-[-0.035em] text-white">
                I TEACH<span className="text-[#8B5CF6]">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <h2 className="text-[clamp(3.2rem,8vw,5.8rem)] font-extrabold leading-[0.96] tracking-[-0.035em] text-white">
                I LEAD<span className="text-[#F97316]">.</span>
              </h2>
            </Reveal>
          </div>

          {/* Right: Paragraph + Three Structured Cards */}
          <div className="lg:col-span-6">
            <Reveal delay={0.3}>
              <div className="space-y-1 text-sm sm:text-base leading-relaxed text-[#CBD5E1] mb-10">
                <p>I build software that solves real problems.</p>
                <p>I teach developers how to build real solutions.</p>
                <p>I lead initiatives that create opportunities through technology.</p>
              </div>
            </Reveal>

            {/* Three Cards in a Row */}
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5"
            >
              {pillars.map((item) => (
                <motion.div
                  key={item.title}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                  className="rounded-xl border border-[#1E293B] bg-[#0E1322] p-5 transition-all duration-300 hover:border-[#334155] hover:bg-[#151C30]"
                >
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full border ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div className="font-heading font-bold text-xs tracking-wider text-white uppercase mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#94A3B8]">
                    {item.subtitle}
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
