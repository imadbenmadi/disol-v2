# Hero pattern

The marketing home hero: Navbar, a SectionHeading at `xl`, and a FlowCanvas with a RunLog floating on a glow, over the dot grid. It shows clients that Disol operates real infrastructure, not just designs pages.

- Composition only: Navbar + SectionHeading + FlowCanvas + RunLog + `ds-grid-bg` + one `ds-glow-bloom`.
- Left column is at most 520px; the canvas may bleed off the right edge. Below `bp-lg` stack the canvas under the text and drop the RunLog.
- Exactly one glow bloom, behind the canvas. Never put glow behind text.
- The FlowCanvas content must describe something Disol really does (lead → quote → provision → deploy). Update it as the services change.
