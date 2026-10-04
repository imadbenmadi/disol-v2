import type * as React from 'react';

type IconLike = IconName | React.ReactElement;
export type Tone = 'info' | 'success' | 'warning' | 'danger';

export type IconName =
  | 'check' | 'minus' | 'plus' | 'x' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'search'
  | 'info' | 'check-circle' | 'alert-circle' | 'alert-triangle' | 'trend-up' | 'trend-down'
  | 'home' | 'file-text' | 'users' | 'wallet' | 'briefcase' | 'folder' | 'chart' | 'settings'
  | 'inbox' | 'calendar' | 'download' | 'more' | 'arrow-right' | 'play' | 'copy' | 'server' | 'cloud'
  | 'database' | 'globe' | 'shield' | 'mail' | 'code' | 'megaphone' | 'smartphone' | 'layers' | 'zap' | 'phone' | 'pen';

export interface IconProps {
  name: IconName;
  /** Accessible label. Omit for decorative icons (default: aria-hidden). */
  label?: string;
  /** Pixel size. Default: 1em, so it follows the surrounding font size. */
  size?: number;
  className?: string;
}
export declare function Icon(props: IconProps): React.ReactElement | null;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** primary: the one main action per view. secondary: everything else. ghost: toolbars, low emphasis. danger: destructive. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Shows a spinner, sets aria-busy and disables the button. */
  loading?: boolean;
  /** Leading icon. With no children the button becomes square; then aria-label is required. */
  icon?: IconLike;
  iconEnd?: IconLike;
  /** Full width. */
  block?: boolean;
  /** Fully rounded: marketing CTAs and the navbar CTA. */
  pill?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message. Sets aria-invalid and replaces the hint. */
  error?: React.ReactNode;
  icon?: IconLike;
  size?: 'sm' | 'md';
}
export declare function TextField(props: TextFieldProps): React.ReactElement;

export type SelectOption = string | number | { value: string | number; label: React.ReactNode; disabled?: boolean };
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options?: SelectOption[];
  /** Disabled first option shown until a value is chosen. */
  placeholder?: string;
  size?: 'sm' | 'md';
}
export declare function Select(props: SelectProps): React.ReactElement;

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  indeterminate?: boolean;
}
export declare function Checkbox(props: CheckboxProps): React.ReactElement;

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> {
  label?: React.ReactNode;
}
export declare function Switch(props: SwitchProps): React.ReactElement;

export interface BadgeProps {
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
  /** Leading status dot. */
  dot?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface AvatarProps {
  /** Full name: used for initials, title and aria-label. */
  name?: string;
  /** Image URL. Falls back to initials if it fails to load. */
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export declare function Avatar(props: AvatarProps): React.ReactElement;

export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Buttons rendered top-right. */
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  /** Remove body padding (for a table or list that runs edge to edge). */
  flush?: boolean;
}
export declare function Card(props: CardProps): React.ReactElement;

export interface StatCardProps {
  label: React.ReactNode;
  /** Pre-formatted value, e.g. "DZD 1,240,000". */
  value: React.ReactNode;
  /** Pre-formatted change, e.g. "+12.4%". A leading "-" means down unless trend is set. */
  delta?: React.ReactNode;
  /** Arrow direction. Default: from the sign of delta. */
  trend?: 'up' | 'down' | 'flat';
  /** Colour meaning, independent of direction. Default: up = positive, down = negative. Set 'positive' when down is good (costs, overdue count). */
  intent?: 'positive' | 'negative' | 'neutral';
  /** Comparison text after the delta, e.g. "vs last month". */
  caption?: React.ReactNode;
  icon?: IconLike;
  className?: string;
}
export declare function StatCard(props: StatCardProps): React.ReactElement;

export interface DataTableColumn<Row> {
  key: string;
  header: React.ReactNode;
  /** 'end' for numbers and money (right in LTR, tabular figures). */
  align?: 'start' | 'center' | 'end';
  width?: number | string;
  render?: (row: Row, index: number) => React.ReactNode;
}
export interface DataTableProps<Row> {
  columns: DataTableColumn<Row>[];
  rows: Row[];
  /** Field name or function giving a stable key. Default 'id'. */
  rowKey?: keyof Row | ((row: Row, index: number) => string | number);
  /** Controlled selection: pass both to show checkboxes. */
  selected?: Array<string | number>;
  onSelectionChange?: (keys: Array<string | number>) => void;
  onRowClick?: (row: Row) => void;
  dense?: boolean;
  /** Content when rows is empty. Use an EmptyState for full-page tables. */
  empty?: React.ReactNode;
  /** Screen-reader caption. */
  caption?: string;
  className?: string;
}
export declare function DataTable<Row>(props: DataTableProps<Row>): React.ReactElement;

export interface TabItem { value: string; label: React.ReactNode; count?: number; icon?: IconLike; disabled?: boolean; panelId?: string }
export interface TabsProps {
  items: TabItem[];
  /** Controlled value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** aria-label for the tablist. */
  label?: string;
  className?: string;
}
export declare function Tabs(props: TabsProps): React.ReactElement;

export interface AlertProps {
  tone?: Tone;
  title?: React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}
export declare function Alert(props: AlertProps): React.ReactElement;

export interface ToastProps {
  tone?: Tone;
  title: React.ReactNode;
  message?: React.ReactNode;
  /** A single small Button (e.g. Undo). */
  action?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}
export declare function Toast(props: ToastProps): React.ReactElement;
/** Fixed bottom-end stack for toasts. The queue and timers are the app's job. */
export declare function ToastRegion(props: { children?: React.ReactNode }): React.ReactElement;

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  /** 'alertdialog' for destructive confirmations. */
  role?: 'dialog' | 'alertdialog';
  /** false: clicking the scrim does not close (forms with unsaved input). */
  dismissible?: boolean;
  /** Render inside the nearest positioned parent instead of the viewport (docs and previews). */
  contained?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export declare function Modal(props: ModalProps): React.ReactElement | null;

export interface NavItem { value: string; label: React.ReactNode; icon?: IconLike; href?: string; badge?: React.ReactNode }
export interface NavSection { title?: string; items: NavItem[] }
export interface SidebarNavProps {
  sections: NavSection[];
  /** value of the current item. */
  value?: string;
  onNavigate?: (value: string, item: NavItem) => void;
  /** Logo + product name. */
  brand?: React.ReactNode;
  /** User block, workspace switcher. */
  footer?: React.ReactNode;
  label?: string;
  className?: string;
}
export declare function SidebarNav(props: SidebarNavProps): React.ReactElement;

export interface PaginationProps {
  /** 1-based. */
  page: number;
  pageCount: number;
  onChange?: (page: number) => void;
  /** With pageSize, shows "Showing 1–20 of 340". */
  total?: number;
  pageSize?: number;
  className?: string;
}
export declare function Pagination(props: PaginationProps): React.ReactElement;

export interface EmptyStateProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: IconLike;
  actions?: React.ReactNode;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;

/* ---------- Client platform & infrastructure ---------- */

export interface TagProps { dot?: boolean; tone?: 'default' | 'accent'; className?: string; children?: React.ReactNode }
/** Lowercase mono label: release state, region, category. */
export declare function Tag(props: TagProps): React.ReactElement;

export interface StatusPillProps {
  status?: 'operational' | 'degraded' | 'maintenance' | 'outage';
  /** Link to the status page. */
  href?: string;
  /** Overrides the default text for the status. */
  children?: React.ReactNode;
  className?: string;
}
export declare function StatusPill(props: StatusPillProps): React.ReactElement;

export interface NavbarLink { label: React.ReactNode; href: string; current?: boolean }
export interface NavbarProps {
  /** Logo image + name. */
  brand: React.ReactNode;
  brandHref?: string;
  brandLabel?: string;
  links?: NavbarLink[];
  /** StatusPill, Sign in, primary CTA. */
  actions?: React.ReactNode;
  /** Force glass background on/off. Default: transparent until the page scrolls. */
  solid?: boolean;
  className?: string;
}
export declare function Navbar(props: NavbarProps): React.ReactElement;

export interface SectionHeadingProps {
  title: React.ReactNode;
  /** Final phrase set in the italic serif. */
  accent?: React.ReactNode;
  eyebrow?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  /** Mono fine print under the actions. */
  footnote?: React.ReactNode;
  size?: 'xl' | 'lg' | 'md';
  align?: 'start' | 'center';
  /** Heading element. Default h1 for xl, h2 otherwise. */
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Live "n / max" counter; needs a controlled value and maxLength. */
  showCount?: boolean;
}
export declare function Textarea(props: TextareaProps): React.ReactElement;

export interface ChoiceOption { value: string; label: React.ReactNode; description?: React.ReactNode; icon?: IconLike; disabled?: boolean }
export interface ChoiceGroupProps {
  label?: React.ReactNode;
  options: ChoiceOption[];
  /** Single: string | null. Multiple: string[]. */
  value?: string | string[] | null;
  onChange?: (value: any) => void;
  multiple?: boolean;
  /** Fixed column count; default auto-fill at 200px. */
  columns?: number;
  name?: string;
  error?: React.ReactNode;
  className?: string;
}
export declare function ChoiceGroup(props: ChoiceGroupProps): React.ReactElement;

export interface StepperProps { steps: React.ReactNode[]; /** 0-based. */ current: number; label?: string; className?: string }
export declare function Stepper(props: StepperProps): React.ReactElement;

export interface ServicePrice { amount: React.ReactNode; unit?: React.ReactNode; /** Default "from"; null hides it. */ prefix?: React.ReactNode | null }
export interface ServiceCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: IconLike;
  /** Lowercase category, shown as a Tag. */
  category?: string;
  /** e.g. <Badge tone="brand">New</Badge> */
  badge?: React.ReactNode;
  features?: React.ReactNode[];
  price?: ServicePrice;
  action?: React.ReactNode;
  href?: string;
  featured?: boolean;
  className?: string;
}
export declare function ServiceCard(props: ServiceCardProps): React.ReactElement;

export interface PricingCardProps {
  /** Lowercase plan name. */
  name: string;
  price: React.ReactNode;
  period?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  features?: React.ReactNode[];
  featured?: boolean;
  /** Tag above the card on the featured plan. */
  ribbon?: React.ReactNode;
  className?: string;
}
export declare function PricingCard(props: PricingCardProps): React.ReactElement;

export interface FlowNode {
  id: string;
  /** px from the canvas top-left. */
  x: number; y: number;
  title: React.ReactNode;
  meta?: React.ReactNode;
  state?: 'active' | 'waiting' | 'failed';
  ports?: 'in' | 'out' | 'both' | 'none';
  /** Default 184 × 56. */
  width?: number; height?: number;
}
export interface FlowEdge { from: string; to: string; label?: string; /** Animated, glowing. */ live?: boolean }
export interface FlowCanvasProps {
  nodes: FlowNode[];
  edges: FlowEdge[];
  /** Canvas height in px. Default 280. */
  height?: number;
  title?: React.ReactNode;
  meta?: React.ReactNode;
  status?: React.ReactNode;
  /** Accessible description of the flow. */
  ariaLabel?: string;
  className?: string;
  /** Rendered below the canvas (e.g. a RunLog). */
  children?: React.ReactNode;
}
export declare function FlowCanvas(props: FlowCanvasProps): React.ReactElement;

export interface RunLogItem { id?: string; time: React.ReactNode; text: React.ReactNode; status?: 'success' | 'running' | 'failed' | 'queued'; duration?: React.ReactNode }
export interface RunLogProps { title?: React.ReactNode; items: RunLogItem[]; className?: string }
export declare function RunLog(props: RunLogProps): React.ReactElement;

export interface CodeBlockProps {
  code: string;
  title?: React.ReactNode;
  language?: string;
  /** Shell style: prefix lines with $, lines starting with # are comments and are not copied. */
  prompt?: boolean;
  className?: string;
}
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;

declare global {
  interface Window {
    Disol: {
      Button: typeof Button; TextField: typeof TextField; Select: typeof Select; Checkbox: typeof Checkbox; Switch: typeof Switch;
      Badge: typeof Badge; Avatar: typeof Avatar; Card: typeof Card; StatCard: typeof StatCard; DataTable: typeof DataTable;
      Tabs: typeof Tabs; Alert: typeof Alert; Toast: typeof Toast; ToastRegion: typeof ToastRegion; Modal: typeof Modal;
      SidebarNav: typeof SidebarNav; Pagination: typeof Pagination; EmptyState: typeof EmptyState; Icon: typeof Icon;
      Tag: typeof Tag; StatusPill: typeof StatusPill; Navbar: typeof Navbar; SectionHeading: typeof SectionHeading; Textarea: typeof Textarea;
      ChoiceGroup: typeof ChoiceGroup; Stepper: typeof Stepper; ServiceCard: typeof ServiceCard; PricingCard: typeof PricingCard;
      FlowCanvas: typeof FlowCanvas; RunLog: typeof RunLog; CodeBlock: typeof CodeBlock;
    };
  }
}
