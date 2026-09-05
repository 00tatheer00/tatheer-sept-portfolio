"use client";

import React, { useRef, useEffect } from "react";
import { ArrowUpRight, Cloud, Code2, Cpu, LayoutGrid } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "SaaS Architecture",
    description: "Designing multi-tenant scalable cloud backends, robust billing systems, and enterprise application frameworks.",
    icon: <LayoutGrid className="w-5 h-5 text-amber-600" />,
    iconBg: "bg-amber-50 border-amber-200/60",
  },
  {
    id: "02",
    title: "Full Stack & Next.js",
    description: "Creating lightning-fast, reactive web applications utilizing React, Next.js, TypeScript, and modern state architectures.",
    icon: <Code2 className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50 border-purple-200/60",
  },
  {
    id: "03",
    title: "API & Cloud Systems",
    description: "Building resilient REST & GraphQL APIs, microservices, and high-throughput databases (Postgres, MongoDB, Redis).",
    icon: <Cloud className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-200/60",
  },
  {
    id: "04",
    title: "AI & Automation",
    description: "Integrating LLM workflows, intelligent automated agents, and smart business logic to accelerate operations.",
    icon: <Cpu className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-200/60",
  },
];

export default function ServicesSection() {
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
            stagger: 0.12,
            ease: "back.out(1.4)",
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

  return (
    <section ref={sectionRef} id="services" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
            WHAT I DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Services I Offer
          </h2>
        </div>

        {/* 4 Cards Grid with TiltCard */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <TiltCard
              key={service.id}
              maxTilt={9}
              scale={1.03}
              className="p-7 rounded-3xl glass-panel relative flex flex-col justify-between min-h-[270px] group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div>
                {/* Icon Squircle */}
                <div
                  className={`w-12 h-12 rounded-2xl ${service.iconBg} border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-950 tracking-tight mb-2.5 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Bottom Right Arrow */}
              <div className="flex justify-end mt-6 pt-4 border-t border-gray-100/60">
                <div className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-gray-400 group-hover:text-purple-600 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
