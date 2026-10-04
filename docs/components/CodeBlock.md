# CodeBlock

Code or a terminal session with a header and copy button, for docs, onboarding emails and the client dashboard (API keys, DNS records, CLI).

- Consumer provides `code` (string), `title` or `language`, and `prompt` to render shell lines with `$` (lines starting with `#` are comments and aren't copied).
- Always LTR, even on RTL pages. Never put secrets in a CodeBlock unless the user just generated them and the page says so.
