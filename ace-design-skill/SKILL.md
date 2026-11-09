---
name: ace-design-skill
description: Apply Ace's established visual system when creating or editing frontend UI in this repository. Use for styling, typography, colours, controls, layout, and interaction details; do not use this as a feature or route specification.
---

# Ace visual system

Use the repository's `DESIGN.md` as the concise token reference and inspect the actual components before changing them. This skill documents reusable visual rules only. It deliberately does not enumerate routes or prescribe the contents or behaviour of individual pages.

## Colour

- Main canvas: Tailwind `neutral-300`, `#d4d4d4`.
- Main text on light surfaces: `neutral-900`; supporting copy: `neutral-700`; muted copy: `neutral-600`.
- Primary action blue: `#407cf9`.
- Logo mark blue: `#2563EB`; wordmark ink: `#172B4D`; cyan mark detail: `#67D6F5`.
- Dark surfaces may use `#0e0b1a` where the composition needs one.
- Keep backgrounds neutral 300 by default, with restrained brand-blue accents. On light surfaces use dark neutral text. White type is appropriate for the blue primary button or a genuinely dark surface.

## Typography

Font declarations live in `app/layout.tsx`:

- `font-display` (`--font-display`, Geologica): headings and display text.
- `font-mono` (`--font-mono`, Outfit): body copy, labels, buttons, and form values. Despite the utility name, this is Outfit, not a coding monospace font.

Use `font-display` for headings, display text, and the logo wordmark. Use `font-mono` for other interface text. Keep type sentence case and readable, with deliberate tracking and line height rather than defaulting to all caps.

## Buttons

Use `components/ui/button.tsx` for actions. Keep its variants, sizing, focus treatment, and motion consistent; prefer its props over recreating its CSS.

- Props: `variant` is `primary | secondary | outline | ghost`; `size` is `sm | md | lg`; `color` accepts a CSS colour and defaults to `#407cf9`; `width` accepts a pixel number, CSS width string, or `full`.
- Base: inline-flex, centered, `font-mono`, medium weight, tight tracking, no selection, pointer cursor, and a visible brand-coloured keyboard focus outline.
- Primary: white text; vertical gradient from a lighter mix of the supplied brand colour into the brand colour; darker mixed border; inset white highlight; slight brightness increase on hover.
- Secondary: dark neutral text; white-to-`#fafafa` vertical gradient; light neutral border (`#d9d9da`) and subtle inset white edge; border brightens on hover.
- Outline: transparent face, brand text and border, subtle inset brand shadow and low-opacity brand hover wash.
- Ghost: transparent face and border, brand text, low-opacity brand hover wash.
- Sizes: `sm` is 36 px high with 16 px horizontal padding, 14 px text, 12 px radius, 2 px border; `md` is 48 px high with 24 px padding, 18 px text, 16 px radius, 3 px border; `lg` is 72 px high with 40 px padding, 30 px text, 24 px radius, 3 px border.
- The Motion button lifts 1 px on hover and moves down 2 px with a slight scale reduction on press; use the existing spring. Disabled buttons do not animate and have reduced opacity. Preserve reduced-motion transition handling.
- Full-width forms should use `width="full"`. Keep social-provider buttons on the secondary white treatment with dark `font-mono` labels. Google uses its four-colour mark; GitHub uses the near-black Tabler brand mark.

## Inputs

Use `components/ui/input.tsx` rather than hand-rolling fields. Its API supports labels, helper text, errors, optional leading icons, right-side label content, focus colour, wrapper classes, and `dark` or `light` tones.

- Fields are 48 px high, rounded to 16 px, horizontally padded, and use a 12 px icon gap.
- The light tone suits neutral canvases: white-tinted surface, `neutral-400` border, `neutral-900` value, `neutral-500` placeholder/icon, `neutral-700` label, and a brand-coloured focus border with a white focus surface.
- The dark tone uses a translucent white surface and border with white text; retain it for dark contexts.
- Password visibility controls and default icons come from Tabler. Preserve labels, `aria-invalid`, hint/error descriptions, and clear error styling.
- Use `font-mono` on form values and controls. Keep focus visible and ensure the label is connected to the input.

## Logo and inline icon treatment

- Use `components/logo.tsx` for the Ace identity. The mark is a 40-by-40 rounded blue tile (`#2563EB`) with a white open-A stroke and cyan check detail (`#67D6F5`). The wordmark is `ace.` in Geologica via `font-display`, bold, tightly tracked, and ink `#172B4D`, with a blue period.
- `Logo` shows its name by default; `showName={false}` retains only the mark. Preserve the component's sizing and class override props. Make a logo that serves as navigation keyboard accessible and link it to `/`.
- `components/ui/inline-icon.tsx` provides compact inline accent tiles. Default brand blue is `#407cf9`; it derives a lighter gradient, darker border, white foreground, and subtle inset highlight. Its short spring pop and hover rotate/scale are intentional; do not inflate it into a standalone card.

## Composition and interaction

- Prefer generous spacing, clear hierarchy, calm neutral surfaces, and blue reserved for primary emphasis.
- For split layouts, retain a clear brand/content column and a form/control column, separated by a subtle neutral border on wide screens. On narrow screens stack the sections and use a horizontal separator only when it helps clarify the grouping.
- Preserve responsive padding and widths, readable line lengths, visible keyboard focus, semantic elements, and adequate contrast.
- Use motion sparingly, keep it purposeful, and respect reduced-motion preferences.
- Keep presentation-only UI free of authentication, network, persistence, or submission logic unless a new product requirement explicitly calls for it.

## Working guidance

Before editing, read `DESIGN.md` and inspect the relevant existing component so implementation details stay aligned with the source. Prefer composing the shared components and tokens over adding near-duplicate styles. Keep this skill limited to visual guidance; place route requirements, page inventories, and page-specific content elsewhere.
