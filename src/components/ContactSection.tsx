"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sculptureRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "SaaS Platform Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 3D Sculpture continuous 360 rotation & levitation
      if (sculptureRef.current) {
        gsap.to(sculptureRef.current, {
          rotate: 360,
          duration: 35,
          repeat: -1,
          ease: "none",
        });

        gsap.to(sculptureRef.current, {
          y: -18,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Scroll Parallax on Sculpture
        gsap.to(sculptureRef.current, {
          yPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Entrance Animations
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, x: -35 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Floating 3D Lavender Chrome Swirl Sculpture in Bottom Right (Transparent PNG) */}
        <div
          ref={sculptureRef}
          className="absolute -bottom-12 -right-6 sm:-right-14 w-52 h-52 sm:w-72 sm:h-72 pointer-events-none z-20 opacity-95 drop-shadow-[0_25px_45px_rgba(139,92,246,0.25)] will-change-transform"
        >
          <Image
            src="/assets/iridescent_swirl_3d.png"
            alt="3D Iridescent Swirl Sculpture"
            fill
            className="object-contain"
          />
        </div>

        <div className="p-8 sm:p-12 lg:p-16 rounded-[40px] glass-panel relative overflow-hidden shadow-2xl">
          
          {/* Section Subtitle */}
          <div className="flex flex-col items-start gap-2 mb-8">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
              LET&apos;S CONNECT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Left Column: Heading & Contact Info */}
            <div ref={leftColRef} className="lg:col-span-5 flex flex-col items-start text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-6">
                Have a project in mind? <br />
                <span className="gradient-purple-text">Let&apos;s create something amazing together.</span>
              </h2>

              <div className="flex flex-col gap-5 mt-4 w-full">
                {/* Email Item */}
                <TiltCard maxTilt={5} scale={1.02}>
                  <a
                    href="mailto:tatheerabidi00@gmail.com"
                    data-cursor="EMAIL"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl glass-card-subtle text-gray-700 hover:text-purple-600 hover:bg-white/90 transition-all group w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] text-gray-400 font-medium">Email Me</span>
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        tatheerabidi00@gmail.com
                      </span>
                    </div>
                  </a>
                </TiltCard>

                {/* Phone / WhatsApp Item */}
                <TiltCard maxTilt={5} scale={1.02}>
                  <a
                    href="https://wa.me/923275792600"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="CHAT"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl glass-card-subtle text-gray-700 hover:text-emerald-600 hover:bg-white/90 transition-all group w-full cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] text-gray-400 font-medium">Phone &amp; WhatsApp</span>
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        +92 327 5792600
                      </span>
                    </div>
                  </a>
                </TiltCard>

                {/* Location Item */}
                <TiltCard maxTilt={5} scale={1.02}>
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl glass-card-subtle text-gray-700 w-full">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] text-gray-400 font-medium">Location</span>
                      <span className="text-sm font-semibold text-gray-900">
                        Peshawar, Pakistan · Worldwide Remote
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-10 rounded-3xl glass-card-subtle text-center flex flex-col items-center justify-center gap-4 py-16">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950">Thank You, Message Sent!</h3>
                  <p className="text-gray-600 text-sm max-w-sm">
                    I have received your project details and will get back to you within 24 hours with a scope and roadmap.
                  </p>
                  <MagneticButton strength={0.3}>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </MagneticButton>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-semibold text-gray-700">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-card-subtle border border-gray-200/80 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-semibold text-gray-700">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-card-subtle border border-gray-200/80 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Project Type Dropdown */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-gray-700">Your Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl glass-card-subtle border border-gray-200/80 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="SaaS Platform Development">SaaS Platform Development</option>
                      <option value="Full-Stack Web Application">Full-Stack Web Application (Next.js/React)</option>
                      <option value="API & Backend Architecture">API &amp; Backend Architecture</option>
                      <option value="AI Integration & Automation">AI Integration &amp; Automation</option>
                      <option value="Technical Training & Mentorship">Technical Training &amp; Mentorship</option>
                    </select>
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-gray-700">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your goals, timeline, and requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl glass-card-subtle border border-gray-200/80 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button with Magnetic Physics */}
                  <div className="pt-2">
                    <MagneticButton strength={0.35}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        data-cursor="SEND"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gray-950 text-white font-semibold text-sm shadow-xl shadow-gray-950/15 hover:bg-gray-800 transition-all disabled:opacity-50 cursor-pointer"
                      >
                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
