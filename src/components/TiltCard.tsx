"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.02,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, {
      transformPerspective: 1000,
      transformStyle: "preserve-3d",
      willChange: "transform",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const xPercent = (clientX / rect.width - 0.5) * 2;
      const yPercent = (clientY / rect.height - 0.5) * 2;

      gsap.to(card, {
        rotationY: xPercent * maxTilt,
        rotationX: -yPercent * maxTilt,
        scale: scale,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });

      if (sheenRef.current) {
        gsap.to(sheenRef.current, {
          xPercent: xPercent * 40,
          yPercent: yPercent * 40,
          opacity: 0.35,
          duration: 0.25,
          overwrite: "auto",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      if (sheenRef.current) {
        gsap.to(sheenRef.current, {
          opacity: 0,
          duration: 0.35,
          overwrite: "auto",
        });
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, scale]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Dynamic Specular Sheen Highlight */}
      <div
        ref={sheenRef}
        className="pointer-events-none absolute -inset-[50%] opacity-0 transition-opacity duration-300 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(200, 210, 255, 0.15) 45%, transparent 75%)",
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
