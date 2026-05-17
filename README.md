# SQK Photonic-Style Next.js Website v3

This version expands the earlier SQK white-theme site into a fuller corporate and investor-facing experience.

## Pages
- `/` Home
- `/about` About SQK
- `/investors` Investors overview with milestone timeline
- `/news` News / Insights list
- `/news/[slug]` News detail template
- `/contact` Contact form UI

## Features
- English default with Korean and French switching
- SQK corporate / investor positioning
- Hero image and cropped solution screenshots
- White paper download button
- Docker + docker-compose included

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run start
```

## Docker
```bash
docker compose up -d --build
```
