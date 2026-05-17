# SQK Beta Website

Official beta website source for **SQK**, built with **Next.js**, **React**, and **Tailwind CSS**.

This project is designed as an investor-facing and partner-facing corporate website centered on **QMedic** as the lead commercial product, supported by SQK's broader **Quantum-AI-HPC** platform.

## Project overview

The website presents:
- SQK company positioning and investment narrative
- QMedic as the primary commercial wedge
- QTAU, Qukkos, QPINN, and SuperQuantumStation as platform capabilities
- News, investor messaging, and contact workflows
- Public-release PDF white paper download

## Stack

- Next.js 14
- React 18
- Tailwind CSS 3
- TypeScript
- Lucide React icons

## Main pages

- `/` Home
- `/about` About SQK
- `/investors` Investor overview
- `/news` News and milestone page
- `/news/[slug]` News detail template
- `/contact` Contact page
- `/api/contact` Local backend endpoint for contact form submission

## Key features

- English default UI
- Korean and French language switching
- White / clean corporate design
- SQK branding and favicon applied
- Main hero image integrated into the homepage
- PDF white paper download link
- Investor-oriented business model, go-to-market, and roadmap messaging
- Dockerized deployment support

## Project structure

```text
app/                Next.js app routes
components/         Shared UI components and locale provider
lib/                Content and structured page copy
public/             Static assets, logos, images, white paper PDF, overview file
data/               Local form submission storage directory
Dockerfile          Production image build
/docker-compose.yml Local production-style container run
```

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in the browser:

```text
http://localhost:3000
```

## Production build

Build the project:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Docker deployment

Build and start with Docker Compose:

```bash
docker compose up -d --build
```

Default port mapping:

```text
http://localhost:30005
```

## White paper file

The public beta build uses the PDF white paper placed in:

```text
public/SQK_Investor_White_Paper_2026_Public_Release.pdf
```

## Contact form behavior

The contact form is connected to a local backend endpoint:

```text
POST /api/contact
```

Submitted messages are stored locally on the server side. Before a public production release, it is recommended to replace this with one of the following:
- SMTP mail delivery
- Amazon SES
- Resend
- HubSpot / CRM integration

## Beta release notes

This is a **beta deployment source package**.
Recommended checks before wider public release:
- review all public claims and partner references
- confirm all white paper links and PDF filenames
- replace local form storage with production messaging infrastructure
- remove unused draft assets if needed
- validate mobile layout, SEO metadata, and analytics tags

## Suggested next steps

- Add a production email delivery workflow for the contact form
- Add structured investor KPIs and roadmap visuals
- Add CMS-backed news management if frequent updates are expected
- Add analytics, consent handling, and SEO/Open Graph tuning

## License / usage

Internal SQK beta website source package for review, staging, and controlled public deployment.
