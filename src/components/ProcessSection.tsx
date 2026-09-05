"use client";

import React, { useRef, useEffect } from "react";
import { Compass, FileSearch, Lightbulb, Code, RefreshCw } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    desc: "Clarify user needs, architectural requirements, and business goals.",
    icon: <Compass className="w-4 h-4 text-purple-600" />,
  },
  {
    step: "02",
    title: "Define",
    desc: "Map data flows, define API schemas, and create blueprints.",
    icon: <FileSearch className="w-4 h-4 text-indigo-600" />,
  },
  {
    step: "03",
    title: "Ideate",
    desc: "Brainstorm UX wireframes, system models, and interactive concepts.",
    icon: <Lightbulb className="w-4 h-4 text-amber-600" />,
  },
  {
    step: "04",
    title: "Design & Build",
    desc: "Ship production-grade code, responsive UI, and robust backends.",
    icon: <Code className="w-4 h-4 text-violet-600" />,
  },
  {
    step: "05",
    title: "Test & Iterate",
    desc: "Rigorous automated testing, client verification, and cloud scaling.",
    icon: <RefreshCw className="w-4 h-4 text-emerald-600" />,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Connective Progress Line Animation across steps
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top 75%",
              end: "bottom 70%",
              scrub: 0.8,
            },
          }
        );
      }

      if (stepsContainerRef.current) {
        gsap.fromTo(
          stepsContainerRef.current.children,
          { opacity: 0, y: 45, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.14,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
            MY PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Engineering Process I Follow
          </h2>
        </div>

        {/* Dynamic Connected Glowing Track (Desktop) */}
        <div className="hidden lg:block relative w-full h-1 bg-gray-200/50 mb-6 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400 origin-left scale-x-0 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
          />
        </div>

        {/* 5 Steps Grid with Connectors & TiltCard */}
        <div ref={stepsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 relative">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative flex flex-col">
              <TiltCard
                maxTilt={10}
                scale={1.03}
                data-cursor={`0${idx + 1}`}
                className="h-full p-5 rounded-2xl glass-panel flex flex-col gap-3 group cursor-pointer hover:shadow-xl transition-shadow"
              >
                {/* Top Row: Icon and Step Number */}
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-purple-50 border border-purple-100/80 shadow-xs group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold text-gray-400 group-hover:text-purple-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 tracking-tight mt-1 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </TiltCard>

              {/* Dotted Arrow Connector (Desktop only, between steps) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-gray-300 pointer-events-none">
                  <span className="text-xs font-bold text-purple-400">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
