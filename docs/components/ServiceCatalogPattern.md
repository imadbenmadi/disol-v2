# Service catalogue pattern

The services page: a SectionHeading, category Tabs with counts, and a responsive grid of ServiceCards. It's built for many service types, so the catalogue grows by adding data, not layouts.

- Categories (example): build, cloud, marketing, media. Each service belongs to one; "All" shows everything.
- Keep the category and filter in the URL (`/services?c=cloud`) so marketing can link straight to a filtered view.
- One `featured` card per visible grid. Sort by what sells, not alphabetically.
