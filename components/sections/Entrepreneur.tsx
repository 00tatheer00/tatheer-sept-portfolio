"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

/**
 * 08 — Organizations Section: BUILDING BEYOND CODE.
 * Strictly Faithful to Reference Design.
 * Features:
 * - Left: BUILDING BEYOND CODE / Organizations Creating Impact / Statement
 * - Middle: 2 Organization cards (Tech4Edges, EEST) with custom logos and "Learn More ➔"
 * - Right: Elegant cursive typography "Better Developers Brighter Tomorrows"
 */
export function Entrepreneur() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="organizations"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#06080F] border-t border-[#1E293B]/60"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 items-center">
          {/* Left Column: Heading & Description (3.5 cols) */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block mb-2">
                Building Beyond Code
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Organizations <br />
                Creating Impact
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
                Technology, education and opportunities for a better tomorrow.
              </p>
            </Reveal>
          </div>

          {/* Middle Column: Two Cards (5.5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {/* Tech4Edges Card */}
              <motion.div
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="group rounded-2xl border border-[#1E293B] bg-[#0D1220] p-6 transition-all duration-300 hover:border-[#334155] hover:bg-[#12182B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {/* T4 stylized logo */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D2FF] via-[#3B82F6] to-[#8B5CF6] text-white font-heading font-black text-sm shadow-md">
                      T4
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-white">
                        Tech4Edges
                      </div>
                      <div className="text-[0.68rem] text-[#64748B]">
                        Software Development
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    Building digital solutions and technology initiatives.
                  </p>
                </div>

                <div>
                  <Link
                    href="/projects"
                    data-cursor="button"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#00D2FF] transition-colors group-hover:text-white"
                  >
                    <span>Learn More</span>
                    <span className="text-xs transition-transform group-hover:translate-x-1">➔</span>
                  </Link>
                </div>
              </motion.div>

              {/* EEST Card */}
              <motion.div
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="group rounded-2xl border border-[#1E293B] bg-[#0D1220] p-6 transition-all duration-300 hover:border-[#334155] hover:bg-[#12182B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {/* EEST book logo icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2942] border border-[#00D2FF]/40 text-[#00D2FF] shadow-md">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-white">
                        EEST
                      </div>
                      <div className="text-[0.62rem] text-[#64748B] truncate max-w-[120px]">
                        School of Tech
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    Empowering the next generation of developers.
                  </p>
                </div>

                <div>
                  <Link
                    href="/projects/eest-portal"
                    data-cursor="button"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#00D2FF] transition-colors group-hover:text-white"
                  >
                    <span>Learn More</span>
                    <span className="text-xs transition-transform group-hover:translate-x-1">➔</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Handwritten Script Quote (2.5 cols) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <Reveal delay={0.4}>
              <div className="font-script text-3xl sm:text-4xl text-[#CBD5E1]/85 leading-snug transform rotate-[-2deg] select-none text-center lg:text-right">
                Better <br />
                Developers <br />
                Brighter <br />
                Tomorrows
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
