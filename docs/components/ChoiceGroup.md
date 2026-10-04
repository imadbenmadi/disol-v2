# ChoiceGroup

Large selectable cards for the important choices in a lead or onboarding form: which service, which plan, budget range.

- Consumer provides `label`, `options` (`value`, `label`, `description`, `icon`), `value`/`onChange`, and `multiple` for checkboxes (value is then an array). `columns` fixes the grid; otherwise cards auto-fill at 200px.
- Selected cards get `primary` border, `primary-soft` fill and the glow. Use them for 2–8 options; more than that is a Select.
- Keyboard: arrow keys move within a radio group, Space toggles; focus ring on the card.
