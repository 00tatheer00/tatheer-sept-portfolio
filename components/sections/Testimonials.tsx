"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { testimonials } from "@/data/testimonials";

/**
 * 09 — Testimonials Section: KIND WORDS / What People Say.
 * Strictly Faithful to Reference Design.
 * Features:
 * - Left: Eyebrow in gold/orange "KIND WORDS" + "What People Say"
 * - Right: Single focused quote card with circular arrow buttons and pagination dots
 */
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#06080F] border-t border-[#1E293B]/60"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#F97316] font-semibold block mb-2">
                Kind Words
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                What People Say
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Carousel Card with Navigation Arrows */}
          <div className="lg:col-span-8 relative">
            <div className="flex items-center gap-4">
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex-shrink-0 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322] text-[#94A3B8] transition-all hover:border-[#00D2FF]/50 hover:bg-[#151C30] hover:text-white"
              >
                <span className="text-sm">←</span>
              </button>

              {/* Active Testimonial Card */}
              <div className="flex-1 rounded-2xl border border-[#1E293B] bg-[#0D1220] p-6 sm:p-10 min-h-[220px] flex flex-col justify-between shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Quotation text */}
                    <blockquote className="text-sm sm:text-base leading-relaxed text-[#CBD5E1] mb-6 italic">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>

                    {/* Author Metadata */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E293B] text-[#00D2FF]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-heading font-bold text-sm text-white">
                          {item.author}
                        </div>
                        <div className="text-xs text-[#64748B]">
                          {item.role}, {item.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex-shrink-0 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322] text-[#94A3B8] transition-all hover:border-[#00D2FF]/50 hover:bg-[#151C30] hover:text-white"
              >
                <span className="text-sm">→</span>
              </button>
            </div>

            {/* Pagination Dots Below */}
            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-6 bg-[#00D2FF]" : "w-1.5 bg-[#334155]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
