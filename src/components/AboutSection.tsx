"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase, CheckCircle2, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal Heading & Bio
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 35, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Stagger Reveal Stat Cards
      if (statsContainerRef.current) {
        gsap.fromTo(
          statsContainerRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: statsContainerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Smooth Count-Up Animation
      const countTargets = [
        { ref: num1Ref, end: 4 },
        { ref: num2Ref, end: 50 },
        { ref: num3Ref, end: 25 },
      ];

      countTargets.forEach((target) => {
        if (!target.ref.current) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target.end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            if (target.ref.current) {
              target.ref.current.textContent = Math.floor(obj.val).toString();
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Container in Glass */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] glass-panel relative overflow-hidden">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/25 blur-3xl rounded-full -z-10 animate-pulse-glow" />

          {/* Section Header */}
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
              ABOUT ME
            </span>
          </div>

          {/* Main Content Grid: Title & Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12">
            <div className="lg:col-span-6">
              <h2
                ref={headingRef}
                className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight"
              >
                Architecting with Empathy, <br />
                Building with Purpose
              </h2>
            </div>
            
            <div ref={bioRef} className="lg:col-span-6 flex flex-col items-start gap-6">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                I&apos;m a full-stack software engineer and Founder/CEO of <strong className="text-gray-900 font-semibold">Tech4Edges</strong> with 4+ years of experience turning complex business challenges into scalable, intuitive, and engaging web platforms. I believe in user-centered architecture, resilient code, clean aesthetics, and thoughtful engineering details.
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill text-gray-900 font-semibold text-xs hover:bg-white hover:scale-105 transition-all shadow-sm group"
              >
                <span>More About Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 3 Stat Cards Row with TiltCard & Live Numbers */}
          <div ref={statsContainerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200/50">
            {/* Stat 1 */}
            <TiltCard maxTilt={8} className="p-6 rounded-2xl glass-card-subtle flex flex-col items-start gap-2 group">
              <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100/80 mb-1 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-950 tracking-tight flex items-baseline">
                <span ref={num1Ref}>0</span>
                <span className="text-purple-600 ml-0.5">+</span>
              </div>
              <div className="text-xs font-medium text-gray-500">
                Years Experience
              </div>
            </TiltCard>

            {/* Stat 2 */}
            <TiltCard maxTilt={8} className="p-6 rounded-2xl glass-card-subtle flex flex-col items-start gap-2 group">
              <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100/80 mb-1 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-950 tracking-tight flex items-baseline">
                <span ref={num2Ref}>0</span>
                <span className="text-indigo-600 ml-0.5">+</span>
              </div>
              <div className="text-xs font-medium text-gray-500">
                Projects Completed
              </div>
            </TiltCard>

            {/* Stat 3 */}
            <TiltCard maxTilt={8} className="p-6 rounded-2xl glass-card-subtle flex flex-col items-start gap-2 group">
              <div className="p-2.5 rounded-xl bg-violet-50 border border-violet-100/80 mb-1 group-hover:scale-110 transition-transform">
                <Users className="w-4 h-4 text-violet-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-950 tracking-tight flex items-baseline">
                <span ref={num3Ref}>0</span>
                <span className="text-violet-600 ml-0.5">+</span>
              </div>
              <div className="text-xs font-medium text-gray-500">
                Happy Clients
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
