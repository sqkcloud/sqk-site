# SQK Website Revision Notes — 2026-08-26

## Scope
- Restored the original homepage design and section structure from `sqk-site-main(1).zip`.
- Preserved the original full-width hero image position, height behavior, navigation structure, cards, spacing model, and section order.
- Did not apply the previous two-column hero redesign.

## Changes made
- Increased homepage content container width from `max-w-7xl` to `max-w-[1600px]`.
- Increased hero text content width while keeping the hero image in its original top full-width position.
- Updated public-facing homepage copy to more formal SQK corporate language aligned with the supplied IR material.
- Replaced temporary/test-oriented solution labels (`Paper / News / Demo`) with `Overview / Updates / Contact` while preserving the same three-button card layout.
- Replaced `Open source` in News cards with `View source`.
- Replaced the homepage roadmap label `Investor KPI` with `Milestone`.
- Renamed `Use of proceeds` to `Execution priorities` for the public homepage while keeping the section/card layout unchanged.

## Files changed
- `app/page.tsx`
- `lib/content.ts`
