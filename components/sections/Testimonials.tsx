"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
}

const clientTestimonials: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Tatheer is an exceptional engineer and product designer. He understands user needs deeply and delivers outstanding, production-ready results on every project.",
    author: "Rohit Sharma",
    role: "Product Manager",
    company: "Google",
    avatarBg: "bg-blue-100 text-blue-700",
    initials: "RS",
  },
  {
    id: "2",
    quote:
      "Working with Tatheer was a smooth and inspiring experience. His attention to detail and ability to bridge complex code with clean aesthetics is truly impressive.",
    author: "Neha Verma",
    role: "Design Lead",
    company: "Microsoft",
    avatarBg: "bg-purple-100 text-purple-700",
    initials: "NV",
  },
  {
    id: "3",
    quote:
      "Tatheer's architectural decisions not only look amazing but also solve real scalable system problems. Extremely dependable and highly recommended!",
    author: "Karan Malhotra",
    role: "Founder & CEO",
    company: "StartupX",
    avatarBg: "bg-indigo-100 text-indigo-700",
    initials: "KM",
  },
];

/**
 * Testimonials Section — 1000% Matched to Reference Design Image.
 * Features:
 * - TESTIMONIALS badge
 * - "What Clients Say" heading
 * - Top-right circular frosted glass arrow controls (< and >)
 * - 3 Frosted glass cards side-by-side with quotes, avatars, author names and companies
 */
export function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % clientTestimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  const visibleTestimonials = [
    clientTestimonials[startIndex % clientTestimonials.length],
    clientTestimonials[(startIndex + 1) % clientTestimonials.length],
    clientTestimonials[(startIndex + 2) % clientTestimonials.length],
  ];

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Row with Navigation Controls */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
              What Clients Say
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 hover:bg-white border border-white text-[#0F172A] shadow-sm transition-all duration-200 hover:scale-105"
            >
              <span className="text-xs font-bold">‹</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 hover:bg-white border border-white text-[#0F172A] shadow-sm transition-all duration-200 hover:scale-105"
            >
              <span className="text-xs font-bold">›</span>
            </button>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {visibleTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 shadow-[0_6px_24px_rgba(15,23,42,0.04)] relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-2xl font-serif text-indigo-300 pointer-events-none select-none">
                “
              </div>

              {/* Quote Body */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#475569] mb-6 relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-xs ${item.avatarBg} shadow-xs`}
                >
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight">
                    {item.author}
                  </h3>
                  <p className="text-[11px] text-[#64748B]">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
