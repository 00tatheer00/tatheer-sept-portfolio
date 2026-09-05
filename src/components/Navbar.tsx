"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import MagneticButton from "./MagneticButton";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Entrance Animation
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
      );
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = navItems.map((item) => item.name.toLowerCase());
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const matched = navItems.find((item) => item.name.toLowerCase() === section);
            if (matched) setActiveSection(matched.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        ref={navRef}
        className={`w-full max-w-6xl transition-all duration-300 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between glass-pill ${
          isScrolled ? "shadow-lg shadow-purple-900/10 bg-white/80 scale-[0.99]" : "bg-white/65 scale-100"
        }`}
      >
        {/* Left: Brand Identity / Profile */}
        <MagneticButton strength={0.25}>
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              <span className="bg-gradient-to-tr from-purple-400 to-indigo-200 bg-clip-text text-transparent">
                T
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-gray-900 leading-tight tracking-tight">
                S Tatheer Hussain
              </span>
              <span className="text-[11px] text-gray-500 font-medium leading-tight">
                Full Stack & SaaS Engineer
              </span>
            </div>
          </Link>
        </MagneticButton>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center bg-gray-100/60 p-1 rounded-full border border-white/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-gray-900 shadow-sm font-semibold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA Button with Magnetic Physics */}
        <div className="flex items-center gap-2">
          <MagneticButton strength={0.35}>
            <Link
              href="#contact"
              data-cursor="CHAT"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold text-gray-800 bg-white/85 hover:bg-white border border-gray-200/80 shadow-sm hover:shadow transition-all group cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-700 hover:bg-white/80 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 p-5 rounded-3xl glass-panel shadow-2xl flex flex-col gap-2 z-50 border border-white/90">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveSection(item.name);
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                activeSection === item.name
                  ? "bg-purple-600 text-white shadow-md font-semibold"
                  : "text-gray-700 hover:bg-purple-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-900 text-white font-medium text-sm shadow-md"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
