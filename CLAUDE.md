# Disol design system — rules for Claude Code

This folder is the single source of truth for how every Disol product looks: the marketing site, the client platform, emails and the ERP. Read `docs/brand-book.md` before building any UI. Read `docs/components/<Name>.md` before using or porting a component.

## Hard rules

- **Tokens only.** Every colour, spacing, radius, shadow, font and z-index comes from `tokens/tokens.css` (CSS variables) or the Tailwind preset. No hex values, no raw px for spacing, no Tailwind default palette (`blue-600`, `gray-700`, …) in app code.
- **Theme by attribute.** `data-theme="dark"` (default) or `"light"` on `<html>`. Never use `dark:` variants: the variables already switch.
- **Logo:** use the files in `assets/logos/` exactly as they are. Never redraw, crop, recolour, round or rebuild the mark from shapes. Don't reuse the inline SVG from the old `Navbar.jsx`; it's distorted.
- **Fonts:** Geist (UI), Geist Mono (technical labels, IDs, logs), Instrument Serif italic (one accent phrase per marketing headline, never in product UI) and IBM Plex Sans Arabic (Arabic). They're self-hosted from `fonts/`, not loaded from Google Fonts.
- **Primary colour:** `--primary` for actions. Never white text on `--brand-500` (#1692c8) below 24px; it fails contrast.
- **One primary button per view.** Glow (`--shadow-glow`) on at most two elements per screen.
- **RTL:** use logical CSS properties (`margin-inline-start`, `padding-inline`, `inset-inline-end`, `text-align: start`). Set `dir="rtl"` and `lang="ar"` for Arabic. Code, IDs and diagrams stay LTR.
- **Accessibility:** visible label on every input, 2px `--focus-ring` outline on everything focusable, status never shown by colour alone, text contrast at least 4.5:1. Respect `prefers-reduced-motion`.
- **Copy:** sentence case, buttons start with a verb, mono labels lowercase, no emoji, no exclamation marks. Errors say how to fix the problem.

## Files

| Path | What |
|---|---|
| `tokens/tokens.json` | Source tokens (dark + light). Edit here, then regenerate `tokens.css` and the preset. |
| `tokens/tokens.css` | CSS variables, `@font-face` rules and `.text-<style>` type classes. Import once at the app entry. |
| `tailwind/disol.preset.cjs` | Tailwind preset mapping utilities to the variables. |
| `components/bundle.js`, `bundle.css`, `index.d.ts` | Reference React 18 implementation (`window.Disol`, plain JS) and its prop types. |
| `docs/brand-book.md` | Voice, colour, type, layout, logo and icon rules. |
| `docs/components/*.md` | When to use each component, what the consumer provides, do's and don'ts. |
| `docs/examples/*.html` | Open in a browser: live examples of every component and pattern (hero, service catalogue, lead form, contact form, email). |

## Using it in a React + Tailwind app

1. Import `disol-design-system/tokens/tokens.css` in the app entry (`main.jsx`/`main.tsx`).
2. In `tailwind.config.js`, add `presets: [require('./disol-design-system/tailwind/disol.preset.cjs')]`.
   - **Colours:** `bg-bg`, `bg-surface`, `bg-surface-raised`, `text-text`, `text-text-muted`, `bg-primary`, `text-on-primary`, `border-border`, `border-border-strong`.
   - **Spacing:** only the token steps. `p-4` is 16px, `gap-6` is 24px, `p-0.5` is 2px. Tailwind's default steps like `p-7` don't exist on purpose.
   - **Radius:** `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full`.
   - **Shadow:** `shadow-sm`, `shadow-lg`, `shadow-glow`.
   - **Type:** `text-body`, `text-h1`, `text-label-mono` (set the font with `font-mono`), `text-display-xl`.
   - **Breakpoints:** `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
3. **Components:** port each one from `components/bundle.js` to a typed TSX component in `src/components/ui/<Name>.tsx`, keeping the `ds-*` class names and `bundle.css`, or translating them to Tailwind utilities. Props must match `components/index.d.ts`. Keep the ARIA, keyboard and focus behaviour exactly as implemented.
4. Build pages by composing components the way the `docs/examples/*Pattern.html` files do.

## Changing the system

Change `tokens/tokens.json` first, then regenerate `tokens.css` and `disol.preset.cjs`. Never patch the generated files by hand. A new component gets a doc in `docs/components/`, an example in `docs/examples/`, and props added to `index.d.ts`. Check new colour pairs for contrast in both themes.
