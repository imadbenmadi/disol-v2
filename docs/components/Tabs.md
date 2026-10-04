# Tabs

Switch between views of the same object (an invoice's Details / Payments / Activity), or filter a list by status.

- Consumer provides `items` (`value`, `label`, optional `count`, `icon`) and `value`/`onChange`, then renders the active panel.
- Arrow keys move between tabs (mirrored in RTL); only the active tab is in the tab order.
- 2–6 tabs. More than that is navigation: use the sidebar.
