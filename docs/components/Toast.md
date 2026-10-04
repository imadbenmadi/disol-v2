# Toast

A short, transient confirmation of something the user just did ("Invoice sent"), shown bottom-end.

- Presentational only: the app owns the queue, timing (5 s; errors stay until closed) and placement via `ToastRegion`.
- Consumer provides `title`, optional `message`, an optional single `action` (e.g. a small ghost "Undo" Button) and `onClose`.
- Never put the only copy of important information in a toast. Errors that block work belong in an Alert.
