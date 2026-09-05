import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S Tatheer Hussain | Full Stack Software Engineer · CEO Tech4Edges",
  description: "Portfolio of S Tatheer Hussain — Full Stack & SaaS Software Engineer, CEO at Tech4Edges, and Technical Trainer based in Peshawar, Pakistan. Architecting scalable web applications, APIs, and AI automations.",
  keywords: [
    "S Tatheer Hussain",
    "Full Stack Developer",
    "SaaS Engineer",
    "Next.js Developer",
    "Tech4Edges",
    "Peshawar Pakistan",
    "Technical Trainer",
    "AI Automation",
    "React",
    "Node.js",
  ],
  authors: [{ name: "S Tatheer Hussain" }],
  openGraph: {
    title: "S Tatheer Hussain | Full Stack Software Engineer",
    description: "Architecting modern SaaS systems, intuitive web applications, and resilient cloud architectures.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#f7f8fd] text-gray-900 selection:bg-purple-100 selection:text-purple-900 relative min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
