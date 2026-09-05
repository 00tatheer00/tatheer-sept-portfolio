"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * Hero Section — 1000% Matched to Reference Design Image.
 * Features:
 * - HELLO, I'M eyebrow
 * - Giant Aarav Singh / S Tatheer Hussain heading
 * - Digital Product Designer / Full-Stack Software Engineer in vivid periwinkle gradient
 * - Narrative description
 * - View My Work ↗ (black pill) & Download CV ⤓ (frosted glass pill)
 * - "Trusted by" Google, Microsoft, airbnb, HubSpot, dribbble
 * - Right: Organic curved glass frame with Tatheer portrait
 * - Floating glass star on left border
 * - Floating card: 5+ Years of Experience (top right)
 * - Floating card: Design Impact +120% with purple sparkline (bottom right)
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      <Container className="relative z-10 w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag: HELLO, I'M */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
                HELLO, I&apos;M
              </span>
            </motion.div>

            {/* Display Name */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-2 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.05]"
            >
              S Tatheer Hussain
            </motion.h1>

            {/* Gradient Subtitle */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-hero">
                Digital Product Designer &amp; Engineer
              </span>
            </motion.div>

            {/* Narrative Description */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-xl text-sm sm:text-base leading-relaxed text-[#64748B]"
            >
              I craft meaningful digital experiences that are intuitive, beautiful, and built with purpose — turning complex engineering architectures into seamless, high-impact products.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-14 flex flex-wrap items-center gap-4"
            >
              {/* Black Pill Button: View My Work ↗ */}
              <Link
                href="/#work"
                className="btn-primary-pill inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold shadow-[0_6px_20px_rgba(15,23,42,0.18)]"
              >
                <span>View My Work</span>
                <span className="text-xs font-bold">↗</span>
              </Link>

              {/* Frosted Glass Button: Download CV ⤓ */}
              <a
                href="#contact"
                className="btn-glass-pill inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4 text-[#6366F1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </motion.div>

            {/* "Trusted by" Logo Strip */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="pt-2"
            >
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                Trusted by
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Google */}
                <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-[#475569]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                  <span>Google</span>
                </div>

                {/* Microsoft */}
                <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-[#475569]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.4 0H0v11.4h11.4V0zm12.6 0H12.6v11.4H24V0zM11.4 12.6H0V24h11.4V12.6zm12.6 0H12.6V24H24V12.6z" />
                  </svg>
                  <span>Microsoft</span>
                </div>

                {/* Airbnb */}
                <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-[#475569]">
                  <span className="text-base">airbnb</span>
                </div>

                {/* HubSpot */}
                <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-[#475569]">
                  <span>HubSp<span className="text-[#6366F1]">o</span>t</span>
                </div>

                {/* Dribbble */}
                <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-[#475569]">
                  <span className="font-serif italic text-base">dribbble</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Organic Curved Glass Frame with Portrait (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Organic Curved Outer Glass Frame */}
              <div className="relative rounded-[3.2rem] p-3 sm:p-3.5 bg-white/50 backdrop-blur-2xl border border-white/95 shadow-[0_24px_70px_rgba(99,102,241,0.14),0_6px_20px_rgba(15,23,42,0.03)]">
                {/* Inside Image Container with Smooth Curved Corners */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.8rem] bg-gradient-to-b from-indigo-50/50 to-slate-100">
                  <Image
                    src="/tatheer-portrait-hd.png"
                    alt="S Tatheer Hussain"
                    fill
                    priority
                    sizes="(max-width: 640px) 380px, 420px"
                    className="object-cover object-top"
                  />
                  {/* Subtle inner glass specular highlight */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                </div>
              </div>

              {/* Floating Element 1: 4-Point Glass Star Sparkle on Left Rim */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-[0_4px_16px_rgba(99,102,241,0.2)]"
              >
                <svg className="w-5 h-5 text-[#8B5CF6]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </motion.div>

              {/* Floating Card 1: 5+ Years of Experience (Top Right) */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-3 sm:-right-6 z-20 flex flex-col items-center justify-center rounded-2xl bg-white/90 backdrop-blur-xl border border-white px-4 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
                  5+
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-[#64748B] text-center leading-tight">
                  Years of<br />Experience
                </span>
              </motion.div>

              {/* Floating Card 2: Design Impact +120% with Sparkline (Bottom Right) */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-3 sm:-right-8 z-20 rounded-2xl bg-white/90 backdrop-blur-xl border border-white p-3.5 sm:p-4 shadow-[0_14px_32px_rgba(99,102,241,0.12)] min-w-[150px] sm:min-w-[170px]"
              >
                <span className="block text-[10px] font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                  Design Impact
                </span>
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    +120%
                  </span>
                </div>

                {/* Violet Sparkline Graph */}
                <svg className="w-full h-8 overflow-visible" viewBox="0 0 120 30" fill="none">
                  <defs>
                    <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 24 Q 25 22, 45 15 T 85 10 T 120 4 L 120 30 L 0 30 Z"
                    fill="url(#sparklineGrad)"
                  />
                  <path
                    d="M 0 24 Q 25 22, 45 15 T 85 10 T 120 4"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="120" cy="4" r="3.5" fill="#8B5CF6" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
