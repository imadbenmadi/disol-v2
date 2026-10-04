# FlowCanvas

A pipeline diagram of nodes joined by curved connectors, on a dot grid. It shows how Disol runs things: deployments, provisioning, lead routing, automations.

- Consumer provides `nodes` (`id`, `x`, `y`, `title`, `meta`, `state`: `active`/`waiting`/`failed`, `ports`: `in`/`out`/`both`/`none`, optional `width`/`height`; default 184×56), `edges` (`from`, `to`, `label`, `live`), `height`, and the header `title`, `meta`, `status`. Extra children (e.g. a RunLog) render under the canvas.
- Positions are in px from the canvas's top-left. Lay nodes out left to right on a 24px grid, which the dot pattern shows.
- `live` edges animate a dashed flow in `primary` with glow. Mark only what is running now.
- It's a picture: give it an `ariaLabel` that states the flow. For editable workflows, build a real editor; this is display only.
