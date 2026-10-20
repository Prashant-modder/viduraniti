# 📚 ViduraNiti

**ViduraNiti** is a fast, static, NEP 2020-aligned learning platform for CBSE Classes 1–10. Built with Astro, React, and the Gemini API, it serves chapter content, summaries, exam notes, and solutions for Indian students.

> **Company:** Sutra (a division of Taksha™)
> **Founder:** Zicronium (Prashant Raj Jha)
> **Team:** Zicronium, Sriti, Amaya
> **Domain:** [ViduraNiti.ind.in](https://ViduraNiti.ind.in)

---

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **UI/Components:** React (where interactivity is needed)
- **Styling:** Vanilla CSS (Variables for Light/Dark mode)
- **Math Rendering:** KaTeX
- **Content Engine:** Gemini API (for generating schemas and dynamic content)
- **Data Pipeline:** Node.js scripts (`generator/`)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed (v18.14.1 or higher is recommended).

### Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

---

## 📂 Project Architecture (STRICT)

Our data architecture is the most critical part of the site. We use a two-tier routing structure depending on the subject.

```text
/
├── public/                 # Static assets (fonts, icons, global.css)
├── src/
│   ├── components/         # Reusable UI (ChapterSidebar.astro, QA.astro, etc.)
│   ├── layouts/            # BaseLayout.astro (handles navigation & breadcrumbs)
│   ├── pages/              # Astro routing
│   │   └── ncert/
│   │       ├── class-[class]/
│   │       │   └── [subject]/
│   │       │       ├── index.astro       # Subject page
│   │       │       ├── [book]/
│   │       │       │   ├── [chapter]/    # FLAT structure (Maths/Science)
│   │       │       │   └── [unit]/       # GROUPED structure (English/SST)
│   │       │       │       └── [chapter]/
│   └── data/               # ALL chapter content lives here
│       └── 8/              # Class
│           └── english/    # Subject
│               └── poorvi/ # Book
│                   └── unit-1/
│                       └── chapter-1-1/
│                           ├── index.js
│                           ├── textbook.js
│                           ├── summary.js
│                           ├── exam-notes.js
│                           └── solutions-let-us-discuss.js
