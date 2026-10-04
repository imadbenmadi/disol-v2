# Email pattern

Every transactional and marketing email: lead confirmation, contact acknowledgement, invoice, service activated, password reset and newsletters. It uses one layout with a 560px card on a `surface-sunken` ground, in the light theme.

- **Light theme only.** Dark-mode email rendering is inconsistent across Gmail, Outlook and Apple Mail. Use the light token values as literal hex: `text` #0f1b26, `text-muted` #52606e, `border` #dde3ea, `surface-sunken` #eef1f5, `primary` #0077b3 with white text.
- **Build:** table layout, inline styles, no CSS variables, no web-font dependency (Geist falls back to system sans), images with width/height and alt. Host the logo PNG on your own domain. The preview's `/_blob/` URL only works inside this design system.
- **Structure:** logo row → mono reference Tag (request ID, invoice number) → one H1 sentence addressing the person by first name → one short paragraph → summary table → one pill CTA → mono footer saying why they got it.
- **One CTA per email.** Plain text alternative always. Arabic emails: set `dir="rtl"` on the outer table and swap `align` values.
- **Copy:** subject lines in sentence case, under 50 characters, no emoji: "We received your request", "Invoice INV-2026-00142 is ready".
- Marketing emails need an unsubscribe link in the footer.
