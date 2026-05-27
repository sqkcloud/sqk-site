# SQK Site — UI Polish & Refine (Design)

**Date:** 2026-05-27
**Scope:** Visual/UX polish of the marketing site. No copy changes, no new dependencies, no layout-structure rewrites.
**Direction (user-approved):** Polish & refine · refine current blue · subtle & tasteful motion.

## Goal

Make the SQK marketing site look more beautiful and more professional while keeping the existing clean corporate structure, sections, and content. Raise the bar to match top deep-tech sites (IBM Quantum, Linear, Vercel, Stripe) through a deliberate design *system* rather than decorative effects.

## Constraints discovered

- **Offline build environment.** Google Fonts unreachable (`NET_FAIL`). `next/font/google` fetches at build time and would break the build. **Decision:** no web-font download. Use a tuned native font stack (`Inter` listed first for future-proofing, then `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, ...`). The bulk of the "professional" gain is in the type *system* (modular scale, optical tracking, weight discipline, line-height), not the font file. Bonus: zero layout shift, zero dependency, faster.
- `hero-main.png` (2.7MB) exists and is reused on `/about`. Keep it; cap height and blend its bottom edge into the page. Do not remove.
- Stack: Next 16, React 18, Tailwind 3, lucide-react. All pages are client components reading `lib/content.ts` + `useLocale`.

## Design system

### Typography
- Native font stack via `tailwind.config` `fontFamily.sans`.
- Heading tracking tightened (display sizes get `-0.02em`/`tracking-tight`), `text-balance` on headlines, `text-pretty` on body. Restrained weights: 400/500/600/700.
- `font-feature-settings` + antialiasing in `globals.css`.

### Color (refine blue)
- Keep Tailwind blue as the brand hue; standardize usage. Add semantic tokens in `tailwind.config`:
  - `brand` (= blue scale anchor), `ink` (slate-950), `surface` neutral tiers.
- Accent used deliberately: badge, primary CTA, hover/active states, focus ring — not on every border.

### Depth & borders
- Replace hard `border-slate-200` + tiny shadow with hairline rgba borders + layered low-opacity shadows.
- Tokens in `tailwind.config` `boxShadow`: `soft`, `card`, `card-hover`, `brand-glow`.
- `backgroundImage` tokens: `grid` (dot grid), `hero-glow` (radial brand glow).

### Buttons (real hierarchy)
Shared className constants in `components/ui.tsx`:
- **Primary** — filled brand, soft brand-glow shadow, hover lift.
- **Secondary** — white, hairline border, subtle hover shadow.
- **Ghost** — text + arrow, hover translate/underline.
Fixes hero (3 identical outline buttons today) and unifies subpages.

### Motion (subtle)
- `components/reveal.tsx` — IntersectionObserver wrapper, fade + 12px rise, 200–250ms ease-out, optional `delay`. Respects `prefers-reduced-motion` (renders fully visible). Wraps section blocks.
- Hover transitions on cards/buttons.

### Accessibility
- Restore tasteful `:focus-visible` ring for keyboard users (current code zeroes focus rings) while keeping mouse interaction clean.
- Maintain contrast; add `::selection` color.

## Affected files

| File | Change |
|---|---|
| `tailwind.config.ts` | fontFamily, brand/ink/surface colors, layered shadows, grid/glow backgrounds, reveal keyframes |
| `app/globals.css` | base typography, focus-visible, selection, hero bg utilities, refined `.asset-frame`, card/reveal helpers, reduced-motion |
| `components/ui.tsx` (new) | button className constants |
| `components/reveal.tsx` (new) | scroll-reveal wrapper |
| `components/site-shell.tsx` | header (active CTA, nav underline, logo lockup), footer (brand + link columns), `SectionTitle` accent rule |
| `app/page.tsx` | hero bg + button hierarchy, proof strip spacing, unified cards + hover, section rhythm, motion wrappers |
| `app/about|contact|investors|news/*` | apply unified card/button/spacing for consistency |
| `app/layout.tsx` | font class hook (minimal) |

## Out of scope (YAGNI)
- No copy/content edits, no i18n changes, no new sections, no dark mode, no new deps, no image re-authoring.

## Success criteria
- `next build` (or dev compile) passes with no new errors.
- Clear button hierarchy; consistent card style with hover; tightened typographic scale; deliberate accent use; subtle scroll reveal; refined header/footer; consistency across all pages.
