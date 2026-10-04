# SidebarNav

The app's primary navigation: logo, grouped sections, current user. Fixed `sidebar-width` (256px) on desktop.

- Consumer provides `brand` (the app icon `disol-app-icon.jpg`, square and unmodified, plus the product name), `sections` (`title`, `items` with `value`, `label`, `icon`, optional `href` and `badge`), the current `value`, `onNavigate` and a `footer` (Avatar + name + role).
- Active item uses `primary-soft` / `primary-soft-text` and `aria-current="page"`.
- Section titles are uppercase `overline` in Latin; in Arabic keep them in normal case.
- Below `bp-md` (768px) render it in a drawer opened from the top bar.
