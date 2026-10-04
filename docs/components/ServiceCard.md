# ServiceCard

One service in the catalogue: icon, category tag, title, description, included features, starting price and CTA. It's built to scale to dozens of service types across Build, Cloud, Marketing and Media.

- Consumer provides `title`, `description`, `icon`, `category` (a lowercase Tag), optional `badge` (a Badge such as "New"), `features` (3–5 short lines), `price` (`amount`, `unit`, `prefix`, where `prefix: null` hides "from"), `action` (Button or link) and `href`.
- `featured` adds the primary border and glow. Use it on one card per grid.
- Grids: 3 columns at `bp-lg`, 2 at `bp-sm`, 1 below. Filter by category with Tabs above the grid.
- Prices are always "from" plus a unit, or "on quote". Never leave the price area empty in a grid.
