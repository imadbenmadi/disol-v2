Disol designs, builds and runs software for businesses: websites, apps, ERPs and, next, cloud services for the Algerian market. The design has to prove that before anyone reads a word. **Dark, precise, technical, and lit by the Disol blue.** The client platform (marketing site, service catalogue, lead and contact flows, emails) comes first; the ERP uses the same system later.

## Principles

1. **Show the machinery.** Pipelines, live status, run logs, region names and durations in mono. Real operational detail is the proof, not adjectives.
2. **One light source.** The page is near-black. The Disol blue is the only thing that glows: the primary CTA, the live connector, the featured card. Never more than two glowing things on a screen.
3. **Calm where people work.** Marketing can be dramatic. Forms, dashboards and tables stay quiet, dense and legible.
4. **Bilingual from day one.** English and Arabic share every component; RTL is not a later fix.

## Voice and content

- **Two registers.** Headlines in Geist are confident and short, with one italic serif accent phrase: "Infrastructure, *handled.*" Technical labels in Geist Mono are lowercase and terse, like CLI output: `now onboarding / algiers region`, `reply within one business day`, `134 ms`.
- **Say what happens, with numbers.** "We reply within one business day", "Daily off-site backups", "99.9% uptime SLA". Never "world-class" or "cutting-edge". Only publish a number that operations can actually meet.
- **Sentence case** for titles and buttons. Lowercase only in mono labels. No exclamation marks, no emoji.
- **"We" is Disol, "you" is the client.** Buttons are verbs: "Start a project", "Choose business", "Send request".
- **Money:** currency code first, "DZD 4,500 / month". Prices are "from" a number, or "on quote"; never blank. Dates: "12 Oct 2026". IDs in mono: `DSL-2026-0418`, `INV-2026-00142`.
- **Errors say how to fix it:** "Enter an email like name@company.dz".
- The sample copy in the previews (services, prices, regions) is illustrative. Replace it with the real catalogue before launch.

## Colour

- **Dark is the default theme** (`data-theme="dark"` on `<html>`). Light exists for long-form reading, emails and clients who need it; every token has both values.
- **Ground:** `bg` #07090c page, `surface` cards, `surface-raised` popovers and floating canvases, `glass` for translucent panels over the hero (with backdrop blur), and `border` hairlines.
- **The Disol blue:** `brand-500` #1692c8 is the logo blue; use it for the logo and big brand moments. In the dark theme the action colour is the luminous `brand-400` #3fb2e6 (`primary`) with dark `on-primary` text. In light it's `brand-600` #0077b3 with white. White text on #1692c8 is 3.5:1, so never use it for body text.
- **Glow:** the `glow` colour and the `shadow-glow` shadow are reserved for primary CTA hover, live connectors, the featured card and the hero bloom. Never put glow behind text.
- **Status:** `success` (operational, paid, done), `warning` (waiting, degraded, due soon), `danger` (failed, outage, overdue). Always pair status colour with a word or icon.
- **Charts:** `chart-1` to `chart-5`, in order, with labelled series.

## Typography

- **Geist** (`--font-sans`) for everything people read. A precise grotesk from the developer-tools world.
- **Instrument Serif italic** (`--font-serif`, the `display-accent` style) for one accent phrase per marketing headline. Never in product UI, never a full sentence.
- **Geist Mono** (`--font-mono`, the `label-mono` and `code` styles) for technical labels, IDs, logs, prices' "from", status and fine print.
- **IBM Plex Sans Arabic** for Arabic, in the same stack, so mixed text works. Arabic headlines use `ar-display` or `ar-h1` with no serif accent; emphasise in `primary` instead.
- **Scale:** marketing `display-xl` 64 / `display` 44; product `h1` 30, `h2` 22, `h3` 17, `body` 14, `small` 13, `caption` 12. Use tabular figures for every column of numbers.

## Layout, space and shape

- 4px grid (`space-*`). Content max width is `content-max` (1200px). Marketing sections are `space-24` apart on desktop and `space-16` on mobile.
- **Dot grid** (`ds-grid-bg`, 24px pitch) behind hero and canvas areas only. Node positions in FlowCanvas snap to it.
- **Corners:** `radius-md` controls, `radius-lg` cards, `radius-xl` modals, pricing cards and floating canvases, `radius-full` marketing CTAs (`pill`), status pills, badges and avatars.
- **Depth in dark:** a 1px inner top highlight (in `shadow-sm` to `shadow-lg`) plus deep shadows. Borders before shadows inside the product.
- **Focus:** a solid 2px `focus-ring` with a 2px offset on everything interactive. Never remove it.
- **RTL:** components use logical properties. Set `dir="rtl"` and `lang="ar"` on `<html>`. Code, IDs and the FlowCanvas stay LTR.
- **Motion:** 150ms for state changes and 200ms for overlays. Only live things move (status pulse, live connector dash). Everything respects `prefers-reduced-motion`.

## Logo

- Assets: `disol-app-icon.jpg` (white DS mark on the blue tile), plus `disol-mark-white.png` and `disol-mark-black.png` (mark only). See Assets → Logos.
- **Use the files exactly as they are:** never redraw, crop, recolour, round the corners, rotate, outline or add effects. Don't rebuild the mark from its quarter-circles as a pattern.
- The app icon goes in the navbar, sidebar, emails, favicon and social avatars. Use the white mark on `brand-500`, `brand-900` or photography, and the black mark on light surfaces where colour isn't available.
- Clear space: half the mark's width on all sides. The name next to it is "Disol" in Geist 600.
- The inline SVG in the old `Navbar.jsx` is **not** the logo: its arcs are skewed and spaced differently from the official mark. Don't reuse it.

## Iconography

- The `Icon` component covers what the components need, on Lucide geometry (24px grid, 2px round strokes). For anything else use Lucide directly (`lucide-react`). Drop `react-icons`.
- 16px in buttons and inputs, 18px in navigation, 20px in service and choice cards. Icons take `currentColor`.

## Components and patterns

`window.Disol` (React 18) has these components:

- **Marketing:** Navbar, SectionHeading, Tag, StatusPill, ServiceCard, PricingCard.
- **Forms:** TextField, Textarea, Select, Checkbox, Switch, ChoiceGroup, Stepper.
- **Infrastructure:** FlowCanvas, RunLog, CodeBlock.
- **Data:** DataTable, StatCard, Badge, Avatar, Card, Tabs, Pagination.
- **Feedback:** Alert, Toast, Modal, EmptyState.
- **Navigation:** SidebarNav.
- **Foundations:** Icon.

The **patterns** show how to compose them: Hero, Service catalogue, Lead form, Contact form and Email. Fetching, routing, validation rules, analytics and i18n are the app's job. Each component's guidelines say what you provide.

## What came from the codebase

From `imadbenmadi/DISOL@61acf3b`: the logo files, the brand blue `brand-500` (`blue_v`), its hover pair `brand-600`/`brand-700`, and the status and chart hues. Everything else was designed new for the rebuild. The dark infrastructure direction follows the owner's brief.
