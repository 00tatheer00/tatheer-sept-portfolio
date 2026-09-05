import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

/**
 * Homepage — 1000% Matched to Reference Image Design.
 * Architecture:
 * 01. Hero (Greeting, Name, Gradient Subtitle, Buttons, Trusted By logos, 3D Curved Glass Frame with Portrait & Floating Cards)
 * 02. About Me (Designing with Empathy / Building with Purpose, 3-Stat Frosted Capsule, Narrative, More About Me CTA)
 * 03. Services I Offer (4 Frosted Glass Cards with colored icons + Floating 3D Liquid Glass Sphere)
 * 04. Technologies I Use (Frosted Glass Horizontal Tile Strip: Figma, Sketch, Adobe XD, Photoshop, Illustrator, Webflow, Framer, Notion, React, Next.js)
 * 05. Selected Work (Featured Projects, 3 Frosted Glass Cards with High-Res UI Previews)
 * 06. Design Process I Follow (5 Connected Numbered Cards with Arrows: 01 Discover → 02 Define → 03 Ideate → 04 Design & Build → 05 Test & Iterate)
 * 07. What Clients Say (3 Frosted Glass Quote Cards with Avatars & Circular Carousel Controls)
 * 08. Let's Connect (Contact Section with Frosted Glass Form + Floating 3D Liquid Ribbon Knot)
 * 09. Footer (Frosted Glass Brand & Navigation Bar)
 */
export default function HomePage() {
  return (
    <>
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — About Me */}
        <AboutMe />

        {/* 03 — Services I Offer */}
        <Services />

        {/* 04 — Technologies I Use */}
        <Technologies />

        {/* 05 — Selected Work */}
        <FeaturedWork />

        {/* 06 — Design Process I Follow */}
        <Process />

        {/* 07 — What Clients Say */}
        <Testimonials />

        {/* 08 — Let's Connect */}
        <ContactSection />
      </main>

      {/* 09 — Footer */}
      <Footer />
    </>
  );
}
