# Theming Ace

Ace uses CSS-first theming with Tailwind CSS v4. The default values in `app/globals.css` reproduce the existing Ace look. Edit the variables under `:root` to customise the identity; shared components consume these variables through semantic utilities and component styles.

## Main theme values

| Variable | Controls |
| --- | --- |
| `--brand-primary`, `--brand-deep`, `--brand-emphasis` | Main actions, focus rings, brand accents, and their darker text/border values |
| `--brand-logo`, `--brand-ink`, `--brand-highlight`, `--brand-tint`, `--brand-tint-strong` | Ace mark and wordmark colours, and chart/animation tints |
| `--surface-page`, `--surface-white`, `--surface-soft`, `--surface-dark` | Page canvas, white card surfaces, soft neutral surfaces, and dark surfaces |
| `--text-primary`, `--text-secondary`, `--text-muted` | Main, supporting, and quiet text |
| `--border-subtle`, `--border-default`, `--border-strong`, `--focus-ring` | Dividers, controls, outlines, and keyboard focus |
| `--status-success-*`, `--status-warning*`, `--status-error-*`, `--status-info*` | Independent status colours and their lighter/darker states |
| `--accent-violet`, `--accent-rose`, `--accent-amber`, `--accent-orange-light` | Existing decorative icon accents |
| `--button-*` | Secondary-button surfaces and borders |
| `--effect-black-*`, `--effect-white-*`, `--scrim-*`, `--shadow-*` | Overlay opacity, shadows, and highlight effects |
| `--radius` | Base radius, extended through Tailwind `--radius-*` theme values |
| `--font-display`, `--font-mono` | Loaded in `app/layout.tsx`; headings use Geologica and UI/body uses Outfit |

Neutral shade aliases used by Tailwind utilities are also mapped in `@theme inline` to the same values, so remaining `neutral-*` classes follow the page and text variables. Status utility shades similarly map to status variables. Tailwind's default palette is not disabled.

## Change the Ace brand colour

Edit the central values, keeping separate values when the logo and interactive brand need different contrast:

```css
:root {
  --brand-primary: #407cf9;
  --brand-deep: #2563eb;
  --brand-emphasis: #1d4ed8;
  --focus-ring: var(--brand-primary);
}
```

The `brand`, `brand-deep`, `brand-emphasis`, `brand-logo`, `focus`, and related utilities resolve from these properties. Button and icon gradients derive their lighter/darker edges from the supplied brand value, preserving their existing animation and shape.

## Add an alternative theme

No theme switcher is included. To prepare a buyer-defined theme, add an attribute selector in `app/globals.css` and set that attribute on the root `<html>` element when the buyer wants that theme active:

```css
:root[data-theme="my-brand"] {
  --brand-primary: <your-primary-css-colour>;
  --brand-deep: <your-darker-brand-colour>;
  --brand-logo: <your-logo-colour>;
  --surface-page: <your-page-background>;
  --text-primary: <your-heading-colour>;
}
```

Replace each placeholder with a valid CSS color from the buyer's own palette. Add optional overrides for surface, status, border, shadow, or typography values in the same selector. Components respond to the variables without per-component edits.

## Surfaces, text, and controls

Use the semantic utilities `bg-page`, `bg-surface`, `bg-surface-soft`, `text-copy`, `text-body`, `text-subtle`, `border-divider`, `border-outline`, and `ring-focus` for new UI. Existing neutral utilities are aliases to the mapped neutral values. The `--background`, `--foreground`, `--primary`, `--accent`, input, border, chart, and sidebar compatibility roles remain CSS custom properties in this same file.

## Typography, corners, and shadows

Font variables are supplied by `next/font` in `app/layout.tsx`; keep `font-display` and `font-mono` roles when changing font families. The existing `--radius` drives the Tailwind radius scale. Shared shadow color/opacity values live in `--effect-*` variables, and reusable `shadow-card` / `shadow-card-raised` utilities are available for future surfaces.

## Artwork exceptions

Google's mark keeps four dedicated Google color variables. The Trusted By carousel has decorative partner artwork whose original hues represent external company marks; those values intentionally remain local to `components/TrustedByCarousel.tsx` and do not change when Ace is rebranded. The hero/interview landscape is a photographic asset, not a theme color. Scrims and neutral effects over it remain theme-controlled.
