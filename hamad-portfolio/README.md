# Hamad — Portfolio

Personal portfolio for [Hamad](https://github.com/Ha1mad), a mobile developer
building for iOS and Android from a shared React Native codebase.

Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` — Nav, Hero, About, Projects, Skills, Contact
- `src/data/projects.ts` — project content (edit this to add/update projects)
- `src/index.css` — Tailwind v4 theme tokens (colors, fonts) live under `@theme`

## Design notes

The palette and hero "build log" animation lean into the iOS/Android duality
of cross-platform mobile work — a blue accent for iOS, a green accent for
Android, both resolving to one shared build. The same window-chrome bar used
in the hero terminal repeats on each project card to keep that motif
consistent throughout the page.

To swap accent colors or fonts, edit the `@theme` block in `src/index.css`.
