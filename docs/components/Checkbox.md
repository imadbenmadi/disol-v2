# Checkbox

Toggle an option that takes effect on submit, or select rows. For settings that apply instantly, use Switch.

- Consumer provides `label` (and optional `description`), `checked`/`onChange`.
- `indeterminate` for a "select all" whose children are partly selected (DataTable does this for you).
- Without a visible label, pass `aria-label`.
