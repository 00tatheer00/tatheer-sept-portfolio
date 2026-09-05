<div align="center">

# S TATHEER HUSSAIN
### Full-Stack Software Engineer · SaaS Developer · Technical Educator · Founder
**ENGINEER. EDUCATOR. ENTREPRENEUR.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)

[tatheer.dev](https://tatheer.dev) · [LinkedIn](https://linkedin.com/in/tatheer-hussain) · [GitHub](https://github.com/00tatheer00) · [Project Lab Archive](https://tatheer-projects.vercel.app)

</div>

---

## 🏛️ Overview

The personal portfolio and digital engineering laboratory of **S Tatheer Hussain**. Designed from the ground up as a high-performance, accessible, and editorial digital experience that reflects the intersection of software systems engineering, computer science instruction, and venture leadership.

> *"I don't only teach technology. I build the technology behind learning."*

```
I BUILD SOFTWARE.
I BUILD SYSTEMS.
I BUILD DEVELOPERS.
I BUILD OPPORTUNITIES.
```

---

## ✨ Core Pillars & Architecture

### 1. 💻 Engineer
- **Multi-Tenant SaaS Platforms**: Tenant-isolated architectures, PostgreSQL relational schemas, and modern Next.js edge runtimes.
- **System Architecture & API Modernization**: Monolith refactoring into decoupled microservices, high-throughput RESTful endpoints, and automated end-to-end type validation.
- **Enterprise Operations & ERP**: Real-time logistics grids, dispatch scheduling, and immutable audit trails.

### 2. 🎓 Educator
- **Institutional LMS Engineering**: Sole architect and maintainer of the proprietary **EEST Portal / LMS** managing courses, automated code submissions, attendance, and progress analytics.
- **University Lecturer & Trainer**: Conducting specialized computer science lectures and MERN-stack developer masterclasses across premier universities (University of Peshawar, UET, Islamia College).
- **Saylani Mass IT Training (SMIT)**: Recipient of the Best Teacher Appreciation Award (2025).

### 3. 🚀 Entrepreneur
- **Tech4Edges**: Founder & CEO leading product engineering, full-stack consulting, and scalable software solutions.
- **Emerging Edge School of Technology (EEST)**: Director of Technology leading modern technical curriculum design and digital platform infrastructure.

---

## 🔬 Digital Engineering Lab (Verified Systems)

| System | Domain | Core Stack | Architecture Highlights |
|---|---|---|---|
| **EEST Portal / LMS** | Education Tech | React, Node.js, Express, MongoDB, JWT | Proprietary institutional learning ecosystem managing hundreds of student submissions and trainer code reviews. |
| **Custom ERP Platform** | Business Software | React, Node.js, PostgreSQL, REST APIs | High-density operations desk, driver dispatch pipelines, and relational database integrity. |
| **Startup Dashboard Revamp** | SaaS & Web | Next.js, TypeScript, React Query, Zod | Asynchronous state refactoring, end-to-end type safety, and sub-second render speeds. |
| **Education Network Platform** | Enterprise Web | Next.js, Node.js, PostgreSQL, Docker | Full-stack records modernization paired with hands-on developer team coaching on clean Git workflows. |
| **International API Rebuild** | Distributed Services | Node.js, TypeScript, OpenAPI, Docker | Strict API contracts, asynchronous job queues, and cross-timezone deployment. |
| **Multi-Tenant SaaS Systems** | Cloud SaaS | Next.js, Prisma, PostgreSQL, Cloudflare | Row-level tenant isolation, scoped role hierarchies, and modular billing interfaces. |
| **AI Workflow Automation** | AI & Integration | TypeScript, LLM Orchestration, Zod, Postgres | Deterministic schema extraction from unstructured data with token budgeting and rate guards. |

---

## 🛠️ Technology Stack & Engineering Standards

- **Core Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components by default, SSG static pre-rendering)
- **Runtime & UI**: [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a curated dark charcoal foundation (`#0A0A0B`) and warm amber accent (`#C8A96E`)
- **Animation & Transitions**: [Framer Motion 13](https://www.framer.com/motion/) with GPU-accelerated transforms (`transform`, `opacity`) and strict `prefers-reduced-motion` compliance
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Display) & [Inter](https://fonts.google.com/specimen/Inter) (Body) via `next/font`
- **Security**: Strict HTTP headers (`X-Frame-Options: DENY`, `nosniff`, strict referrer, disabled `X-Powered-By`)
- **Social Sharing**: Dynamic OpenGraph card generation via `next/og` (`app/opengraph-image.tsx`)
- **Accessibility**: Semantic HTML5, visible `:focus-visible` rings, screen-reader ARIA landmarks, and keyboard skip-to-content bypass

---

## 📂 Repository Structure

```
tatheer-portfolio/
├── app/
│   ├── globals.css                # Global styles, Tailwind v4 theme, tokens & utilities
│   ├── layout.tsx                 # Root layout, Schema.org JSON-LD, navbar & custom cursor
│   ├── page.tsx                   # Cinematic interactive homepage (14 story sections)
│   ├── icon.svg                   # Native SVG monogram favicon (TH)
│   ├── opengraph-image.tsx        # Dynamic 1200x630 social preview card generator
│   ├── manifest.ts                # PWA web application manifest
│   ├── robots.ts                  # Search engine crawler policies
│   ├── sitemap.ts                 # Canonical dynamic sitemap (20 routes)
│   ├── error.tsx                  # Branded runtime client error boundary
│   ├── loading.tsx                # Ambient zero layout-shift route loader
│   ├── not-found.tsx              # Editorial 404 error screen
│   ├── about/page.tsx             # Three-dimensional professional biography
│   ├── experience/page.tsx        # Career journey, system architecture & credentials
│   ├── projects/page.tsx          # Digital Engineering Lab & domain filter
│   ├── projects/[slug]/page.tsx   # 10-chapter deep-dive case study detail view
│   ├── services/page.tsx          # Core capabilities, deliverables & engagement standards
│   └── contact/page.tsx           # Verified channels, 1-click clipboard & inquiry form
├── components/
│   ├── animation/                 # AnimatedText, Reveal, PageTransition, ScrollProgress
│   ├── contact/                   # ContactForm, ContactChannels
│   ├── experience/                # SystemArchitecture, CareerEvolution, TeachingEcosystem
│   ├── interaction/               # CustomCursor, SmoothScroll
│   ├── projects/                  # ProjectArchitectureMap, ProjectFilter, ProjectCard
│   ├── sections/                  # Hero, Identity, FeaturedWork, WhatIBuild, FinalCTA, Footer
│   └── ui/                        # Button, Container, Badge, MagneticButton, Navbar
├── data/                          # Single source of truth content registries
│   ├── profile.ts                 # Verified identity, roles, and verified social URLs
│   ├── projects.ts                # 7 complete architectural project case studies
│   ├── experience.ts              # Career chronology & professional roles
│   ├── services.ts                # Verified engineering & educational services
│   ├── skills.ts                  # System architecture layers & tooling
│   └── achievements.ts            # AWS certification, awards, and university keynotes
├── lib/
│   ├── animations.ts              # Reusable Framer Motion spring presets
│   ├── fonts.ts                   # Google Fonts optimization (Inter, Space Grotesk)
│   ├── metadata.ts                # SEO base metadata & Schema.org graph definitions
│   └── utils.ts                   # Utility functions (cn, clsx, twMerge)
└── types/                         # Strict TypeScript domain interfaces
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/00tatheer00/tatheer-sept-portfolio.git
cd tatheer-sept-portfolio

# Install dependencies
npm install
```

### Local Development

```bash
# Start Turbopack development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Local Preview

```bash
# Compile and verify static production build
npm run build

# Start production server
npm run start
```

---

## 🧪 Quality & Verification Matrix

Every release is strictly validated against the following automated checks:

| Check | Tool / Command | Result |
|---|---|---|
| **Type Safety** | `npx tsc --noEmit` | **0 errors** (Strict mode) |
| **Linting & Best Practices** | `npm run lint` | **0 warnings, 0 errors** (Next.js 16 / React 19) |
| **Static Generation** | `npm run build` | **20/20 static & SSG routes prerendered** |
| **Security Headers** | Production inspection | **`DENY` framing, `nosniff`, `strict-origin`, no powered-by** |
| **Route Coverage** | Automated HTTP check | **100% routes return 200 OK / 404 OK** |

---

## 📬 Connect & Inquiries

- **Personal Website**: [tatheer.dev](https://tatheer.dev)
- **LinkedIn**: [linkedin.com/in/tatheer-hussain](https://linkedin.com/in/tatheer-hussain)
- **GitHub**: [github.com/00tatheer00](https://github.com/00tatheer00)
- **Project Lab Archive**: [tatheer-projects.vercel.app](https://tatheer-projects.vercel.app)
- **Direct Email**: [tatheer@tatheer.dev](mailto:tatheer@tatheer.dev)
- **Location**: Peshawar, Pakistan · UTC+5 (Collaborating globally)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
