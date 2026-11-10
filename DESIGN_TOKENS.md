# Ace design tokens

The source of truth is `app/globals.css`. It uses Tailwind CSS v4 CSS-first `@theme inline` mappings from Tailwind utility namespaces to buyer-editable `:root` values. Component code should use semantic utilities or `var(--token)` for Motion, SVG, and inline styles.

## Semantic token groups

| Group | Token names | Purpose |
| --- | --- | --- |
| Brand | `--brand-primary`, `--brand-deep`, `--brand-emphasis`, `--brand-logo`, `--brand-ink`, `--brand-highlight`, `--brand-tint`, `--brand-tint-strong`, `--brand-wash`, `--brand-wash-strong` | Ace action colour, logo identity, contrast shades, and existing blue tints |
| Page and surfaces | `--surface-page`, `--surface-white`, `--surface-soft`, `--surface-dark`, `--button-surface-top`, `--button-surface-bottom` | Canvas, card, soft, dark, and button backgrounds |
| Text | `--text-primary`, `--text-secondary`, `--text-muted` | Main copy, supporting copy, and quiet labels |
| Borders and focus | `--border-subtle`, `--border-default`, `--border-strong`, `--button-border`, `--button-border-hover`, `--focus-ring` | Dividers, control borders, and focus indication |
| Status | `--status-success*`, `--status-warning*`, `--status-error*`, `--status-info*` | Semantic success, warning, error, and informational states; kept independent from Ace blue |
| Accents | `--accent-violet`, `--accent-rose`, `--accent-amber`, `--accent-orange-light` | Existing decorative accents in the hero and supporting sections |
| External mark | `--google-blue`, `--google-green`, `--google-yellow`, `--google-red` | Google sign-in logo artwork |
| Neutral palette | `--palette-neutral-*`, `--pure-black` | Exact neutral shades still used by existing component details and Tailwind aliases |
| Effects | `--effect-black-*`, `--effect-white-*`, `--effect-error-*`, `--scrim-*`, `--shadow-neutral`, `--shadow-card`, `--shadow-card-raised` | Opacity relationships, image overlays, shadow color, and reusable shadow presets |
| Illustration | `--artwork-grid-dot`, `--artwork-dither-ink`, `--artwork-hover-label*` | Neutral texture and logo-card label effects |
| Score card | `--score-card-*` | Interview demo scorecard surface, text, divider, track, and positive-state styling |
| Framework compatibility roles | `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--chart-*`, `--sidebar-*` | Existing utilities and optional chart/sidebar compatibility |
| Type and shape | `--font-display`, `--font-mono`, `--font-sans`, `--radius`, Tailwind `--font-*`, `--radius-*` | Typography roles and radius scale |

## Tailwind utility mapping

`@theme inline` exposes semantic classes: `bg-brand`, `text-brand`, `bg-page`, `bg-surface`, `bg-surface-soft`, `text-copy`, `text-body`, `text-subtle`, `border-divider`, `border-outline`, `ring-focus`, `bg-success`, `bg-warning`, `bg-error`, `bg-info`, and accent utilities. The existing `neutral-*`, red, emerald, green, blue, amber, orange, and sky shades used in the app are aliases to central variables so opacity modifiers and gradients continue to work.

Typography and shape use Tailwind v4 namespaces (`--font-*`, `--radius-*`). Shadow presets use `--shadow-*`. No JavaScript Tailwind configuration or deprecated `theme()` calls are required.

## Rules for additions

1. Reuse the closest semantic token before adding a new one.
2. Keep status colours separate from the brand.
3. Preserve intentional light/dark opacity relationships using `--effect-*` variables.
4. Keep third-party logo colors in their artwork definitions.
5. For SVG or Motion colors, use `var(--token)` instead of repeating a literal.
6. Add any new central value and its rationale to `COLOR_AUDIT.md` and this reference.
