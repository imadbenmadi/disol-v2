/**
 * Disol Tailwind preset. Generated from tokens.json; do not edit by hand.
 * Colors, spacing, radii and shadows resolve to the CSS variables in tokens.css,
 * so themes switch with data-theme="dark" | "light" on <html> and no dark: variants are needed.
 * Usage (tailwind.config.js): presets: [require('./disol-design-system/tailwind/disol.preset.cjs')]
 * Import tokens.css once at the app entry.
 */
module.exports = {
  "darkMode": [
    "selector",
    "[data-theme=\"dark\"]"
  ],
  "theme": {
    "colors": {
      "transparent": "transparent",
      "current": "currentColor",
      "brand-50": "var(--brand-50)",
      "brand-100": "var(--brand-100)",
      "brand-200": "var(--brand-200)",
      "brand-300": "var(--brand-300)",
      "brand-400": "var(--brand-400)",
      "brand-500": "var(--brand-500)",
      "brand-600": "var(--brand-600)",
      "brand-700": "var(--brand-700)",
      "brand-800": "var(--brand-800)",
      "brand-900": "var(--brand-900)",
      "bg": "var(--bg)",
      "surface": "var(--surface)",
      "surface-sunken": "var(--surface-sunken)",
      "surface-raised": "var(--surface-raised)",
      "surface-hover": "var(--surface-hover)",
      "border": "var(--border)",
      "border-strong": "var(--border-strong)",
      "text": "var(--text)",
      "text-muted": "var(--text-muted)",
      "text-inverse": "var(--text-inverse)",
      "inverse": "var(--inverse)",
      "primary": "var(--primary)",
      "primary-hover": "var(--primary-hover)",
      "on-primary": "var(--on-primary)",
      "primary-soft": "var(--primary-soft)",
      "primary-soft-text": "var(--primary-soft-text)",
      "focus-ring": "var(--focus-ring)",
      "glow": "var(--glow)",
      "grid-dot": "var(--grid-dot)",
      "glass": "var(--glass)",
      "success": "var(--success)",
      "on-success": "var(--on-success)",
      "success-soft": "var(--success-soft)",
      "warning": "var(--warning)",
      "warning-fill": "var(--warning-fill)",
      "on-warning": "var(--on-warning)",
      "warning-soft": "var(--warning-soft)",
      "danger": "var(--danger)",
      "danger-hover": "var(--danger-hover)",
      "on-danger": "var(--on-danger)",
      "danger-soft": "var(--danger-soft)",
      "chart-1": "var(--chart-1)",
      "chart-2": "var(--chart-2)",
      "chart-3": "var(--chart-3)",
      "chart-4": "var(--chart-4)",
      "chart-5": "var(--chart-5)",
      "scrim": "var(--scrim)"
    },
    "fontFamily": {
      "sans": [
        "var(--font-sans)"
      ],
      "serif": [
        "var(--font-serif)"
      ],
      "mono": [
        "var(--font-mono)"
      ],
      "arabic": [
        "var(--font-arabic)"
      ]
    },
    "spacing": {
      "0": "0px",
      "px": "1px",
      "0.5": "var(--space-0-5)",
      "1": "var(--space-1)",
      "2": "var(--space-2)",
      "3": "var(--space-3)",
      "4": "var(--space-4)",
      "5": "var(--space-5)",
      "6": "var(--space-6)",
      "8": "var(--space-8)",
      "10": "var(--space-10)",
      "12": "var(--space-12)",
      "16": "var(--space-16)",
      "24": "var(--space-24)"
    },
    "borderRadius": {
      "none": "0px",
      "xs": "var(--radius-xs)",
      "sm": "var(--radius-sm)",
      "md": "var(--radius-md)",
      "lg": "var(--radius-lg)",
      "xl": "var(--radius-xl)",
      "full": "var(--radius-full)"
    },
    "boxShadow": {
      "none": "none",
      "xs": "var(--shadow-xs)",
      "sm": "var(--shadow-sm)",
      "md": "var(--shadow-md)",
      "lg": "var(--shadow-lg)",
      "glow": "var(--shadow-glow)"
    },
    "screens": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    },
    "extend": {
      "zIndex": {
        "sticky": "100",
        "dropdown": "1000",
        "modal": "1300",
        "toast": "1400"
      },
      "maxWidth": {
        "content": "var(--content-max)"
      },
      "height": {
        "control-sm": "var(--control-sm)",
        "control-md": "var(--control-md)",
        "control-lg": "var(--control-lg)",
        "topbar": "var(--topbar-height)"
      },
      "width": {
        "sidebar": "var(--sidebar-width)"
      },
      "fontSize": {
        "display-xl": [
          "64px",
          {
            "lineHeight": "68px",
            "fontWeight": "600",
            "letterSpacing": "-0.035em"
          }
        ],
        "display-accent": [
          "64px",
          {
            "lineHeight": "68px",
            "fontWeight": "400",
            "letterSpacing": "-0.01em"
          }
        ],
        "display": [
          "44px",
          {
            "lineHeight": "50px",
            "fontWeight": "600",
            "letterSpacing": "-0.03em"
          }
        ],
        "h1": [
          "30px",
          {
            "lineHeight": "38px",
            "fontWeight": "600",
            "letterSpacing": "-0.02em"
          }
        ],
        "h2": [
          "22px",
          {
            "lineHeight": "30px",
            "fontWeight": "600",
            "letterSpacing": "-0.015em"
          }
        ],
        "h3": [
          "17px",
          {
            "lineHeight": "24px",
            "fontWeight": "600",
            "letterSpacing": "-0.01em"
          }
        ],
        "body-lg": [
          "17px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "body": [
          "14px",
          {
            "lineHeight": "22px",
            "fontWeight": "400"
          }
        ],
        "body-strong": [
          "14px",
          {
            "lineHeight": "22px",
            "fontWeight": "500"
          }
        ],
        "small": [
          "13px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ],
        "caption": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "500"
          }
        ],
        "label-mono": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "400",
            "letterSpacing": "0.01em"
          }
        ],
        "code": [
          "13px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ],
        "ar-display": [
          "52px",
          {
            "lineHeight": "72px",
            "fontWeight": "700"
          }
        ],
        "ar-h1": [
          "28px",
          {
            "lineHeight": "40px",
            "fontWeight": "700"
          }
        ],
        "ar-body": [
          "15px",
          {
            "lineHeight": "26px",
            "fontWeight": "400"
          }
        ]
      }
    }
  }
};
