# Button

Triggers an action. One `primary` per view, for the thing the screen is for; everything else is `secondary` or `ghost`.

- **Variants:** `primary` (fill `primary`, text `on-primary`), `secondary` (surface + `border-strong`), `ghost` (toolbars, table row actions), `danger` (destructive, always behind a confirmation Modal).
- **Sizes:** `sm` 32px (tables, filters), `md` 40px (default), `lg` 48px (auth forms, marketing CTAs).
- **Copy:** verb first, sentence case, 1–3 words: "Create invoice", "Save changes". Never "Click here" or "OK".
- **Loading:** set `loading` while the request is in flight. It disables the button and keeps the width; don't swap the label.
- **Icon-only:** pass `icon` with no children **and** an `aria-label`.
- **Pill:** `pill` for marketing CTAs and the navbar CTA. In-product buttons keep `radius-md`.
- **Links:** pass `href` to render an `<a>` styled as a button for navigation.
- In the dark theme the primary fill is the luminous `brand-400` with dark `on-primary` text, and it glows on hover. Do not use `brand-500` for button fills: white on it is 3.5:1.
