import React from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-gray-900 font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Interactive GSAP Smooth Custom Cursor */}
      <CustomCursor />

      {/* GSAP Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3D Ethereal Silk & Refractive Glass Background */}
      <BackgroundDecorations />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <SelectedWorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
