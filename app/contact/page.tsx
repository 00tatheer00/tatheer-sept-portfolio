import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Let's build something meaningful. Connect with S Tatheer Hussain for SaaS architecture, full-stack engineering, technical education, and venture advisory.",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 sm:pt-36">
      {/* Hero Header */}
      <section className="relative pb-16 sm:pb-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Direct Communication / Inquiries
            </span>

            <h1 className="mb-6 text-[clamp(2.25rem,5vw,4.5rem)] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-[var(--color-foreground)]">
              Let&apos;s Build Something Meaningful.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-foreground-muted)] max-w-2xl">
              Whether it&apos;s a SaaS product, business system, web application
              or something entirely new — let&apos;s turn the idea into something
              real.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Left: Channels, verified links, availability (5 cols) */}
            <div className="lg:col-span-5">
              <ContactChannels />
            </div>

            {/* Right: Validated, accessible Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
