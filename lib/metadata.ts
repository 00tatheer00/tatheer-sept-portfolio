import type { Metadata } from "next";

const SITE_URL = "https://tatheer.dev";
const SITE_NAME = "S Tatheer Hussain";
const SITE_DESCRIPTION =
  "Full-stack software engineering, SaaS development, technical education, and venture leadership. Discover production-tested systems, full-stack architecture, and developer mentorship by S Tatheer Hussain.";

/**
 * Base metadata shared across all pages.
 * Individual pages can extend/override via Next.js Metadata API.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Full-Stack Software Engineer, SaaS Developer & Technical Educator`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "S Tatheer Hussain",
    "Tatheer Hussain",
    "Full-Stack Developer",
    "Software Engineer",
    "SaaS Developer",
    "Technical Educator",
    "University Lecturer",
    "Tech4Edges",
    "EEST",
    "Peshawar",
    "Pakistan",
    "Web Development",
    "Next.js",
    "React",
    "Node.js",
    "System Architecture",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Full-Stack Software Engineer, SaaS Developer & Technical Educator`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Full-Stack Software Engineer, SaaS Developer & Technical Educator`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Generate page-specific metadata by merging with base.
 */
export function createPageMetadata(overrides: Metadata): Metadata {
  return {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...baseMetadata.openGraph,
      ...(overrides.openGraph as Record<string, unknown>),
    },
    twitter: {
      ...baseMetadata.twitter,
      ...(overrides.twitter as Record<string, unknown>),
    },
  };
}

/**
 * Validated Schema.org structured data.
 * Real, documented facts only — zero unverified metrics or fake reviews.
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tatheer.dev/#person",
      name: "S Tatheer Hussain",
      jobTitle: "Full-Stack Software Engineer, SaaS Developer & Technical Educator",
      description:
        "Full-stack software engineer, university lecturer, tech educator, and founder based in Peshawar, Pakistan.",
      url: "https://tatheer.dev",
      sameAs: [
        "https://linkedin.com/in/tatheer-hussain",
        "https://github.com/00tatheer00",
        "https://tatheer-projects.vercel.app",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Peshawar",
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "Tech4Edges",
        },
        {
          "@type": "Organization",
          name: "Emerging Edge School of Technology",
        },
      ],
      knowsAbout: [
        "Software Engineering",
        "Full-Stack Web Development",
        "SaaS Architecture",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Developer Education",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://tatheer.dev/#website",
      url: "https://tatheer.dev",
      name: "S Tatheer Hussain — Portfolio",
      description:
        "Official personal portfolio and digital engineering lab of S Tatheer Hussain.",
      publisher: {
        "@id": "https://tatheer.dev/#person",
      },
    },
  ],
};
