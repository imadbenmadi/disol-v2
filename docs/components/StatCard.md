# StatCard

A single KPI at the top of a dashboard: label, value, change and comparison.

- Consumer provides pre-formatted `value` and `delta` strings (formatting and currency are the app's job), optional `caption` ("vs last month") and `icon`.
- The arrow follows the sign of `delta`; the colour follows `intent`. When down is good (costs, overdue count, churn), set `intent="positive"` so a drop shows in `success`, not `danger`.
- 3–4 per row on desktop; never more than 6 on one screen. Numbers use tabular figures.
