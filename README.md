# Erickson Dela Cruz — Portfolio

A premium, modern developer portfolio built with **Vue 3 (Composition API)**, **Vite** and **TailwindCSS**. Features glassmorphism, subtle gradients, GSAP scroll animations, smooth scrolling (Lenis), a typewriter hero, dark/light mode, and a fully responsive layout.

## ✨ Highlights

- **Vue 3 + Vite** with `<script setup>` Composition API
- **TailwindCSS** design system with a custom brand palette, glass & gradient utilities
- **GSAP + ScrollTrigger** — animated timeline draw and node pop-ins
- **Lenis** smooth scrolling with a scroll-progress bar
- **Dark / light mode** (system-aware, persisted to `localStorage`)
- **Typewriter** hero effect + animated gradients
- **Scroll-reveal** and **3D tilt** custom directives (`v-reveal`, `v-tilt`)
- **Reusable components** — buttons, cards, badges, skill bars, section headings
- **SEO friendly** — meta tags, Open Graph, Twitter cards, JSON-LD, semantic HTML
- **Accessible** — respects `prefers-reduced-motion`, focus states, aria labels
- **Fully responsive** — mobile, tablet, desktop

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 🗂 Project structure

```
├── index.html                 # SEO meta, fonts, JSON-LD
├── tailwind.config.js         # design tokens, colors, animations
├── vite.config.js             # Vite + @ alias
├── public/                    # favicon, OG image, CV placeholder, robots
└── src/
    ├── main.js                # app bootstrap, global directives
    ├── App.vue                # loader, smooth scroll, progress bar, layout
    ├── style.css              # Tailwind layers + design utilities
    ├── router/                # vue-router (single-page + anchor nav)
    ├── data/portfolio.js      # ← single source of truth for ALL content
    ├── composables/           # useTheme, useTypewriter
    ├── directives/            # reveal (scroll-in), tilt (3D hover)
    ├── views/HomeView.vue     # composes all sections
    └── components/
        ├── ui/                # GlassCard, GradientButton, SectionHeading,
        │                      #   SkillBar, TechBadge, AuroraBackground
        ├── layout/            # AppLoader, NavBar, FooterSection
        └── sections/          # Hero, About, Timeline, Projects, Awards, Contact
```

## ✏️ Editing content

All text, skills, timeline, projects, awards and contact details live in
**`src/data/portfolio.js`**. Update that one file and every section stays in sync —
no need to touch component markup.

## 📬 Wiring up the contact form

`ContactSection.vue` validates on the client and simulates a send. To deliver
messages, replace the `submit()` body with a call to your backend, **EmailJS**,
or **Formspree**.

## 📄 CV

Replace `public/Erickson-Dela-Cruz-CV.pdf` with your real CV. The download button
and nav point to it via `profile.cvUrl` in `portfolio.js`.

---

Built with 💜 and Vue.
