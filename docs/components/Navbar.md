# Navbar

The top bar of the marketing site and client platform: logo, primary links, status and CTAs.

- Consumer provides `brand` (the unmodified app icon `disol-app-icon.jpg` at 28px, square, plus "Disol"), `links` (`label`, `href`, `current`), and `actions` (StatusPill, a ghost "Sign in" Button, a primary pill "Start a project").
- Transparent over the hero, then switches to `glass` with a border once the page scrolls. Pass `solid` to force either state.
- At most 5 links. Below `bp-md` links and status hide; put them in a menu drawer.
- Never recolour, crop or round the logo.
