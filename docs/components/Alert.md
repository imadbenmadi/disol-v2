# Alert

An inline, persistent message about the current page or section. For transient confirmations, use Toast.

- `info` context or tips · `success` a completed state that matters later · `warning` something needs attention soon · `danger` something failed or is blocked.
- Consumer provides `title` (one line), children (one or two sentences, may include a link) and optional `onClose`.
- `warning` and `danger` are announced (`role="alert"`); others are `status`.
