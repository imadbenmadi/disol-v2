# Select

Pick one option from a short list (up to ~15). Native `<select>` underneath, so keyboard, mobile pickers and screen readers work for free.

- Consumer provides `label`, `options` (strings or `{value,label,disabled}`), and `value`/`onChange`.
- Use `placeholder` when there is no sensible default; it renders as a disabled first option.
- More than ~15 options or searching needed: use a combobox (not in this system yet).
- Same `hint`, `error` and `size` behaviour as TextField.
