"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Tatheer delivered our custom ERP for operations in Lahore with excellent quality and clear communication. The project was on time, scalable, and exactly what our team needed.",
    name: "Ahmed Raza",
    role: "Operations Manager, Lahore Logistics",
    avatarColor: "bg-blue-600",
    initials: "AR",
  },
  {
    quote:
      "Our Arizona-based SaaS team needed velocity without sacrificing quality. Tatheer shipped features on schedule, collaborated smoothly across time zones, and built an exceptional product.",
    name: "Michael Torres",
    role: "CTO, Phoenix SaaS Enterprise",
    avatarColor: "bg-purple-600",
    initials: "MT",
  },
  {
    quote:
      "We hired Tatheer for our startup dashboard and API revamp in Islamabad. Performance improved significantly, the UI became crystal clean, and support was outstanding.",
    name: "Fatima Khan",
    role: "Founder, Islamabad Tech Ventures",
    avatarColor: "bg-emerald-600",
    initials: "FK",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const triggerFlip = (direction: "left" | "right") => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.children,
      {
        opacity: 0.5,
        x: direction === "left" ? -25 : 25,
        scale: 0.98,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      }
    );
  };

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header Row with Prev/Next Controls */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              What Clients Say
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => triggerFlip("left")}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-gray-700 hover:bg-white hover:text-purple-600 active:scale-95 transition-all shadow-sm cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => triggerFlip("right")}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-gray-700 hover:bg-white hover:text-purple-600 active:scale-95 transition-all shadow-sm cursor-pointer"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid with TiltCard */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <TiltCard
              key={idx}
              maxTilt={7}
              scale={1.02}
              className="p-7 rounded-3xl glass-panel flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Quote Icon */}
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-5 group-hover:scale-110 transition-transform">
                  <Quote className="w-4 h-4 fill-purple-600" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100/70 mt-auto">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarColor} text-white font-bold text-xs flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                >
                  {item.initials}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-gray-950 leading-tight group-hover:text-purple-600 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
