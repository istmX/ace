# Ace UI design reference

Use this file as the visual source of truth when extending the landing page and its UI-only sign-in and sign-up screens. The reusable workflow is in [ace-design-skill/SKILL.md](ace-design-skill/SKILL.md).

## Colours

| Use | Value |
| --- | --- |
| Main page background | Tailwind `neutral-300` (`#d4d4d4`) |
| Main text on light surfaces | Tailwind `neutral-900` |
| Supporting text on light surfaces | Tailwind `neutral-700` |
| Primary brand blue | `#407cf9` |
| Logo blue | `#2563EB` |
| Logo wordmark ink | `#172B4D` |
| Logo highlight | `#67D6F5` |
| Dark surface, where needed | `#0e0b1a` |

Keep page backgrounds neutral 300 by default. Use the brand blue for primary actions and small accents. Use neutral text colours on light backgrounds; reserve white text for dark surfaces or the primary button's contrast.

## Typography

The font variables are set in `app/layout.tsx`:

| Role | Font | Variable / utility |
| --- | --- | --- |
| Headings, hero display, and wordmark | Geologica | `--font-display` / `font-display` |
| Body copy, labels, buttons, and form values | Outfit | `--font-mono` / `font-mono` |

Use `font-display` for headings and the logo wordmark. Use `font-mono` for the remaining page copy and controls. Keep the copy readable and sentence case.

## Buttons

Use `components/ui/button.tsx` for actions instead of adding one-off button styles.

- Primary: blue vertical gradient derived from `color` (default `#407cf9`), white label, inset highlight, and darker brand border.
- Secondary: white gradient, dark label, and light neutral border.
- Outline: transparent surface with brand-coloured label and border.
- Ghost: transparent until hover.
- Sizes: `sm` (36 px), `md` (48 px), `lg` (72 px).
- Set `width="full"` for full-width form actions and `color` to change the primary brand colour.
- Keep Google and GitHub provider buttons white with dark mono labels. Use Google's four-colour mark and the near-black GitHub mark.

## Inputs

Use `components/ui/input.tsx`. The light tone is for the neutral 300 auth screens: white-tinted input surface, neutral border, neutral label/value, and a blue focus border. Auth input values use `font-mono`.

## Layout and interaction

- The landing page uses a neutral 300 canvas with the navigation and hero as its main content.
- Sign-in and sign-up use a responsive two-panel layout: brand copy on the left, controls on the right, with a neutral divider between panels.
- Keep the Ace logo clickable to return to `/`.
- Keep layouts responsive and preserve visible keyboard focus styles.
- Use motion sparingly and respect reduced-motion preferences where animations are present.
- The sign-in and sign-up forms are presentation UI only. Do not add auth, API, database, or submission behaviour without a new product requirement.

## Auth page copy

- Sign-up support: `Build confidence, practice your answers, and take the next step in your career.`
- Closing line: `Practice with purpose. Show up with confidence.`
- Account prompt: `Already have an account? Sign in`
