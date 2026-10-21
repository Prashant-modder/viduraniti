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
- **Styling:** Vanilla CSS (variables for Light/Dark mode)
- **Math Rendering:** KaTeX
- **Content Engine:** Gemini API (for generating schemas and dynamic content)
- **Data Pipeline:** Node.js scripts (`generator/`)

---

## 🚀 Getting Started

### Prerequisites

Node.js v18.14.1 or higher is recommended.

### Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Builds the production site to `./dist/`      |
| `npm run preview` | Previews the build locally before deploying  |

---

## 📂 Project Architecture (STRICT)

The data architecture is the most critical part of the site. We use a two-tier routing structure depending on the subject.

```text
/
├── public/                 # Static assets (fonts, icons, global.css)
├── src/
│   ├── components/         # Reusable UI (ChapterSidebar.astro, QA.astro, etc.)
│   ├── layouts/            # BaseLayout.astro (navigation & breadcrumbs)
│   ├── pages/              # Astro routing
│   │   └── ncert/
│   │       └── class-[class]/
│   │           └── [subject]/
│   │               ├── index.astro       # Subject page
│   │               └── [book]/
│   │                   ├── [chapter]/    # FLAT structure (Maths/Science)
│   │                   └── [unit]/       # GROUPED structure (English/SST)
│   │                       └── [chapter]/
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
```

### 📜 The `.js` Data Schema Rule

Every data file inside a chapter folder must export a specific object shape so the Astro components (`QA.astro`, `Prose.astro`) can render it correctly.

**Example (`solutions-let-us-discuss.js`):**

```javascript
export const section = {
  label: "Let Us Discuss",
  instruction: "Answer the following questions in your own words.",
  questions: [
    {
      n: "i", // Can be Roman numeral, number, or letter
      question: "Why did the tree feel happy?",
      answer: "The tree felt happy because...",
      options: [] // Optional: for MCQs
    }
  ]
}
```

---

## 📝 Non-Negotiable Content Rules

When generating or writing content, you **must** follow these rules:

1. **NEP 2020 / NCF-SE 2023 ONLY:** Never use old NCERT book references (e.g., "Our Past", "Social & Political Life"). Use the new books (e.g., "Exploring Society", "Poorvi", "Ganit Prakash").
2. **LaTeX for Math:** All mathematical equations must use `$inline$` and `$$block$$` syntax.
3. **Indian-Classroom English:** Keep the tone friendly, clear, and tailored to Indian school students.
4. **Accuracy:** Do not hallucinate facts. If textbook context is missing, request it.

---

## 🤖 Team Workflow & AI Discipline

We use Claude for generating schemas and fixing code, and Gemini for generating bulk content.

- **Claude Context File:** Always keep `ViduraNiti_Dev_Context.md` in your Claude Project.
- **Structure First:** Generate the `.js` skeleton first. Do not generate massive amounts of HTML/CSS.
- **No "Code You Can't Defend":** If you use AI to write code, you must be able to explain every line. Do not push code to `main` that you don't understand.

---

## 🔗 Integrations

- **Discord:** Private server for daily standups, code help, and GitHub commit feeds.
- **GitHub Webhooks:** Commits to this repository automatically post to the `#project-updates` Discord channel.

---

*Built with 🇮🇳 by Taksha™.*
