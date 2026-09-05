"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";

/**
 * Hero Section — Strictly Faithful to Reference Design.
 * Features:
 * - Eyebrow: BUILDING A BETTER TOMORROW THROUGH TECHNOLOGY
 * - S TATHEER / HUSSAIN (Cyan-to-Violet gradient on HUSSAIN)
 * - FULL-STACK SOFTWARE ENGINEER • SAAS DEVELOPER • TECHNICAL EDUCATOR
 * - Buttons: Explore My Work (gradient) & Let's Build Something
 * - Right: Portrait with glowing portal aura + script annotations + quote + signature
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#06080F]"
    >
      {/* Background Radial Atmosphere */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#00D2FF]/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 right-20 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/15 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-[#3B82F6]/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <Reveal delay={shouldReduceMotion ? 0 : 0.1}>
              <div className="mb-4">
                <span className="font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-[#00D2FF] font-medium">
                  Building A Better Tomorrow Through Technology
                </span>
              </div>
            </Reveal>

            {/* Giant Display Name */}
            <Reveal delay={shouldReduceMotion ? 0 : 0.2}>
              <h1 className="mb-4 text-[clamp(2.75rem,7.5vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.035em] text-white">
                S Tatheer <br />
                <span className="text-gradient-cyan-violet">Hussain</span>
              </h1>
            </Reveal>

            {/* Role Triad with Dots */}
            <Reveal delay={shouldReduceMotion ? 0 : 0.35}>
              <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#00D2FF]">
                <span>FULL-STACK SOFTWARE ENGINEER</span>
                <span className="text-white/40">•</span>
                <span>SAAS DEVELOPER</span>
                <span className="text-white/40">•</span>
                <span>TECHNICAL EDUCATOR</span>
              </div>
            </Reveal>

            {/* Narrative Paragraph */}
            <Reveal delay={shouldReduceMotion ? 0 : 0.5}>
              <p className="mb-8 max-w-xl text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                I architect, build and scale digital solutions — from SaaS products and business systems to learning platforms — while helping the next generation of developers turn knowledge into real-world opportunities.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={shouldReduceMotion ? 0 : 0.65}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                {/* Primary Pill Button: Explore My Work ➔ */}
                <Link
                  href="/projects"
                  data-cursor="button"
                  className="inline-flex items-center gap-2 rounded-full btn-gradient-primary px-7 py-3 text-sm font-semibold tracking-wide text-white"
                >
                  <span>Explore My Work</span>
                  <span className="text-base font-bold">➔</span>
                </Link>

                {/* Secondary Pill Button: Let's Build Something */}
                <Link
                  href="/contact"
                  data-cursor="button"
                  className="inline-flex items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322]/80 px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#334155] hover:bg-[#151C30]"
                >
                  Let&apos;s Build Something
                </Link>
              </div>
            </Reveal>

            {/* Scroll Indicator */}
            <Reveal delay={shouldReduceMotion ? 0 : 0.8}>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-4.5 items-start justify-center rounded-full border border-[#334155] p-1">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1.5 w-1 rounded-full bg-[#00D2FF]"
                  />
                </div>
                <span className="font-mono text-[0.68rem] tracking-wider text-[#64748B]">
                  Scroll to explore
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Portrait & Atmospheric Aura (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Floating Cursive Annotation (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -top-6 right-0 sm:right-4 z-20 pointer-events-none select-none"
            >
              <div className="font-script text-2xl sm:text-3xl text-white/90 leading-tight transform rotate-[-4deg] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                Engineer <br />
                Educator <br />
                Entrepreneur
              </div>
            </motion.div>

            {/* Glowing Portal Circles & Portrait Frame */}
            <div className="relative flex items-center justify-center">
              {/* Outer Neon Glow Ring */}
              <div
                className="absolute inset-0 -m-6 sm:-m-8 rounded-full border border-[#00D2FF]/40 shadow-glow-portal animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              {/* Secondary Violet Ring */}
              <div className="absolute inset-0 -m-3 sm:-m-4 rounded-full border border-[#8B5CF6]/50" />

              {/* Portrait Container */}
              <div className="relative z-10 w-[270px] h-[340px] sm:w-[320px] sm:h-[400px] overflow-hidden rounded-full border-2 border-[#00D2FF]/60 bg-[#0A0E1A] shadow-2xl">
                <Image
                  src="/tatheer-portrait-hd.png"
                  alt="S Tatheer Hussain — Full-Stack Software Engineer, Educator & Founder"
                  fill
                  priority
                  className="object-cover object-top scale-105"
                  sizes="(max-width: 640px) 270px, 320px"
                />
                {/* Subtle vignette fade at bottom of portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Bottom-Right Quote & Script Signature */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-6 text-right max-w-xs self-end pr-2"
            >
              <p className="text-xs italic text-[#CBD5E1] font-light leading-relaxed">
                &ldquo;Technology should create opportunities, not just users.&rdquo;
              </p>
              <div className="font-script text-xl sm:text-2xl text-gradient-cyan-violet mt-1 font-semibold">
                S Tatheer Hussain
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
