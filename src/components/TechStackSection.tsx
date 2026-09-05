"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

interface TechItem {
  name: string;
  category: string;
  iconSrc: string;
  bgTint: string;
}

const techStack: TechItem[] = [
  {
    name: "Next.js",
    category: "Full Stack",
    iconSrc: "https://cdn.simpleicons.org/nextdotjs/000000",
    bgTint: "group-hover:border-black/30",
  },
  {
    name: "React",
    category: "Frontend",
    iconSrc: "https://cdn.simpleicons.org/react/61DAFB",
    bgTint: "group-hover:border-sky-400/50",
  },
  {
    name: "TypeScript",
    category: "Language",
    iconSrc: "https://cdn.simpleicons.org/typescript/3178C6",
    bgTint: "group-hover:border-blue-500/50",
  },
  {
    name: "Node.js",
    category: "Backend",
    iconSrc: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    bgTint: "group-hover:border-green-500/50",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    iconSrc: "https://cdn.simpleicons.org/postgresql/4169E1",
    bgTint: "group-hover:border-indigo-500/50",
  },
  {
    name: "MongoDB",
    category: "Database",
    iconSrc: "https://cdn.simpleicons.org/mongodb/47A248",
    bgTint: "group-hover:border-emerald-500/50",
  },
  {
    name: "Docker",
    category: "DevOps",
    iconSrc: "https://cdn.simpleicons.org/docker/2496ED",
    bgTint: "group-hover:border-sky-500/50",
  },
  {
    name: "AWS",
    category: "Cloud",
    iconSrc: "https://cdn.simpleicons.org/amazonwebservices/232F3E",
    bgTint: "group-hover:border-amber-500/50",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    iconSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    bgTint: "group-hover:border-teal-500/50",
  },
  {
    name: "Python",
    category: "AI & Scripting",
    iconSrc: "https://cdn.simpleicons.org/python/3776AB",
    bgTint: "group-hover:border-yellow-500/50",
  },
  {
    name: "Git",
    category: "Version Control",
    iconSrc: "https://cdn.simpleicons.org/git/F05032",
    bgTint: "group-hover:border-orange-500/50",
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    iconSrc: "https://cdn.simpleicons.org/figma/F24E1E",
    bgTint: "group-hover:border-rose-500/50",
  },
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, scale: 0.85, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: {
              grid: [2, 6],
              from: "center",
              amount: 0.45,
            },
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
            TOOLS &amp; SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Technologies I Use
          </h2>
        </div>

        {/* Floating Glass Tray Container */}
        <div className="p-6 sm:p-8 rounded-[32px] glass-panel shadow-xl">
          <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
            {techStack.map((tech, idx) => (
              <TiltCard
                key={idx}
                maxTilt={12}
                scale={1.05}
                className={`group p-4 rounded-2xl glass-card-subtle flex flex-col items-center justify-center gap-3 text-center cursor-pointer transition-all duration-300 ${tech.bgTint}`}
              >
                {/* Tech Icon */}
                <div className="w-11 h-11 rounded-xl bg-white p-2 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <img
                    src={tech.iconSrc}
                    alt={tech.name}
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Tech Name */}
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                    {tech.category}
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
