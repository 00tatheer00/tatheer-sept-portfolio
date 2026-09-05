import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "S Tatheer Hussain — Portfolio",
    short_name: "Tatheer",
    description:
      "Full-Stack Software Engineer, SaaS Developer & Technical Educator. Building systems, educating engineers, and leading technology ventures.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
