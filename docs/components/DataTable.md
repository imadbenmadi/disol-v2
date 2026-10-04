# DataTable

Rows of records with optional selection: the core of every ERP screen (clients, invoices, projects, tickets).

- Consumer provides `columns` (`key`, `header`, `align`, `width`, `render`), `rows`, and `rowKey`. Sorting, filtering and fetching are the app's job; pair with Pagination below the table.
- Money and quantities: `align: 'end'` (tabular figures). IDs: render in `code` style.
- Selection is controlled: pass `selected` and `onSelectionChange`; show bulk actions above the table when something is selected.
- `dense` for screens with 20+ rows. Header is sticky inside a scroll container.
- Empty: pass `empty` (an EmptyState for a whole-page table).
- On mobile the table scrolls horizontally; for primary mobile flows, use a card list instead.
