# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start development server
npm run build    # production build (always run this to verify before deploying)
npm run lint     # lint with ESLint
```

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — configured via `src/app/globals.css` only; there is no `tailwind.config.ts`
- **next-themes** — class-based dark/light mode; requires `suppressHydrationWarning` on `<html>`
- **lucide-react v1.8+** — note: `Github` icon does not exist in this version; use an inline SVG instead

## Dark mode

Dark mode uses the `class` strategy (next-themes adds/removes `.dark` on `<html>`). The Tailwind v4 variant is declared in `globals.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Use `dark:` prefix in Tailwind classes as normal.

## Architecture

```
src/
  app/                   # Next.js App Router pages
    layout.tsx           # root layout — ThemeProvider + Navbar wrap all pages
    page.tsx             # hero landing page
    projects/page.tsx    # split-panel project browser (client component)
    about/page.tsx
    resume/page.tsx
    contact/page.tsx
  components/
    Navbar.tsx           # sticky nav with active-link highlighting
    ThemeProvider.tsx    # thin next-themes wrapper (must be 'use client')
    ThemeToggle.tsx      # sun/moon button; uses mounted guard to avoid hydration mismatch
    ProjectDetail.tsx    # right panel — description, screenshots, action buttons
    WebGLPlayer.tsx      # iframe-based WebGL embed, lazy-loaded on button click
  data/
    projects.ts          # single source of truth for all project content
  types/
    index.ts             # Project interface and ProjectType union
  lib/
    utils.ts             # cn() helper (clsx + tailwind-merge)
public/
  games/                 # drop WebGL builds here as games/<game-id>/index.html
  resume.pdf            # add to enable the resume preview and download
```

## Adding content

**New project or game** — add an entry to `src/data/projects.ts`. Set `type: 'game'` and provide a `webglPath` (e.g. `'/games/my-game'`) to enable the in-browser player.

**WebGL build** — export from Unity/Godot to `public/games/<game-id>/`, ensuring the entry point is `index.html`. The `vercel.json` already sets the `Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy` headers required for Unity's SharedArrayBuffer threading.

**Screenshots** — add images to `public/images/` and reference them in `src/data/projects.ts` under the `screenshots` array. `ProjectDetail` renders them in a 2-column grid using `next/image`.

**Resume** — place `resume.pdf` in `public/`. Then uncomment the `<iframe>` block in `src/app/resume/page.tsx` and remove the placeholder `<div>`.

**Contact links** — update the `contacts` array in `src/app/contact/page.tsx` with real GitHub and LinkedIn URLs.

## Deployment (Vercel)

Import the repo in Vercel — no config needed beyond what's in `vercel.json`. The `vercel.json` headers apply only to `/games/*` routes.
