# Geetesh's AI Operating System

> A system for **deciding, synthesizing, building, and automating** faster — with human judgment preserved where it matters.

This is a single-page, interactive reference that maps the *shape of a problem* to the *right AI tool and the right level of human control*. It is not a list of tools; it is an operating model for working alongside AI without surrendering judgment.

<p align="left">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white">
  <img alt="Deployed on Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white">
</p>

---

## The idea in one line

> **Tool choice follows the shape of the work.** Ambiguity and risk determine the level of human control.

When the work is ambiguous, AI is a sparring partner and the human owns the call. When the work is repeatable and well-bounded, AI runs with autonomy — under traces, evals, and guardrails. Everything in this project is built around that single trade-off.

---

## What's inside

### 1. Work shape → AI posture
A map from the *kind* of work to how AI should show up, and why.

| Work shape | AI posture | Why this posture |
| --- | --- | --- |
| **Ambiguous** | Sparring partner | *Anchor bias* — forces a better answer, not the first one |
| **Research-heavy** | Source-grounded synthesizer | *Hallucination risk* — trusted sources only, for a solid foundation |
| **Build / Prototype** | Prototype accelerator | *Spec stalemate* — a user clicking a prototype teaches more than any hypothesis |
| **Repeatable** | Bounded agent | *Repetition tax* — bounded autonomy frees time for leveraged work |

### 2. The five operating modes
From first decision to ongoing governance, mapped to real work — each with its tools, the human's role, and a guiding rule.

| Mode | Goal | Human control | Rule |
| --- | --- | --- | --- |
| **Decide** | Clarify options, trade-offs, risks | I own judgment | Structured disagreement improves judgment. |
| **Synthesize** | Compress research and documents | I verify sources | Source boundary determines the tool. |
| **Build** | Turn ideas into testable artifacts | I own acceptance criteria | The value is the loop: design, build, test, ship, learn. |
| **Automate** | Delegate repeatable workflows | I define bounds and review failures | Autonomy is earned by clarity. |
| **Observe & Improve** | Monitor I/O, run evals, enforce guardrails | I define standards and oversee governance | Trust requires evidence — evals, traces, guardrails. |

### 3. The skills layer
A model-agnostic catalogue of specialized product-management skills, organized across **Discover → Decide → Ship**, each with a defined input, output, and review rule. Browse the full set in the companion repo: [**pm-skills**](https://github.com/sachdevageetesh/pm-skills).

---

## Tech stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **[Vercel](https://vercel.com/)** for deployment

The entire experience lives in a single, content-driven page (`app/page.tsx`) — data is modeled as typed arrays and rendered into clean, responsive tables, with inline SVG icons and no runtime UI dependencies.

---

## Getting started

**Prerequisites:** Node.js 18.18+ (Node 22 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js / ESLint checks |

---

## Project structure

```
.
├── app/
│   ├── layout.tsx      # Root layout + page metadata
│   ├── page.tsx        # The full operating-system page (content + UI)
│   └── globals.css     # Global styles / Tailwind layers
├── public/             # Static assets
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

---

## Deployment

The app is built to deploy on **Vercel** with zero configuration — push to the connected repository, or run:

```bash
npm run build && npm run start
```

---

## Author

**Geetesh Sachdeva**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-sachdevageetesh-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sachdevageetesh/)
[![GitHub](https://img.shields.io/badge/GitHub-sachdevageetesh-181717?logo=github&logoColor=white)](https://github.com/sachdevageetesh)
[![Email](https://img.shields.io/badge/Email-sachdevageetesh@gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:sachdevageetesh@gmail.com)
