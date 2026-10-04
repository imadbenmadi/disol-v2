# Icon

Line icons on a 24px grid with 2px round strokes, drawn in `currentColor` so they follow the text colour.

- Consumer provides `name`; size follows the font size (1em) unless `size` is set. Decorative by default (`aria-hidden`); pass `label` when the icon is the only content.
- The set covers the components' needs. For anything else, use Lucide (`lucide-react`, already in the codebase): same 24px grid, 2px stroke and round caps, so they mix.
- 16px in buttons and inputs, 18px in navigation, 20–24px in empty states and toasts.
