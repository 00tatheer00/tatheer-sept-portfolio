"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: "01",
    title: "Finova – Finance App",
    category: "Mobile App & SaaS Core",
    imageSrc: "/assets/project_finova_mobile.jpg",
    link: "https://github.com/00tatheer00",
  },
  {
    id: "02",
    title: "Analytics Dashboard",
    category: "Web Application & Telemetry",
    imageSrc: "/assets/project_analytics_dashboard.jpg",
    link: "https://tatheer.dev",
  },
  {
    id: "03",
    title: "SaaS Landing Page",
    category: "AI Platform & Web Architecture",
    imageSrc: "/assets/project_saas_landing.jpg",
    link: "https://tatheer-projects.vercel.app",
  },
];

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsContainerRef.current) {
        gsap.fromTo(
          cardsContainerRef.current.children,
          { opacity: 0, y: 60, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Selected Work
            </h2>
          </div>

          <MagneticButton strength={0.3}>
            <a
              href="https://tatheer-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="ALL"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full glass-pill text-xs font-semibold text-gray-800 hover:bg-white hover:shadow transition-all group cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>
        </div>

        {/* 3 Project Cards Grid with TiltCard and Cursor Badges */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={7}
              scale={1.02}
              data-cursor="VIEW"
              className="p-4 sm:p-5 rounded-[32px] glass-panel flex flex-col group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Preview Image Mockup */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-100 mb-5">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Meta & Bottom Row */}
              <div className="flex items-center justify-between px-2 pb-2 mt-auto">
                <div className="flex flex-col text-left">
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium mt-0.5">
                    {project.category}
                  </span>
                </div>

                <MagneticButton strength={0.4}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-gray-400 group-hover:text-purple-600 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all ml-3 shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </MagneticButton>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
