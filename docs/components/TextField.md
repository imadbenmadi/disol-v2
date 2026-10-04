# TextField

Single-line text input with label, hint and error. Always give it a visible `label`; placeholders are examples, not labels.

- Consumer provides `label`, `value`/`onChange` (or `defaultValue`), and `error` text after validation.
- `error` sets `aria-invalid`, turns the border `danger` and replaces the hint. Write what to fix: "Enter an email like name@company.dz", not "Invalid input".
- `icon` adds a leading icon (search fields).
- `size="sm"` for filters and inline table editing.
- Mark required fields with `required`; mark optional ones in the label "(optional)" when most are required.
- Arabic: set `dir="rtl"` on the form or page; padding uses logical properties and flips automatically.
