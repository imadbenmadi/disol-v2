# Pagination

Moves through pages of a DataTable. Sits directly under the table, full width.

- Consumer provides 1-based `page`, `pageCount`, `onChange`, and `total` + `pageSize` for the "Showing 21–40 of 342" summary.
- Collapses long ranges with an ellipsis; first and last pages are always reachable.
- Fetching the page is the app's job; keep the page in the URL (`?page=3`) so it survives reloads and can be shared.
