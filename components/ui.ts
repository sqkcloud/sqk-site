// Shared className constants for consistent button + card styling across the site.

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

/** Filled brand CTA with soft glow + hover lift. Use once per view for the primary action. */
export const btnPrimary = `${btnBase} bg-blue-600 px-6 py-3.5 text-white shadow-brand-glow hover:bg-blue-500 hover:shadow-brand-glow-lg hover:-translate-y-0.5`;

/** Neutral white button with hairline border. Secondary actions. */
export const btnSecondary = `${btnBase} border border-slate-200 bg-white px-6 py-3.5 text-slate-800 shadow-sm hover:border-slate-300 hover:shadow-card hover:-translate-y-0.5`;

/** Small outlined accent button (card action chips). */
export const btnChip =
  'inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-blue-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

/** Ghost text link with arrow affordance. */
export const btnGhost =
  'inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

/** Button on dark surfaces. */
export const btnDark = `${btnBase} border border-white/20 px-6 py-3.5 text-white hover:border-white/40 hover:bg-white/10`;

/** Standard surface card: hairline border, layered shadow, hover lift + glow. */
export const card =
  'rounded-2xl border border-slate-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover';

/** Subtle (non-lifting) panel for inset content blocks. */
export const panel = 'rounded-2xl border border-slate-200/80 bg-slate-50/80';
