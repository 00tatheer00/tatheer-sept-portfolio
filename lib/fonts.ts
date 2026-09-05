import { Inter, Space_Grotesk } from "next/font/google";

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
