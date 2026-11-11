# Ace

Ace is an AI-powered interview practice experience. It helps candidates rehearse role-specific questions, improve their answers, and build confidence before a real interview.

This repository contains the responsive landing page and first-pass authentication UI for Ace. The landing page is the primary product surface; login, signup, and password recovery remain available as supporting routes.

## Author

- **Aryan**
- GitHub: [istmX](https://github.com/istmX)
- Contact: `xparyan68@gmail.com`

The source is proprietary and closed until the applicable source-code purchase is completed. See [LICENSE.md](./LICENSE.md) for the usage terms.

## Template pricing

- Full AI interview platform landing page: **$300**
- Login, signup, and forgot-password pages: **$30 each**
- All three supporting pages with the landing page: **$390 total**
- Adding only one supporting page: **$30 extra**

## What is included

- Landing page with:
  - Hero section and call-to-action
  - Interview practice demo
  - Feature and workflow explanations
  - Testimonials
  - Free, Practice, and Career pricing plans
  - Frequently asked questions
- Responsive navigation with desktop and mobile layouts
- Login, signup, and forgot-password routes
- Google and GitHub sign-in presentation states
- Motion effects that respect the user's reduced-motion preference
- Shared UI primitives for buttons, inputs, icons, and branding

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Ace marketing page |
| `/sale` | Template features, deliverables, and pricing |
| `/login` | Sign-in UI |
| `/signup` | Account creation UI |
| `/forgot-password` | Password recovery UI |

Authentication controls are currently presentation-only. Form submissions and social sign-in buttons simulate a successful response; they are not connected to an authentication service yet.

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion for React animations
- Tabler Icons
- pnpm

## Getting started

### Prerequisites

- Node.js 20 or newer
- pnpm

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm lint` | Run ESLint |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |

## Project structure

```text
app/                 Next.js routes and global styles
components/          Marketing, auth, and shared UI components
lib/                 Shared utilities
public/              Images, video, and other static assets
```

## Design documentation

- [Design tokens](./DESIGN_TOKENS.md)
- [Theming](./THEMING.md)
- [Color audit](./COLOR_AUDIT.md)
