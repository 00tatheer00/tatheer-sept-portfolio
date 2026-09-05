import type { Metadata, Viewport } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { baseMetadata, structuredData } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/interaction/SmoothScroll";
import { CustomCursor } from "@/components/interaction/CustomCursor";
import { ScrollProgress } from "@/components/animation/ScrollProgress";
import { PageTransition } from "@/components/animation/PageTransition";
import { Navbar } from "@/components/ui/Navbar";
import "./globals.css";

/* ── Metadata ────────────────────────────────────────────────── */

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── Root Layout ─────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, spaceGrotesk.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {/* Accessible skip link for keyboard & screen reader navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:font-bold focus:text-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
        >
          Skip to content
        </a>

        {/* Noise texture overlay */}
        <div className="bg-noise" />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Custom cursor (desktop only) */}
        <CustomCursor />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Smooth scroll + page transitions */}
        <SmoothScroll>
          <PageTransition>
            <div id="main-content">{children}</div>
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
