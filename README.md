# Disol design system

Tokens, fonts, logos, React components and usage docs for every Disol product.

## Install in a repo

1. Copy this folder to the repo root as `disol-design-system/`.
2. Add one line to the repo's root `CLAUDE.md` (create it if it doesn't exist):

   ```
   All UI follows the Disol design system: read disol-design-system/CLAUDE.md before writing any frontend code.
   ```

3. Import `disol-design-system/tokens/tokens.css` in the app entry, and add the Tailwind preset (see `CLAUDE.md`).

Open `docs/examples/HeroPattern.html` in a browser to check that everything loads.

Fonts are licensed under the SIL Open Font License; see `fonts/LICENSE-*`.
