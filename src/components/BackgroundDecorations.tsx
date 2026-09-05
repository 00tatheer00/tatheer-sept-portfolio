"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BackgroundDecorations() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);
  const silkTopRef = useRef<HTMLDivElement>(null);
  const silkBottomRef = useRef<HTMLDivElement>(null);
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // GSAP ScrollTrigger Parallax (GPU optimized)
    const ctx = gsap.context(() => {
      if (silkTopRef.current) {
        gsap.to(silkTopRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
      }

      if (silkBottomRef.current) {
        gsap.to(silkBottomRef.current, {
          yPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      }

      // Parallax on Floating Bubbles
      if (bubble1Ref.current) {
        gsap.to(bubble1Ref.current, {
          yPercent: -35,
          rotate: 15,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }

      if (bubble2Ref.current) {
        gsap.to(bubble2Ref.current, {
          yPercent: -45,
          rotate: -20,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#f7f8fd]"
    >
      {/* Dynamic Interactive Mouse Spotlight Glow */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full opacity-40 transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.22) 0%, rgba(199, 210, 254, 0.12) 40%, transparent 70%)",
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Layer 1: Ethereal Silk Wave Ribbon (Top-Right to Center-Left) */}
      <div
        ref={silkTopRef}
        className="absolute -top-16 -right-16 w-[68vw] max-w-[980px] h-[125vh] opacity-85 mix-blend-multiply will-change-transform"
      >
        <div className="relative w-full h-full animate-float-slow">
          <Image
            src="/assets/ethereal_silk_bg.jpg"
            alt="3D Ethereal Silk Wave Background"
            fill
            priority
            className="object-cover object-top opacity-80 [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [mask-image:radial-gradient(ellipse_at_top_right,black_70%,transparent_92%)]"
          />
        </div>
      </div>

      {/* Layer 2: Ambient Glowing Color Blooms */}
      <div className="absolute top-[10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-200/40 via-violet-100/30 to-transparent blur-3xl animate-pulse-glow" />
      <div
        className="absolute top-[45%] right-[-8%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-indigo-200/35 via-purple-100/25 to-transparent blur-3xl animate-pulse-glow"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute top-[75%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-200/30 via-indigo-100/20 to-transparent blur-3xl animate-pulse-glow"
        style={{ animationDelay: "-5s" }}
      />

      {/* Layer 3: Second Diagonal Silk Ribbon Flow (Lower Half) */}
      <div
        ref={silkBottomRef}
        className="absolute top-[140vh] -left-24 w-[58vw] max-w-[850px] h-[110vh] opacity-55 mix-blend-multiply rotate-180 will-change-transform"
      >
        <div
          className="relative w-full h-full animate-float-slow"
          style={{ animationDelay: "-4s" }}
        >
          <Image
            src="/assets/ethereal_silk_bg.jpg"
            alt="3D Silk Flow"
            fill
            className="object-cover object-bottom opacity-65 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)]"
          />
        </div>
      </div>

      {/* Floating 3D Refractive Glass Bubble 1 (Near Services section) */}
      <div
        ref={bubble1Ref}
        className="absolute top-[1150px] right-[4%] w-24 h-24 sm:w-36 sm:h-36 rounded-full opacity-90 drop-shadow-[0_20px_35px_rgba(139,92,246,0.18)] z-0 will-change-transform"
      >
        <Image
          src="/assets/glass_sphere_bubble.jpg"
          alt="Refractive Glass Sphere"
          fill
          className="object-contain rounded-full"
        />
      </div>

      {/* Floating 3D Refractive Glass Bubble 2 (Near Selected Work) */}
      <div
        ref={bubble2Ref}
        className="absolute top-[2150px] left-[2%] w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-85 drop-shadow-[0_18px_30px_rgba(99,102,241,0.14)] z-0 will-change-transform"
      >
        <Image
          src="/assets/glass_sphere_bubble.jpg"
          alt="Refractive Glass Sphere"
          fill
          className="object-contain rounded-full"
        />
      </div>

      {/* Fine Frosted Noise/Grain Layer */}
      <div
        className="absolute inset-0 opacity-[0.018] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
