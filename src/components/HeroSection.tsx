"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Sparkles, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleLettersRef = useRef<HTMLSpanElement[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const expBadgeRef = useRef<HTMLDivElement>(null);
  const impactBadgeRef = useRef<HTMLDivElement>(null);
  const sparklinePathRef = useRef<SVGPathElement>(null);

  const name = "S Tatheer Hussain";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate SVG sparkline path
      if (sparklinePathRef.current) {
        const length = sparklinePathRef.current.getTotalLength();
        gsap.set(sparklinePathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      }

      // Master Entrance Sequence with Character Stagger
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          titleLettersRef.current,
          { opacity: 0, y: 40, rotateX: 60, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.025,
            ease: "back.out(1.6)",
          },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .fromTo(
          partnersRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          portraitWrapperRef.current,
          { opacity: 0, x: 45, scale: 0.92, rotateY: -12 },
          { opacity: 1, x: 0, scale: 1, rotateY: 0, duration: 1.3, ease: "expo.out" },
          "-=1.2"
        )
        .fromTo(
          expBadgeRef.current,
          { opacity: 0, scale: 0.5, y: -30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "elastic.out(1, 0.6)" },
          "-=0.6"
        )
        .fromTo(
          impactBadgeRef.current,
          { opacity: 0, scale: 0.5, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "elastic.out(1, 0.6)" },
          "-=0.7"
        );

      // Draw sparkline once badge enters
      if (sparklinePathRef.current) {
        tl.to(
          sparklinePathRef.current,
          { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" },
          "-=0.5"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative pt-32 sm:pt-36 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Greeting Tag */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200/70 mb-4 backdrop-blur-md shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span className="text-[11px] font-bold tracking-widest text-purple-700 uppercase">
                HELLO, I&apos;M
              </span>
            </div>

            {/* Main Name with Staggered 3D Character Wave */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.08] mb-2 flex flex-wrap perspective-1000">
              {name.split("").map((char, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) titleLettersRef.current[index] = el;
                  }}
                  className="inline-block transform-gpu"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </span>
              ))}
            </h1>

            {/* Gradient Subtitle */}
            <div
              ref={subtitleRef}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-purple-text mb-6 tracking-tight"
            >
              Full Stack &amp; SaaS Engineer
            </div>

            {/* Bio Paragraph */}
            <p
              ref={descRef}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal"
            >
              I architect scalable SaaS platforms, high-performance web applications, and intuitive digital solutions built with purpose, precision, and modern engineering excellence.
            </p>

            {/* CTA Buttons with Magnetic Physics */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-14">
              <MagneticButton strength={0.4}>
                <Link
                  href="#work"
                  data-cursor="WORK"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-950 text-white font-semibold text-sm shadow-xl shadow-gray-950/15 hover:bg-gray-800 transition-all group cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.35}>
                <a
                  href="#contact"
                  data-cursor="CV"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card-subtle text-gray-800 font-semibold text-sm hover:bg-white/95 transition-all group cursor-pointer"
                >
                  <Download className="w-4 h-4 text-gray-500 group-hover:text-purple-600 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download CV</span>
                </a>
              </MagneticButton>
            </div>

            {/* Trusted By / Organizations */}
            <div ref={partnersRef} className="w-full pt-4 border-t border-gray-200/60">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Trusted by &amp; Partnered with
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-bold text-gray-800 tracking-tight flex items-center gap-1.5 hover:text-purple-600 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
                  Tech4Edges
                </span>
                <span className="text-sm font-semibold text-gray-600 tracking-tight hover:text-gray-900 transition-colors">
                  Saylani Mass IT
                </span>
                <span className="text-sm font-semibold text-gray-600 tracking-tight hover:text-gray-900 transition-colors">
                  Arfa Karim Tech
                </span>
                <span className="text-sm font-semibold text-gray-600 tracking-tight hover:text-gray-900 transition-colors">
                  NAVTTC
                </span>
                <span className="text-sm font-semibold text-gray-600 tracking-tight hover:text-gray-900 transition-colors">
                  EncoderBytes
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait & Floating Widgets */}
          <div ref={portraitWrapperRef} className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background Halo Glow */}
            <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-purple-300/35 via-violet-200/30 to-indigo-100/25 blur-3xl rounded-full -z-10 animate-pulse-glow" />

            {/* TiltCard Wrapper */}
            <TiltCard
              maxTilt={10}
              scale={1.02}
              className="relative w-[310px] sm:w-[350px] md:w-[380px] h-[410px] sm:h-[460px] md:h-[500px] p-2.5 rounded-[42px] glass-panel shadow-2xl group cursor-pointer"
            >
              {/* Inner Image Container */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-slate-900/20">
                <Image
                  src="/assets/tatheer-profile.png"
                  alt="S Tatheer Hussain Portrait"
                  fill
                  priority
                  className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Subtle Inner Lighting Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Floating 3D Refractive Glass Sphere Ornament */}
              <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full glass-panel flex items-center justify-center p-1.5 shadow-xl animate-float-gentle z-20">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/assets/glass_sphere_bubble.jpg"
                    alt="Glass Accent"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge Top-Right: Years of Experience */}
              <div
                ref={expBadgeRef}
                className="absolute -top-4 -right-4 sm:-right-6 p-4 rounded-2xl glass-panel shadow-xl flex flex-col items-start z-20 animate-float-slow"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-none">
                  4<span className="text-purple-600">+</span>
                </div>
                <div className="text-[11px] font-medium text-gray-500 mt-1 leading-tight">
                  Years of<br />Experience
                </div>
              </div>

              {/* Floating Badge Bottom-Right: Design & System Impact */}
              <div
                ref={impactBadgeRef}
                className="absolute -bottom-6 -right-4 sm:-right-8 p-4 rounded-2xl glass-panel shadow-xl flex flex-col gap-1.5 min-w-[170px] z-20 animate-float-slow"
                style={{ animationDelay: "-3s" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                    System Impact
                  </span>
                  <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black gradient-purple-text">
                  +120%
                </div>
                {/* SVG Sparkline Curve with GSAP Draw Animation */}
                <svg className="w-full h-6 stroke-purple-500 fill-none" viewBox="0 0 100 24">
                  <path
                    ref={sparklinePathRef}
                    d="M0 20 Q 25 18, 40 10 T 70 14 T 100 2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="2" r="3" className="fill-purple-600 animate-ping" />
                </svg>
              </div>
            </TiltCard>

          </div>

        </div>
      </div>
    </section>
  );
}
