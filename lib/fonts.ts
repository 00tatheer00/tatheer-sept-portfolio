import { Inter, Space_Grotesk, Caveat } from "next/font/google";

/**
 * Inter — Primary body font.
 * Clean, highly legible, optimized for screen reading.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Space Grotesk — Display / heading font.
 * Technical, geometric, editorial presence.
 */
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

/**
 * Caveat — Signature script font matching reference.
 * Used for "Engineer Educator Entrepreneur" and author signature.
 */
export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
});
