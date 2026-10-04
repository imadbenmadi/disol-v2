# RunLog

A mono list of recent runs or events: time, status dot, description, duration. Use it for deployments, backups, form submissions and email sends.

- Consumer provides `items` (`time`, `text`, `status`: `success`/`running`/`failed`/`queued`, `duration`) and an optional `title` (lowercase mono: "last runs").
- Newest first. Show 3–8 rows, then link to the full log.
- Failed rows turn the text `danger`; the word in `text` should still say what failed.
