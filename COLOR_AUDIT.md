# Ace colour audit

This inventory was taken before theme refactoring from `app/`, `components/`, `lib/`, and `public/` source files. It includes CSS colour literals, SVG attributes, gradients, shadows, runtime style values, and Tailwind colour utilities. Line references below are the pre-refactor locations; component names are included so the audit stays useful as lines move.

## Inventory summary

| Category | Findings | New token / treatment |
| --- | --- | --- |
| Brand | `#407cf9` (72 occurrences); `#2563EB` (24); `#172B4D`; `#67D6F5`; `#7c5cff`; `#8bb8ff`; `#a9c8ff`; `#2459c7` | `--brand-primary`, `--brand-logo`, `--brand-ink`, `--brand-highlight`, `--accent-violet`, `--brand-tint`, `--brand-tint-strong`, `--brand-deep` |
| Page and neutral surfaces | Tailwind neutral range and `#d4d4d4`; white; transparent; OKLCH values in `app/globals.css` | `--surface-page`, `--surface-*`, `--text-*`, `--border-*`; framework compatibility roles map to the same central values |
| Semantic status | Tailwind red, emerald, green, amber, orange, sky and `#e11d48`, `#9f1239`, `#15803d`, `#166534`, `#f43f5e`, `#f59e0b`, `#38bdf8`, `#10b981` | `--status-success`, `--status-warning`, `--status-error`, `--status-info`, with separate soft backgrounds and decorative status shades |
| Logo/social marks | Google colours `#4285F4`, `#34A853`, `#FBBC05`, `#EA4335`; Ace mark values above; starter SVG values `#666`, `#fff`, `#000` | Google and Ace mark tokens remain independent; unused starter SVGs remain self-contained |
| Decorative / partner artwork | Trusted company card artwork in `components/TrustedByCarousel.tsx`: `#f8e4d3`, `#ffdb85`, `#7455f6`, `#9a7bfa`, `#d9b8ff`, `#b4c8ff`, `#f7b6e6`, `#66a8ff`, `#e9c6ff`, `#ffca99`, `#a5f0dd`, `#b7a1ff`, `#ffc8d9`, `#f5f3ef`, `#f0eee9`, `#e8e4dc`, `#eceef2`, `#f5e9e4`, `#ff7262`, `#a259ff`, `#1abcfe`, `#0acf83`, `#ffcd4e`, `#e9e5fb`, `#9e8df4`, `#d9d2ff`, `#e0f0dd`, `#a8d5a1`, `#91c98b`, `#f2e8dd`, `#e5c2a4`, `#f8f2eb`, `#ff765f`, `#f7ae56`, `#e87ca8`, `#957ee8` | Preserved as branded third-party logo/artwork colours; not tied to Ace brand variables |
| Illustration / specialty | `components/user-avatar.tsx` uses `#fff`; `components/FeatureShowcase.tsx` and `components/hero.tsx` use amber/violet accents; FAQ sky accent; scorecard green/amber feedback | Relevant values map to semantic accent/status tokens; avatar white remains a neutral foreground |
| Gradients and masks | `linear-gradient`, `radial-gradient`, `repeating-linear-gradient`, SVG gradient stops, mask gradients in Hero, CTA, Interview Demo, How It Works, Pricing, Testimonials and Logo Cloud | Brand and neutral stops use semantic variables; artwork stops remain local where they intentionally represent a partner brand |
| Shadows / overlays | Black and white RGBA values (details below); Tailwind `shadow-*`; image scrims and spotlight mask | Shared neutral shadow/scrim tokens where reused; intentional image-specific opacity retained as CSS variables |
| Borders / focus | Neutral, black/white alpha, red state borders, blue focus rings; Tailwind `border-*`, `ring-*`, `outline-*` | `--border-subtle`, `--border-default`, `--border-strong`, `--focus-ring`, plus state borders |

## Literal colour values and locations

`Occurrences` counts source occurrences. Multiple locations in one component are grouped by component; the search output was line-based before any edits.

| Original value | Occurrences | Location(s) | Classification / mapping |
| --- | ---: | --- | --- |
| `#407cf9` | 72 | globals, app page, auth pages, AuthPage, FAQ, FeatureShowcase, Footer, Hero, HowItWorks cards, InterviewDemoCard, Pricing, Testimonials, TrustedByCarousel, Button, InlineIcon, Input, Navbar | Core Ace blue → `--brand-primary` |
| `#2563EB` | 24 | app page, forgot-password, AuthPage, FAQ, FeatureShowcase, Footer, HowItWorks cards, logo, Pricing, TrustedByCarousel, Navbar | Ace logo blue → `--brand-logo` |
| `#172B4D` | 1 | Logo | Ace wordmark ink → `--brand-ink` |
| `#67D6F5` | 2 | Logo, HowItWorks ProgressCard | Ace mark highlight → `--brand-highlight` |
| `#d4d4d4` | 3 | FeatureShowcase, HowItWorks FeedbackCard | Neutral 300 → `--surface-page` |
| `#7c5cff`, `#8bb8ff`, `#a9c8ff`, `#2459c7` | 4 total | Hero, InterviewDemoCard, Pricing, Testimonials | Violet and blue tints → accent/tint tokens |
| `#f59e0b`, `#f43f5e`, `#38bdf8`, `#10b981` | 9 total | Hero, FeatureShowcase, FAQ, HowItWorks index, Testimonials, TrustedByCarousel | Amber, rose, sky, and emerald status/accent values; kept semantically distinct |
| `#15803d`, `#166534`, `#525252`, `#737373`, `#171717` | 6 | globals | Score card foreground and status values → score/status tokens |
| `#4285F4`, `#34A853`, `#FBBC05`, `#EA4335` | 4 | AuthPage | Google logo brand artwork → four dedicated Google mark variables |
| `#fff`, `#ffffff`, `#fafafa`, `#d9d9da`, `#cfcfd1` | 12 | UserAvatar, globals, TrustedByCarousel, Button | Neutral white and button surface/border values → surface/button tokens; avatar stays white |
| `#fff1f2`, `#ffe4e6`, `#e11d48`, `#9f1239` | 4 | Button | Error button gradient and text → status error tokens |
| `#e5e5e5` | 1 | HowItWorks FeedbackCard | Neutral chart track → `--border-default` |
| `#ace` | 2 | ClosingCTA | SVG mask foreground/background keywords; preserved as mask control values, not theme colours |
| `#000`, `#666` | 5 | unused starter SVGs in `public/` | Starter artwork, not application UI |
| TrustedBy artwork values listed in the summary | 34 | TrustedByCarousel | Partner-brand/decorative card identity, intentionally not consolidated into Ace brand |
| `rgb(255 255 255 / .55/.7/.8)` | 3 | globals | Score-card surface alphas → score surface tokens |
| `rgb(0 0 0 / .18/.08)` | 2 | globals | Score-card shadows/dividers → shadow/divider tokens |
| `rgb(23 23 23 / .1)` | 1 | globals | Score-card track → score track token |
| `rgb(34 197 94 / .12/.15)` | 2 | globals | Score-card positive state → success soft-surface tokens |
| `rgba(0,0,0,.05/.07/.08/.10/.12/.16/.18/.22/.24/.25/.3/.35/.42/.55)` | 19 | TrustedByCarousel, Pricing, InterviewDemoCard, FeatureShowcase, Testimonials, Navbar, ClosingCTA | Neutral shadow, overlay and scrim variants; values are maintained as opacity relationships in shared effect tokens or documented local overlays |
| `rgba(255,255,255,.1/.24/.25/.35/.45/.65/.8/.88/1)` | 11 | Hero, Pricing, TrustedByCarousel, InterviewDemoCard, Button, InlineIcon | White surface/edge/highlight opacity relationships; semantic surface/effect tokens |
| `rgba(248,113,113,.5)`, `rgba(239,68,68,.35)` | 2 | InterviewDemoCard | Error state glow → error effect tokens |
| `rgba(64,124,249,ALPHA)`, `rgba(16,185,129,ALPHA)`, `rgba(245,158,11,ALPHA)` | 3 | HowItWorks FeedbackCard | Dynamic score highlight colors → brand/success/warning variables |
| `rgba(20,20,20,.8)`, `rgba(23,23,23,.78)`, `rgba(255,255,255,.88)` | 3 | TrustedByCarousel | Dither and hover label treatment → artwork-local effects |
| `color-mix(in oklab, var(--brand) …)` | 4 | Button, InlineIcon, Navbar | Derived button/icon edges and hover colour → preserve relationships via `--brand` mapped to `--brand-primary` |
| `color-mix(in srgb, var(--brand) …)` | 3 | Button | Brand-derived button effects → preserve relationship |
| `color-mix(in srgb, var(--accent) …)` | 1 | InterviewDemoCard | Scorecard-derived SVG gradient → scorecard brand variable |
| `oklch(1 0 0)`, `oklch(.985 0 0)`, `oklch(.977 .013 236.62)` | 13 | globals | White and foreground variants in light/dark compatibility roles → surface/foreground roles |
| `oklch(.145 0 0)`, `oklch(.205 0 0)`, `oklch(.269 0 0)`, `oklch(.371 0 0)`, `oklch(.439 0 0)`, `oklch(.556 0 0)`, `oklch(.708 0 0)`, `oklch(.87 0 0)`, `oklch(.922 0 0)`, `oklch(.97 0 0)` | 35 | globals | Neutral foreground, muted, border, chart and input roles; duplicate values consolidate to matching neutral semantic tokens |
| `oklch(.21 .006 285.885)`, `oklch(.274 .006 286.033)` | 2 | globals | Secondary neutral foregrounds → text/surface roles |
| `oklch(.5 .134 242.749)`, `oklch(.443 .11 240.79)`, `oklch(.588 .158 241.966)`, `oklch(.685 .169 237.323)`, `oklch(.293 .066 243.157)` | 5 | globals | Existing blue primary variants → brand variables while preserving dark/light distinction |
| `oklch(.577 .245 27.325)`, `oklch(.704 .191 22.216)` | 2 | globals | Destructive states → status error variables |
| `oklch(1 0 0 / 10%)`, `oklch(1 0 0 / 15%)` | 3 | globals | Dark-mode border/input alpha values → matching border/input roles |

## Tailwind colour utility inventory

The utility scan found 93 distinct color-bearing Tailwind utilities. To retain exact occurrence locations without duplicating every JSX line, the following table groups them by family and component; class opacity suffixes are preserved.

Full unique utility spellings from the scan:

```text
bg-blue-100, bg-blue-50, bg-blue-600
bg-emerald-100, bg-emerald-400, bg-emerald-500, bg-green-500
bg-neutral-100, bg-neutral-200, bg-neutral-300, bg-neutral-400, bg-neutral-500, bg-neutral-700, bg-neutral-900, bg-neutral-900/5, bg-neutral-950, bg-neutral-950/45, bg-neutral-950/50
bg-red-100, bg-red-200, bg-red-400, bg-red-500, bg-red-500/25, bg-red-500/40
bg-transparent, bg-white, bg-white/5, bg-white/10, bg-white/15, bg-white/20, bg-white/25, bg-white/30, bg-white/55, bg-white/60, bg-white/65, bg-white/70, bg-white/75, bg-white/80, bg-white/85, bg-white/90, bg-white/95
border-black/5, border-black/8, border-black/10, border-black/[0.07]
border-blue-100/80, border-neutral-100, border-neutral-200, border-neutral-300/70, border-neutral-400, border-neutral-400/40, border-neutral-400/50, border-neutral-500/15, border-neutral-500/25
border-red-300/80, border-red-500, border-red-500/60, border-red-600/30, border-transparent
border-white, border-white/10, border-white/20, border-white/25, border-white/30, border-white/55, border-white/60, border-white/65, border-white/70, border-white/80, border-white/90
from-amber-300, from-black, from-blue-50, from-neutral-200, from-neutral-400, from-neutral-900/10, from-neutral-950/60, from-neutral-950/65, from-neutral-950/82, from-neutral-950/90, from-transparent, from-white
outline-sky-600
ring-black, ring-neutral-200, ring-neutral-900, ring-white, ring-offset-neutral-200, ring-offset-neutral-900
text-blue-700, text-emerald-600, text-emerald-700, text-emerald-800, text-green-700
text-neutral-400, text-neutral-500, text-neutral-600, text-neutral-700, text-neutral-800, text-neutral-900, text-neutral-950
text-red-500, text-red-700, text-sky-300, text-white, to-orange-400
to-blue-100/70, to-neutral-300, to-neutral-900/10, to-neutral-950/10, to-neutral-950/15, to-neutral-950/5, to-neutral-950/55, to-transparent
via-black, via-neutral-200, via-neutral-300/65, via-neutral-950/5, via-neutral-950/62, via-neutral-950/68, via-transparent, via-white
```

File locations for each utility family are listed below. Opacity modifiers preserve each utility's existing base color and alpha.

| Utility family and original values | Locations |
| --- | --- |
| `neutral-100`, `neutral-200`, `neutral-300`, `neutral-400`, `neutral-500`, `neutral-600`, `neutral-700`, `neutral-800`, `neutral-900`, `neutral-950` (including `/5`, `/10`, `/15`, `/25`, `/50`) | `app/page.tsx`; `app/layout.tsx`; `app/(auth)/_layout.tsx`; `app/(auth)/forgot-password/page.tsx`; `components/auth-page.tsx`; `ClosingCTA.tsx`; `FAQ.tsx`; `FeatureShowcase.tsx`; `Footer.tsx`; `hero.tsx`; `how-it-works/*`; `InterviewDemoCard.tsx`; `Pricing.tsx`; `Testimonials.tsx`; `TrustedByCarousel.tsx`; `ui/input.tsx`; `ui/navbar.tsx` |
| `white` and alpha variants; `black` and alpha variants; `transparent` | Hero, CTA, FeatureShowcase, all HowItWorks cards, InterviewDemoCard, Pricing, Testimonials, TrustedByCarousel, Button, InlineIcon, Input, Navbar |
| `blue-50`, `blue-100`, `blue-600`, `blue-700` | FeatureShowcase, FeedbackCard, InterviewDemoCard, Navbar |
| `emerald-100`, `emerald-400`, `emerald-500`, `emerald-600`, `emerald-700`, `emerald-800`; `green-500`, `green-700` | FeatureShowcase, HowItWorks cards, InterviewDemoCard, Pricing |
| `red-100`, `red-200`, `red-300`, `red-400`, `red-500`, `red-600`, `red-700` | InterviewDemoCard, InterviewCard, Input |
| `sky-300`, `sky-600`; `amber-300`; `orange-400` | ClosingCTA, Navbar, UserAvatar |
| `from-*`, `via-*`, `to-*`, gradient utilities including arbitrary gradients | Hero, CTA, FeatureShowcase, HowItWorks cards, InterviewDemoCard, Pricing, Testimonials, TrustedByCarousel, Button |
| `ring-*`, `outline-*`, `border-*`, `shadow-*`, `fill-*`, `stroke-*`, `accent-*` | FAQ, Hero, CTA, FeatureShowcase, HowItWorks cards, InterviewDemoCard, Pricing, Testimonials, TrustedByCarousel, UI primitives |

Utilities from Tailwind's built-in palette remain valid Tailwind API values; the app's shared page, text, brand, control, focus, and status roles are exposed as semantic tokens. Decorative gradients and company marks are kept independent where their original meaning depends on a specific external brand.

## Original-to-token mapping

| Original | Token |
| --- | --- |
| `#407cf9`, `color-mix(...var(--brand)...)`, primary focus rings | `--brand-primary` / Tailwind `brand` |
| `#2563EB` | `--brand-logo` / Tailwind `brand-logo` |
| `#172B4D` | `--brand-ink` / Tailwind `brand-ink` |
| `#67D6F5` | `--brand-highlight` / Tailwind `brand-highlight` |
| `#d4d4d4`, neutral-300 page utility | `--surface-page` / Tailwind `page` |
| Repeated white card and transparent-white overlays | `--surface-white` with existing opacity modifiers |
| Neutral text classes used for common roles | `--text-primary`, `--text-secondary`, `--text-muted` |
| Neutral border classes used for common roles | `--border-subtle`, `--border-default`, `--border-strong` |
| Red/rose destructive controls | `--status-error`, `--status-error-soft`, `--status-error-strong` |
| Emerald/green success status | `--status-success`, `--status-success-soft`, `--status-success-strong` |
| Amber/orange warning and violet/sky/rose accents | `--status-warning`, `--accent-violet`, `--status-info`, `--accent-rose` |
| Reused dark overlays and shadows | `--effect-scrim-*`, `--shadow-*` |

Tailwind built-in shade utilities and one-off partner artwork are not discarded; the buyer-editable theme is mapped at the semantic layer, while original distinctions are retained. The unused `public/{file,globe,next,vercel,window}.svg` files remain unchanged.
