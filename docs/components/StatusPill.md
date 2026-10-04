# StatusPill

Live platform status with a pulsing dot: `operational`, `degraded`, `maintenance`, `outage`.

- Consumer provides `status` from the real status source (never hard-code "operational"), optional `href` to the status page, and optional custom text.
- Lives in the Navbar's end slot and on the status page. Hidden below `bp-md`.
- The pulse respects `prefers-reduced-motion`.
