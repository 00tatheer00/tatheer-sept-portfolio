"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (barRef.current) {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-purple-100/30">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 origin-left scale-x-0 shadow-[0_0_12px_rgba(147,51,234,0.6)]"
      />
    </div>
  );
}
