/* @ds-bundle: {"format":4,"namespace":"Disol","components":[{"name":"Navbar"},{"name":"SectionHeading"},{"name":"Button"},{"name":"Tag"},{"name":"StatusPill"},{"name":"ServiceCard"},{"name":"PricingCard"},{"name":"ChoiceGroup"},{"name":"Stepper"},{"name":"TextField"},{"name":"Textarea"},{"name":"Select"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Badge"},{"name":"Avatar"},{"name":"Card"},{"name":"StatCard"},{"name":"DataTable"},{"name":"Tabs"},{"name":"FlowCanvas"},{"name":"RunLog"},{"name":"CodeBlock"},{"name":"Alert"},{"name":"Toast"},{"name":"Modal"},{"name":"SidebarNav"},{"name":"Pagination"},{"name":"EmptyState"},{"name":"Icon"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useId = React.useId;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }
  function omit(obj, keys) {
    var r = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) r[k] = obj[k];
    return r;
  }

  /* ---------- Icon: 24px grid, 2px stroke, round caps (Lucide-compatible geometry) ---------- */
  var ICONS = {
    check: [["path", { d: "M20 6 9 17l-5-5" }]],
    minus: [["path", { d: "M5 12h14" }]],
    plus: [["path", { d: "M12 5v14M5 12h14" }]],
    x: [["path", { d: "M18 6 6 18M6 6l12 12" }]],
    "chevron-down": [["path", { d: "m6 9 6 6 6-6" }]],
    "chevron-left": [["path", { d: "m15 18-6-6 6-6" }]],
    "chevron-right": [["path", { d: "m9 18 6-6-6-6" }]],
    search: [["circle", { cx: 11, cy: 11, r: 7 }], ["path", { d: "m20 20-3.5-3.5" }]],
    info: [["circle", { cx: 12, cy: 12, r: 10 }], ["path", { d: "M12 16v-4M12 8h.01" }]],
    "check-circle": [["circle", { cx: 12, cy: 12, r: 10 }], ["path", { d: "m8.5 12 2.5 2.5 4.5-5" }]],
    "alert-circle": [["circle", { cx: 12, cy: 12, r: 10 }], ["path", { d: "M12 8v4M12 16h.01" }]],
    "alert-triangle": [["path", { d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" }], ["path", { d: "M12 9v4M12 17h.01" }]],
    "trend-up": [["path", { d: "M7 17 17 7M8 7h9v9" }]],
    "trend-down": [["path", { d: "M7 7l10 10M17 8v9H8" }]],
    home: [["path", { d: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z" }]],
    "file-text": [["path", { d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" }], ["path", { d: "M14 3v6h6M8 13h8M8 17h5" }]],
    users: [["circle", { cx: 9, cy: 8, r: 4 }], ["path", { d: "M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M16 4.1a4 4 0 0 1 0 7.8M22 21v-1a6 6 0 0 0-4-5.6" }]],
    wallet: [["path", { d: "M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" }], ["path", { d: "M21 12h-5a2 2 0 0 0 0 4h5Z" }]],
    briefcase: [["rect", { x: 2, y: 7, width: 20, height: 14, rx: 2 }], ["path", { d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" }]],
    folder: [["path", { d: "M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }]],
    chart: [["path", { d: "M3 3v18h18" }], ["path", { d: "M8 16v-5M13 16V8M18 16v-3" }]],
    settings: [["circle", { cx: 12, cy: 12, r: 3 }], ["path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" }]],
    inbox: [["path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }], ["path", { d: "M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.8 1.1Z" }]],
    calendar: [["rect", { x: 3, y: 4, width: 18, height: 18, rx: 2 }], ["path", { d: "M16 2v4M8 2v4M3 10h18" }]],
    download: [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" }]],
    more: [["circle", { cx: 5, cy: 12, r: 1 }], ["circle", { cx: 12, cy: 12, r: 1 }], ["circle", { cx: 19, cy: 12, r: 1 }]],
    "arrow-right": [["path", { d: "M5 12h14M13 6l6 6-6 6" }]],
    play: [["path", { d: "M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 7 4.5Z" }]],
    copy: [["rect", { x: 9, y: 9, width: 12, height: 12, rx: 2 }], ["path", { d: "M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" }]],
    server: [["rect", { x: 3, y: 3, width: 18, height: 8, rx: 2 }], ["rect", { x: 3, y: 13, width: 18, height: 8, rx: 2 }], ["path", { d: "M7 7h.01M7 17h.01" }]],
    cloud: [["path", { d: "M17.5 19H8a6 6 0 1 1 5.7-7.9A4.5 4.5 0 1 1 17.5 19Z" }]],
    database: [["ellipse", { cx: 12, cy: 5, rx: 8, ry: 3 }], ["path", { d: "M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" }]],
    globe: [["circle", { cx: 12, cy: 12, r: 10 }], ["path", { d: "M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" }]],
    shield: [["path", { d: "M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" }]],
    mail: [["rect", { x: 2, y: 4, width: 20, height: 16, rx: 2 }], ["path", { d: "m22 6-10 7L2 6" }]],
    code: [["path", { d: "m16 18 6-6-6-6M8 6l-6 6 6 6" }]],
    megaphone: [["path", { d: "M3 11v2a1 1 0 0 0 1 1h3l6 5V5L7 10H4a1 1 0 0 0-1 1ZM17 8a5 5 0 0 1 0 8" }]],
    smartphone: [["rect", { x: 6, y: 2, width: 12, height: 20, rx: 2 }], ["path", { d: "M11 18h2" }]],
    layers: [["path", { d: "m12 2 10 5-10 5L2 7Z" }], ["path", { d: "m2 12 10 5 10-5M2 17l10 5 10-5" }]],
    zap: [["path", { d: "M13 2 4 14h7l-1 8 9-12h-7Z" }]],
    phone: [["path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" }]],
    pen: [["path", { d: "M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z" }]]
  };

  function Icon(props) {
    var parts = ICONS[props.name];
    if (!parts) return null;
    var label = props.label;
    return h(
      "svg",
      {
        className: cx("ds-icon", props.className),
        viewBox: "0 0 24 24",
        width: props.size,
        height: props.size,
        "aria-hidden": label ? undefined : true,
        "aria-label": label,
        role: label ? "img" : undefined,
        focusable: "false"
      },
      parts.map(function (p, i) { return h(p[0], Object.assign({ key: i }, p[1])); })
    );
  }
  Icon.names = Object.keys(ICONS);

  function renderIcon(icon) {
    if (!icon) return null;
    return typeof icon === "string" ? h(Icon, { name: icon }) : icon;
  }

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant || "primary";
    var size = props.size || "md";
    var loading = !!props.loading;
    var iconOnly = props.icon && props.children == null;
    var rest = omit(props, ["variant", "size", "loading", "icon", "iconEnd", "block", "pill", "className", "children", "as"]);
    var Tag = props.as || (props.href ? "a" : "button");
    if (Tag === "button" && rest.type == null) rest.type = "button";
    if (loading) { rest["aria-busy"] = true; if (Tag === "button") rest.disabled = true; }
    return h(
      Tag,
      Object.assign(rest, {
        className: cx("ds-btn", "ds-btn-" + variant, size !== "md" && "ds-btn-" + size, props.block && "ds-btn-block", props.pill && "ds-btn-pill", iconOnly && "ds-btn-icon-only", props.className)
      }),
      loading ? h("span", { className: "ds-spinner", "aria-hidden": true }) : renderIcon(props.icon),
      props.children,
      renderIcon(props.iconEnd)
    );
  }

  /* ---------- Field shell shared by TextField and Select ---------- */
  function Field(p) {
    return h(
      "div",
      { className: cx("ds-field", p.size === "sm" && "ds-sm", p.className) },
      p.label && h("label", { className: "ds-label", htmlFor: p.id }, p.label, p.required && h("span", { className: "ds-required", "aria-hidden": true }, "*")),
      p.control,
      p.error
        ? h("div", { className: "ds-error", id: p.id + "-msg" }, h(Icon, { name: "alert-circle" }), p.error)
        : p.hint && h("div", { className: "ds-hint", id: p.id + "-msg" }, p.hint)
    );
  }

  function TextField(props) {
    var autoId = useId();
    var id = props.id || autoId;
    var rest = omit(props, ["label", "hint", "error", "icon", "size", "className", "id"]);
    var input = h("input", Object.assign(rest, {
      id: id,
      className: "ds-input",
      "aria-invalid": props.error ? true : undefined,
      "aria-describedby": props.error || props.hint ? id + "-msg" : undefined
    }));
    return h(Field, {
      id: id, label: props.label, hint: props.hint, error: props.error, required: props.required, size: props.size, className: props.className,
      control: h("div", { className: "ds-control" }, renderIcon(props.icon), input)
    });
  }

  function Select(props) {
    var autoId = useId();
    var id = props.id || autoId;
    var rest = omit(props, ["label", "hint", "error", "options", "placeholder", "size", "className", "id", "children"]);
    var opts = (props.options || []).map(function (o) {
      var v = typeof o === "object" ? o : { value: o, label: String(o) };
      return h("option", { key: v.value, value: v.value, disabled: v.disabled }, v.label);
    });
    if (props.placeholder) opts.unshift(h("option", { key: "__ph", value: "", disabled: true }, props.placeholder));
    if (props.placeholder && props.value === undefined && props.defaultValue === undefined) rest.defaultValue = "";
    var select = h("select", Object.assign(rest, {
      id: id,
      className: "ds-select",
      "aria-invalid": props.error ? true : undefined,
      "aria-describedby": props.error || props.hint ? id + "-msg" : undefined
    }), opts, props.children);
    return h(Field, {
      id: id, label: props.label, hint: props.hint, error: props.error, required: props.required, size: props.size, className: props.className,
      control: h("div", { className: "ds-control" }, select, h(Icon, { name: "chevron-down", className: "ds-select-chevron" }))
    });
  }

  /* ---------- Checkbox ---------- */
  function Checkbox(props) {
    var ref = useRef(null);
    var indeterminate = !!props.indeterminate;
    useEffect(function () { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
    var rest = omit(props, ["label", "description", "indeterminate", "className"]);
    return h(
      "label",
      { className: cx("ds-check", props.className) },
      h("input", Object.assign(rest, { ref: ref, type: "checkbox" })),
      h("span", { className: "ds-check-box", "aria-hidden": true }, h(Icon, { name: indeterminate ? "minus" : "check" })),
      (props.label || props.description) && h("span", null, props.label, props.description && h("span", { className: "ds-check-desc" }, props.description))
    );
  }

  /* ---------- Switch ---------- */
  function Switch(props) {
    var rest = omit(props, ["label", "className"]);
    return h(
      "label",
      { className: cx("ds-switch", props.className) },
      h("input", Object.assign(rest, { type: "checkbox", role: "switch" })),
      h("span", { className: "ds-switch-track", "aria-hidden": true }, h("span", { className: "ds-switch-thumb" })),
      props.label && h("span", null, props.label)
    );
  }

  /* ---------- Badge ---------- */
  function Badge(props) {
    return h("span", { className: cx("ds-badge", "ds-badge-" + (props.tone || "neutral"), props.dot && "ds-badge-dot", props.className) }, props.children);
  }

  /* ---------- Avatar ---------- */
  function initials(name) {
    if (!name) return "?";
    var parts = String(name).trim().split(/\s+/);
    var first = parts[0] ? Array.from(parts[0])[0] : "";
    var last = parts.length > 1 ? Array.from(parts[parts.length - 1])[0] : "";
    return (first + last).toUpperCase();
  }
  function Avatar(props) {
    var size = props.size || "md";
    var _s = useState(false), failed = _s[0], setFailed = _s[1];
    var showImg = props.src && !failed;
    return h(
      "span",
      { className: cx("ds-avatar", "ds-avatar-" + size, props.className), title: props.name, role: "img", "aria-label": props.name || "User" },
      showImg ? h("img", { src: props.src, alt: "", onError: function () { setFailed(true); } }) : h("span", { "aria-hidden": true }, initials(props.name))
    );
  }

  /* ---------- Card ---------- */
  function Card(props) {
    var hasHeader = props.title || props.actions;
    var rest = omit(props, ["title", "subtitle", "actions", "footer", "flush", "className", "children"]);
    return h(
      "section",
      Object.assign(rest, { className: cx("ds-card", props.flush && "ds-card-flush", props.className) }),
      hasHeader && h("header", { className: "ds-card-header" },
        h("div", null,
          props.title && h("h3", { className: "ds-card-title" }, props.title),
          props.subtitle && h("p", { className: "ds-card-subtitle" }, props.subtitle)),
        props.actions && h("div", { className: "ds-card-actions" }, props.actions)),
      h("div", { className: "ds-card-body" }, props.children),
      props.footer && h("footer", { className: "ds-card-footer" }, props.footer)
    );
  }

  /* ---------- StatCard ---------- */
  function StatCard(props) {
    var trend = props.trend || (props.delta == null ? null : String(props.delta).charAt(0) === "-" ? "down" : "up");
    return h(
      "div",
      { className: cx("ds-card", "ds-stat", props.className) },
      h("div", { className: "ds-stat-top" },
        h("span", { className: "ds-stat-label" }, props.label),
        props.icon && h("span", { className: "ds-stat-icon", "aria-hidden": true }, renderIcon(props.icon))),
      h("div", { className: "ds-stat-value" }, props.value),
      (props.delta != null || props.caption) && h("div", { className: "ds-stat-foot" },
        props.delta != null && h("span", { className: cx("ds-delta", "ds-delta-" + (props.intent || (trend === "up" ? "positive" : trend === "down" ? "negative" : "neutral"))) },
          trend === "up" || trend === "down" ? h(Icon, { name: trend === "up" ? "trend-up" : "trend-down" }) : null,
          h("span", null, props.delta),
          h("span", { className: "ds-sr-only" }, trend === "up" ? " increase" : trend === "down" ? " decrease" : "")),
        props.caption && h("span", null, props.caption))
    );
  }

  /* ---------- DataTable ---------- */
  function DataTable(props) {
    var columns = props.columns || [];
    var rows = props.rows || [];
    var rowKey = props.rowKey || "id";
    var selectable = !!props.onSelectionChange;
    var selected = props.selected || [];
    function keyOf(row, i) { return typeof rowKey === "function" ? rowKey(row, i) : row[rowKey] != null ? row[rowKey] : i; }
    var allKeys = rows.map(keyOf);
    var allSelected = selectable && rows.length > 0 && allKeys.every(function (k) { return selected.indexOf(k) >= 0; });
    var someSelected = selectable && !allSelected && allKeys.some(function (k) { return selected.indexOf(k) >= 0; });
    function toggle(k) {
      var next = selected.indexOf(k) >= 0 ? selected.filter(function (x) { return x !== k; }) : selected.concat([k]);
      props.onSelectionChange(next);
    }
    function alignClass(c) { return c.align === "end" ? "ds-num" : c.align === "center" ? "ds-center" : undefined; }

    var head = h("thead", null, h("tr", null,
      selectable && h("th", { className: "ds-table-sel", scope: "col" },
        h(Checkbox, { checked: allSelected, indeterminate: someSelected, "aria-label": "Select all rows", onChange: function () { props.onSelectionChange(allSelected ? [] : allKeys); } })),
      columns.map(function (c) { return h("th", { key: c.key, scope: "col", className: alignClass(c), style: c.width ? { width: c.width } : undefined }, c.header); })));

    var body = rows.length === 0
      ? h("tbody", null, h("tr", null, h("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "ds-table-empty" }, props.empty || "No records yet.")))
      : h("tbody", null, rows.map(function (row, i) {
          var k = keyOf(row, i);
          var isSel = selected.indexOf(k) >= 0;
          return h("tr", { key: k, "aria-selected": selectable ? isSel : undefined, onClick: props.onRowClick ? function () { props.onRowClick(row); } : undefined, style: props.onRowClick ? { cursor: "pointer" } : undefined },
            selectable && h("td", { className: "ds-table-sel", onClick: function (e) { e.stopPropagation(); } },
              h(Checkbox, { checked: isSel, "aria-label": "Select row", onChange: function () { toggle(k); } })),
            columns.map(function (c) { return h("td", { key: c.key, className: alignClass(c) }, c.render ? c.render(row, i) : row[c.key]); }));
        }));

    return h("div", { className: cx("ds-table-wrap", props.className) },
      h("table", { className: cx("ds-table", props.dense && "ds-table-dense") },
        props.caption && h("caption", { className: "ds-sr-only" }, props.caption), head, body));
  }

  /* ---------- Tabs ---------- */
  function Tabs(props) {
    var items = props.items || [];
    var _s = useState(props.defaultValue != null ? props.defaultValue : items[0] && items[0].value);
    var value = props.value != null ? props.value : _s[0];
    var listRef = useRef(null);
    function select(v) { if (props.value == null) _s[1](v); if (props.onChange) props.onChange(v); }
    function onKeyDown(e) {
      var keys = { ArrowRight: 1, ArrowLeft: -1, Home: "first", End: "last" };
      if (!(e.key in keys)) return;
      e.preventDefault();
      var enabled = items.filter(function (t) { return !t.disabled; });
      var idx = enabled.findIndex(function (t) { return t.value === value; });
      var rtl = listRef.current && getComputedStyle(listRef.current).direction === "rtl";
      var step = keys[e.key];
      var next = step === "first" ? 0 : step === "last" ? enabled.length - 1 : (idx + (rtl ? -step : step) + enabled.length) % enabled.length;
      select(enabled[next].value);
      var btn = listRef.current && listRef.current.querySelector('[data-value="' + String(enabled[next].value).replace(/"/g, '\\"') + '"]');
      if (btn) btn.focus();
    }
    return h("div", { role: "tablist", "aria-label": props.label, className: cx("ds-tabs", props.className), ref: listRef, onKeyDown: onKeyDown },
      items.map(function (t) {
        var active = t.value === value;
        return h("button", {
          key: t.value, type: "button", role: "tab", className: "ds-tab", "data-value": t.value,
          "aria-selected": active, tabIndex: active ? 0 : -1, disabled: t.disabled,
          "aria-controls": t.panelId, onClick: function () { select(t.value); }
        }, renderIcon(t.icon), t.label, t.count != null && h("span", { className: "ds-tab-count" }, t.count));
      }));
  }

  /* ---------- Alert ---------- */
  var TONE_ICON = { info: "info", success: "check-circle", warning: "alert-triangle", danger: "alert-circle" };
  function Alert(props) {
    var tone = props.tone || "info";
    return h("div", { role: tone === "danger" || tone === "warning" ? "alert" : "status", className: cx("ds-alert", "ds-alert-" + tone, props.className) },
      h(Icon, { name: TONE_ICON[tone] }),
      h("div", { className: "ds-alert-body" },
        props.title && h("div", { className: "ds-alert-title" }, props.title),
        props.children),
      props.onClose && h("button", { type: "button", className: "ds-icon-btn", "aria-label": "Dismiss", onClick: props.onClose }, h(Icon, { name: "x" })));
  }

  /* ---------- Toast (presentational; place inside ToastRegion / your own queue) ---------- */
  function Toast(props) {
    var tone = props.tone || "info";
    return h("div", { role: tone === "danger" ? "alert" : "status", "aria-live": tone === "danger" ? "assertive" : "polite", className: cx("ds-toast", "ds-toast-" + tone, props.className) },
      h(Icon, { name: TONE_ICON[tone] }),
      h("div", { className: "ds-toast-body" },
        h("div", { className: "ds-toast-title" }, props.title),
        props.message && h("div", { className: "ds-toast-msg" }, props.message),
        props.action && h("div", { className: "ds-toast-action" }, props.action)),
      props.onClose && h("button", { type: "button", className: "ds-icon-btn", "aria-label": "Close notification", onClick: props.onClose }, h(Icon, { name: "x" })));
  }
  function ToastRegion(props) {
    return h("div", { className: "ds-toast-region", "aria-label": "Notifications" }, props.children);
  }

  /* ---------- Modal ---------- */
  function Modal(props) {
    var dialogRef = useRef(null);
    var titleId = useId();
    var descId = useId();
    var open = !!props.open;
    var onClose = props.onClose;
    var onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;
    useEffect(function () {
      if (!open) return undefined;
      var prev = document.activeElement;
      var node = dialogRef.current;
      var focusables = function () {
        return node ? Array.prototype.slice.call(node.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')) : [];
      };
      var first = focusables()[0];
      if (!props.contained) (first || node).focus();
      function onKey(e) {
        if (e.key === "Escape" && onCloseRef.current) { e.stopPropagation(); onCloseRef.current(); }
        if (e.key === "Tab") {
          var f = focusables();
          if (!f.length) { e.preventDefault(); return; }
          if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
        }
      }
      document.addEventListener("keydown", onKey);
      var prevOverflow = document.body.style.overflow;
      if (!props.contained) document.body.style.overflow = "hidden";
      return function () {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow;
        if (prev && prev.focus && !props.contained) prev.focus();
      };
    }, [open, props.contained]);
    if (!open) return null;
    return h("div", {
      className: cx("ds-modal-scrim", props.contained && "ds-contained"),
      onMouseDown: function (e) { if (e.target === e.currentTarget && onClose && props.dismissible !== false) onClose(); }
    },
      h("div", {
        ref: dialogRef, role: props.role || "dialog", "aria-modal": true, "aria-labelledby": titleId,
        "aria-describedby": props.description ? descId : undefined, tabIndex: -1,
        className: cx("ds-modal", "ds-modal-" + (props.size || "md"), props.className)
      },
        h("div", { className: "ds-modal-header" },
          h("div", { style: { flex: 1 } },
            h("h2", { className: "ds-modal-title", id: titleId }, props.title),
            props.description && h("p", { className: "ds-modal-desc", id: descId }, props.description)),
          onClose && h("button", { type: "button", className: "ds-icon-btn", "aria-label": "Close", onClick: onClose }, h(Icon, { name: "x" }))),
        props.children && h("div", { className: "ds-modal-body" }, props.children),
        props.footer && h("div", { className: "ds-modal-footer" }, props.footer)));
  }

  /* ---------- SidebarNav ---------- */
  function SidebarNav(props) {
    var sections = props.sections || [];
    function item(it) {
      var current = it.value === props.value;
      var common = {
        key: it.value, className: "ds-nav-item", "aria-current": current ? "page" : undefined,
        onClick: function (e) { if (props.onNavigate) { if (it.href) e.preventDefault(); props.onNavigate(it.value, it); } }
      };
      var content = [renderIcon(it.icon), h("span", { key: "l" }, it.label), it.badge != null && h(Badge, { key: "b", tone: current ? "brand" : "neutral" }, it.badge)];
      return it.href ? h("a", Object.assign(common, { href: it.href }), content) : h("button", Object.assign(common, { type: "button" }), content);
    }
    return h("aside", { className: cx("ds-sidebar", props.className), "aria-label": props.label || "Main" },
      props.brand && h("div", { className: "ds-sidebar-brand" }, props.brand),
      h("nav", { className: "ds-sidebar-nav" },
        sections.map(function (s, i) {
          return h("div", { key: s.title || i, className: "ds-nav-section" },
            s.title && h("div", { className: "ds-nav-heading" }, s.title),
            s.items.map(item));
        })),
      props.footer && h("div", { className: "ds-sidebar-footer" }, props.footer));
  }

  /* ---------- Pagination ---------- */
  function pageList(page, count) {
    if (count <= 7) return Array.from({ length: count }, function (_, i) { return i + 1; });
    var out = [1];
    var start = Math.max(2, page - 1), end = Math.min(count - 1, page + 1);
    if (page <= 3) { start = 2; end = 4; }
    if (page >= count - 2) { start = count - 3; end = count - 1; }
    if (start > 2) out.push("gap-l");
    for (var p = start; p <= end; p++) out.push(p);
    if (end < count - 1) out.push("gap-r");
    out.push(count);
    return out;
  }
  function Pagination(props) {
    var page = props.page || 1;
    var count = Math.max(1, props.pageCount || 1);
    function go(p) { if (p >= 1 && p <= count && p !== page && props.onChange) props.onChange(p); }
    var summary = null;
    if (props.total != null && props.pageSize) {
      var from = (page - 1) * props.pageSize + 1;
      var to = Math.min(props.total, page * props.pageSize);
      summary = props.total === 0 ? "No results" : "Showing " + from + "–" + to + " of " + props.total;
    }
    return h("nav", { className: cx("ds-pagination", props.className), "aria-label": "Pagination" },
      h("span", null, summary),
      h("div", { className: "ds-pages" },
        h("button", { type: "button", className: "ds-page", disabled: page <= 1, "aria-label": "Previous page", onClick: function () { go(page - 1); } }, h(Icon, { name: "chevron-left" })),
        pageList(page, count).map(function (p) {
          return typeof p === "string"
            ? h("span", { key: p, className: "ds-page-gap", "aria-hidden": true }, "…")
            : h("button", { key: p, type: "button", className: "ds-page", "aria-current": p === page ? "page" : undefined, "aria-label": "Page " + p, onClick: function () { go(p); } }, p);
        }),
        h("button", { type: "button", className: "ds-page", disabled: page >= count, "aria-label": "Next page", onClick: function () { go(page + 1); } }, h(Icon, { name: "chevron-right" }))));
  }

  /* ---------- EmptyState ---------- */
  function EmptyState(props) {
    return h("div", { className: cx("ds-empty", props.className) },
      h("div", { className: "ds-empty-icon", "aria-hidden": true }, renderIcon(props.icon || "inbox")),
      h("h3", { className: "ds-empty-title" }, props.title),
      props.description && h("p", { className: "ds-empty-desc" }, props.description),
      props.actions && h("div", { className: "ds-empty-actions" }, props.actions));
  }

  /* =================== Client platform & infrastructure =================== */

  /* ---------- Tag: mono technical label ---------- */
  function Tag(props) {
    return h("span", { className: cx("ds-tag", props.dot && "ds-tag-dot", props.tone === "accent" && "ds-tag-accent", props.className) }, props.children);
  }

  /* ---------- StatusPill ---------- */
  var STATUS_TEXT = { operational: "all systems normal", degraded: "degraded performance", outage: "service disruption", maintenance: "scheduled maintenance" };
  function StatusPill(props) {
    var status = props.status || "operational";
    var Tag_ = props.href ? "a" : "span";
    return h(Tag_, { href: props.href, className: cx("ds-status", "ds-status-" + status, props.className), role: props.href ? undefined : "status" },
      h("span", { className: "ds-status-dot", "aria-hidden": true }),
      props.children || STATUS_TEXT[status]);
  }

  /* ---------- Navbar (marketing / client platform) ---------- */
  function Navbar(props) {
    var _s = useState(false), scrolled = _s[0], setScrolled = _s[1];
    var solid = props.solid;
    useEffect(function () {
      if (solid != null) return undefined;
      function onScroll() { setScrolled(window.scrollY > 8); }
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return function () { window.removeEventListener("scroll", onScroll); };
    }, [solid]);
    var isSolid = solid != null ? solid : scrolled;
    return h("header", { className: cx("ds-navbar", isSolid && "ds-navbar-solid", props.className) },
      h("div", { className: "ds-navbar-inner" },
        h("a", { className: "ds-navbar-brand", href: props.brandHref || "/", "aria-label": props.brandLabel || "Disol home" }, props.brand),
        h("nav", { className: "ds-navbar-links", "aria-label": "Primary" },
          (props.links || []).map(function (l) {
            return h("a", { key: l.href, href: l.href, className: "ds-navbar-link", "aria-current": l.current ? "page" : undefined }, l.label);
          })),
        h("div", { className: "ds-navbar-end" }, props.actions)));
  }

  /* ---------- SectionHeading: eyebrow tag, title with serif accent, description ---------- */
  function SectionHeading(props) {
    var Tag_ = props.as || (props.size === "xl" ? "h1" : "h2");
    return h("div", { className: cx("ds-heading", "ds-heading-" + (props.size || "lg"), props.align === "center" && "ds-heading-center", props.className) },
      props.eyebrow && h("div", null, props.eyebrow),
      h(Tag_, { className: "ds-heading-title" }, props.title, props.accent && [props.title ? " " : null, h("span", { key: "a", className: "ds-heading-accent" }, props.accent)]),
      props.description && h("p", { className: "ds-heading-desc" }, props.description),
      props.actions && h("div", { style: { display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-2)" } }, props.actions),
      props.footnote && h("div", { className: "ds-mono", style: { fontSize: 12, color: "var(--text-muted)" } }, props.footnote));
  }

  /* ---------- Textarea ---------- */
  function Textarea(props) {
    var autoId = useId();
    var id = props.id || autoId;
    var rest = omit(props, ["label", "hint", "error", "className", "id", "showCount"]);
    var len = props.value != null ? String(props.value).length : null;
    var input = h("textarea", Object.assign(rest, {
      id: id, className: "ds-textarea",
      "aria-invalid": props.error ? true : undefined,
      "aria-describedby": props.error || props.hint ? id + "-msg" : undefined
    }));
    var counter = props.showCount && props.maxLength && len != null ? h("span", { className: "ds-count", "aria-live": "polite" }, len + " / " + props.maxLength) : null;
    return h(Field, {
      id: id, label: props.label, required: props.required, className: props.className,
      control: input,
      error: props.error,
      hint: counter ? h("span", { style: { display: "flex", gap: 8 } }, props.hint, counter) : props.hint
    });
  }

  /* ---------- ChoiceGroup: radio / checkbox cards ---------- */
  function ChoiceGroup(props) {
    var autoName = useId();
    var multiple = !!props.multiple;
    var value = props.value != null ? props.value : multiple ? [] : null;
    function isOn(v) { return multiple ? value.indexOf(v) >= 0 : value === v; }
    function change(v) {
      if (!props.onChange) return;
      if (!multiple) return props.onChange(v);
      props.onChange(isOn(v) ? value.filter(function (x) { return x !== v; }) : value.concat([v]));
    }
    return h("fieldset", { className: cx("ds-choices", props.className), "aria-invalid": props.error ? true : undefined },
      props.label && h("legend", { className: "ds-label" }, props.label),
      h("div", { className: "ds-choices-grid", style: props.columns ? { gridTemplateColumns: "repeat(" + props.columns + ", minmax(0, 1fr))" } : undefined },
        (props.options || []).map(function (o) {
          return h("label", { key: o.value, className: cx("ds-choice", multiple && "ds-choice-multi") },
            h("input", { type: multiple ? "checkbox" : "radio", name: props.name || autoName, value: o.value, checked: isOn(o.value), disabled: o.disabled, onChange: function () { change(o.value); } }),
            o.icon && h("span", { className: "ds-choice-icon", "aria-hidden": true }, renderIcon(o.icon)),
            h("span", { style: { minWidth: 0, paddingInlineEnd: 20 } },
              h("span", { className: "ds-choice-title" }, o.label),
              o.description && h("span", { className: "ds-choice-desc" }, o.description)),
            h("span", { className: "ds-choice-check", "aria-hidden": true }, h(Icon, { name: "check" })));
        })),
      props.error && h("div", { className: "ds-error", style: { marginTop: 8 } }, h(Icon, { name: "alert-circle" }), props.error));
  }

  /* ---------- Stepper ---------- */
  function Stepper(props) {
    var steps = props.steps || [];
    var current = props.current || 0;
    var items = [];
    steps.forEach(function (label, i) {
      var state = i < current ? "done" : i === current ? "current" : "upcoming";
      if (i > 0) items.push(h("li", { key: "l" + i, className: "ds-step-line", "data-done": i <= current, "aria-hidden": true }));
      items.push(h("li", { key: i, className: "ds-step", "data-state": state, "aria-current": state === "current" ? "step" : undefined },
        h("span", { className: "ds-step-num" }, state === "done" ? h(Icon, { name: "check" }) : i + 1),
        h("span", { className: "ds-step-label" }, label),
        h("span", { className: "ds-sr-only" }, state === "done" ? ", completed" : state === "current" ? ", current step" : "")));
    });
    return h("ol", { className: cx("ds-stepper", props.className), "aria-label": props.label || "Progress" }, items);
  }

  /* ---------- ServiceCard ---------- */
  function ServiceCard(props) {
    return h("article", { className: cx("ds-service", props.featured && "ds-service-featured", props.className) },
      h("div", { className: "ds-service-top" },
        h("span", { className: "ds-service-icon", "aria-hidden": true }, renderIcon(props.icon || "layers")),
        h("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" } }, props.category && h(Tag, null, props.category), props.badge)),
      h("div", null,
        h("h3", { className: "ds-service-title" }, props.href ? h("a", { href: props.href, style: { color: "inherit", textDecoration: "none" } }, props.title) : props.title),
        props.description && h("p", { className: "ds-service-desc" }, props.description)),
      props.features && props.features.length > 0 && h("ul", { className: "ds-features" },
        props.features.map(function (f, i) { return h("li", { key: i }, h(Icon, { name: "check" }), h("span", null, f)); })),
      (props.price || props.action) && h("div", { className: "ds-service-foot" },
        props.price ? h("div", { className: "ds-price" },
          props.price.prefix !== null && h("span", { className: "ds-price-from" }, props.price.prefix || "from"),
          h("span", { className: "ds-price-amount" }, props.price.amount, props.price.unit && h("span", { className: "ds-price-unit" }, " " + props.price.unit))) : h("span"),
        props.action));
  }

  /* ---------- PricingCard ---------- */
  function PricingCard(props) {
    return h("article", { className: cx("ds-plan", props.featured && "ds-plan-featured", props.className) },
      props.ribbon && h("div", { className: "ds-plan-ribbon" }, h(Tag, { tone: "accent", dot: true }, props.ribbon)),
      h("div", null,
        h("h3", { className: "ds-plan-name" }, props.name),
        h("div", { className: "ds-plan-price", style: { marginTop: 8 } },
          h("span", { className: "ds-plan-amount" }, props.price),
          props.period && h("span", { className: "ds-plan-period" }, props.period)),
        props.description && h("p", { className: "ds-plan-desc", style: { marginTop: 8 } }, props.description)),
      props.action,
      props.features && h("ul", { className: "ds-features" },
        props.features.map(function (f, i) { return h("li", { key: i }, h(Icon, { name: "check" }), h("span", null, f)); })));
  }

  /* ---------- FlowCanvas: nodes + bezier connectors ---------- */
  var NODE_W = 184, NODE_H = 56;
  function FlowCanvas(props) {
    var nodes = props.nodes || [];
    var byId = {};
    nodes.forEach(function (n) { byId[n.id] = n; });
    var height = props.height || 280;
    var edges = (props.edges || []).map(function (e, i) {
      var a = byId[e.from], b = byId[e.to];
      if (!a || !b) return null;
      var aw = a.width || NODE_W, bh = b.height || NODE_H, ah = a.height || NODE_H;
      var x1 = a.x + aw, y1 = a.y + ah / 2, x2 = b.x, y2 = b.y + bh / 2;
      var dx = Math.max(40, (x2 - x1) / 2);
      return { key: i, d: "M" + x1 + " " + y1 + " C" + (x1 + dx) + " " + y1 + " " + (x2 - dx) + " " + y2 + " " + x2 + " " + y2, live: e.live, label: e.label, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 };
    }).filter(Boolean);
    return h("div", { className: cx("ds-flow", props.className), role: "img", "aria-label": props.ariaLabel || props.title || "Workflow diagram" },
      (props.title || props.meta || props.status) && h("div", { className: "ds-flow-head" },
        h("span", { className: "ds-flow-head-title" }, props.title),
        props.meta && h("span", { className: "ds-mono" }, props.meta),
        props.status && h("span", { className: "ds-flow-head-end" }, props.status)),
      h("div", { className: "ds-flow-stage ds-grid-bg", style: { height: height }, dir: "ltr" },
        h("svg", { className: "ds-flow-edges", "aria-hidden": true },
          edges.map(function (e) { return h("path", { key: e.key, d: e.d, className: cx("ds-edge", e.live && "ds-edge-live") }); })),
        edges.filter(function (e) { return e.label; }).map(function (e) {
          return h("span", { key: "l" + e.key, className: "ds-edge-label", style: { left: e.mx, top: e.my }, "aria-hidden": true }, e.label);
        }),
        nodes.map(function (n) {
          return h("div", { key: n.id, className: cx("ds-node", n.state && "ds-node-" + n.state), style: { left: n.x, top: n.y, width: n.width || NODE_W, height: n.height || NODE_H } },
            n.ports !== "out" && n.ports !== "none" && h("span", { className: "ds-node-port ds-node-port-in" }),
            h("span", { className: "ds-node-title" }, n.title),
            n.meta && h("span", { className: "ds-node-meta" }, n.meta),
            n.ports !== "in" && n.ports !== "none" && h("span", { className: "ds-node-port ds-node-port-out" }));
        })),
      props.children);
  }

  /* ---------- RunLog ---------- */
  function RunLog(props) {
    return h("div", { className: props.className },
      props.title && h("div", { className: "ds-log-head" }, props.title),
      h("ul", { className: "ds-log" },
        (props.items || []).map(function (it, i) {
          return h("li", { key: it.id || i, className: "ds-log-" + (it.status || "success") },
            h("span", { className: "ds-log-dot", "aria-hidden": true }),
            h("time", null, it.time),
            h("span", { className: "ds-log-text" }, it.text, h("span", { className: "ds-sr-only" }, " (" + (it.status || "success") + ")")),
            h("span", { className: "ds-log-dur" }, it.duration));
        })));
  }

  /* ---------- CodeBlock ---------- */
  function CodeBlock(props) {
    var _s = useState(false), copied = _s[0], setCopied = _s[1];
    var lines = String(props.code || "").split("\n");
    function copy() {
      var text = props.prompt ? lines.filter(function (l) { return l && l.charAt(0) !== "#"; }).join("\n") : props.code;
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { setCopied(true); setTimeout(function () { setCopied(false); }, 1500); }, function () {});
    }
    return h("div", { className: cx("ds-code", props.className) },
      h("div", { className: "ds-code-head" }, props.title || props.language,
        h("button", { type: "button", className: "ds-icon-btn", onClick: copy, "aria-label": copied ? "Copied" : "Copy code" }, h(Icon, { name: copied ? "check" : "copy" }))),
      h("pre", null, h("code", null, lines.map(function (l, i) {
        var isComment = l.charAt(0) === "#";
        return h(React.Fragment, { key: i },
          props.prompt && !isComment && l ? h("span", { className: "ds-code-prompt" }, "$ ") : null,
          isComment ? h("span", { className: "ds-code-comment" }, l) : l,
          i < lines.length - 1 ? "\n" : null);
      }))));
  }

  var api = {
    Button: Button, TextField: TextField, Select: Select, Checkbox: Checkbox, Switch: Switch,
    Badge: Badge, Avatar: Avatar, Card: Card, StatCard: StatCard, DataTable: DataTable, Tabs: Tabs,
    Alert: Alert, Toast: Toast, ToastRegion: ToastRegion, Modal: Modal, SidebarNav: SidebarNav,
    Pagination: Pagination, EmptyState: EmptyState, Icon: Icon,
    Tag: Tag, StatusPill: StatusPill, Navbar: Navbar, SectionHeading: SectionHeading, Textarea: Textarea, ChoiceGroup: ChoiceGroup,
    Stepper: Stepper, ServiceCard: ServiceCard, PricingCard: PricingCard, FlowCanvas: FlowCanvas, RunLog: RunLog, CodeBlock: CodeBlock
  };
  window.Disol = Object.assign(window.Disol || {}, api);
})();
