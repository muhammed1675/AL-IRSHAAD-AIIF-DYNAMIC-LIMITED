# AL-IRSHAAD AIIF DYNAMIC LIMITED

A modern, responsive corporate website for **AL-IRSHAAD AIIF DYNAMIC LIMITED**, bringing Travels & Tours, Media & TV, and Events & Entertainment together under one brand.

## Overview

This repository contains the **frontend-only** website for AL-IRSHAAD AIIF DYNAMIC LIMITED. It introduces the company, presents its three business divisions, showcases services and visual content, and directs visitors towards the appropriate enquiry channel.

The design uses a refined cream/off-white foundation, deep navy, restrained gold accents, premium imagery, clear typography, and a distinctive curved hero-image silhouette. The six pages share a consistent identity while using page-specific content and layouts.

## Website Pages

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Introduces the company and highlights its business divisions. |
| Travels & Tours | `/travels-tours` | Presents travel services and enquiry options. |
| Media & TV | `/media-tv` | Presents media services, portfolio content, and video areas. |
| Events & Entertainment | `/events-entertainment` | Presents event services and gallery content. |
| About Us | `/about` | Explains the company and its purpose. |
| Contact Us | `/contact` | Provides contact channels and a general enquiry interface. |

## Business Divisions

### Travels & Tours
- Visa application assistance and guidance
- Flight booking assistance
- Study-abroad guidance
- Work-travel assistance
- Hajj and Umrah packages
- Domestic and international tours

### Media & TV
- Photography and videography
- Television production
- Live-streaming presentation
- Graphic design and branding
- Video editing
- Islamic programmes and other video content

### Events & Entertainment
- Wedding planning and coordination
- Corporate events and conferences
- Event decoration and styling
- Entertainment services
- Event logistics and coordination

Service descriptions, packages, pricing, contact details, and other company claims should be confirmed by the company before publication. The website must not imply guaranteed visa approvals, guaranteed employment, or other outcomes that cannot be promised.

## Design Approach

- Six connected pages with shared navigation, footer, and branding
- Responsive layouts for desktop, tablet, and mobile
- A distinctive curved hero-image silhouette used as a recognisable visual feature
- Consistent cream, navy, and gold visual language
- Relevant, high-quality imagery for each business division
- Reusable React components and consistent interface patterns
- Clear calls to action and accessible navigation
- Replaceable placeholders for unconfirmed contact details and media URLs

The reference designs are visual guidance, not pixel-perfect templates. Each page should reflect its own purpose while maintaining the overall visual identity.

## Project Scope

**This repository contains the frontend only.** It does not currently include:

- A backend or server-side API
- Database integration
- Authentication or user accounts
- An admin dashboard or content management system
- Online payments
- Automated travel reservations or booking
- Server-side enquiry storage
- Automated email delivery

Interactive forms must not falsely claim that information has been saved or sent to a server. Where configured, an enquiry flow can validate fields in the browser and prepare a WhatsApp message for the visitor to review and send. WhatsApp actions require the company's confirmed phone number.

## Technology Stack

The project is built with:

- **React 18** — UI components
- **TypeScript** — typed frontend code
- **Vite** — development server and production build
- **React Router** — page navigation
- **Tailwind CSS** — styling utilities
- **Framer Motion** — interface animation
- **Lucide React** — icons

The dependencies and scripts in `package.json` are the source of truth if the stack changes.

## Getting Started

### Prerequisites

Install a current compatible version of [Node.js](https://nodejs.org/) with npm.

### 1. Clone the repository

```bash
git clone https://github.com/muhammed1675/AL-IRSHAAD-AIIF-DYNAMIC-LIMITED.git
cd AL-IRSHAAD-AIIF-DYNAMIC-LIMITED
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/                  # Static images and public assets
├── src/
│   ├── components/          # Shared UI and layout components
│   ├── data/                # Company settings and page content
│   ├── hooks/               # Reusable React hooks
│   ├── pages/               # Six website pages
│   ├── types/               # TypeScript types
│   ├── utils/               # Helpers such as WhatsApp and YouTube URLs
│   ├── App.tsx              # Application routes and page composition
│   ├── index.css            # Global styles
│   └── index.tsx            # Frontend entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Company Configuration

Company-wide details are centralised in `src/data/company.ts`. Before launch, update this file with verified information:

- Official telephone and WhatsApp number
- Official email address
- Office address and opening hours, if applicable
- Google Maps URL, if applicable
- Social media profile URLs
- YouTube channel and live-stream URLs

Page-specific content is organised in the `src/data/` directory. Review the content files before launch and replace placeholders with company-approved text and media.

**Do not invent or publish** unconfirmed testimonials, statistics, awards, client names, office details, prices, or other business claims.

## Deployment

The frontend can be deployed to a compatible static hosting or frontend platform that supports Vite. Configure the platform to install dependencies and run the production build command:

```bash
npm run build
```

Before launch, verify that:

- All six routes load and internal links work.
- Desktop, tablet, and mobile layouts are usable.
- The curved hero images crop correctly without being distorted.
- Images, icons, and fonts load as expected.
- Forms clearly communicate their frontend-only behaviour.
- WhatsApp links use the confirmed company number.
- YouTube embeds use valid, approved URLs.
- Page titles and metadata are appropriate.
- No development-only or unconfirmed placeholder content is accidentally published.

## Security

- Do not commit `.env` files, API keys, passwords, access tokens, or private credentials.
- Keep `node_modules/` and production build output out of version control.
- The `.gitignore` file should be reviewed before the first commit.
- Do not add secrets to frontend code; anything shipped to a browser is publicly inspectable.

## Project Status

**Status: In development.**

The frontend should be reviewed and tested before being treated as production-ready. Backend features, if needed in the future, should be scoped and implemented as a separate phase.

## License

No open-source licence has been specified. Unless a licence is added to the repository, do not assume that the code, brand, or visual assets are licensed for reuse or redistribution.

---

**AL-IRSHAAD AIIF DYNAMIC LIMITED**  
*Travels & Tours · Media & TV · Events & Entertainment*
