# Fundación Abuela Ecológica — Official Website

A multilingual web platform for **Fundación Abuela Ecológica**, a Costa Rican environmental foundation committed to environmental education, ecological restoration, biodiversity conservation, and community engagement.

🌐 **Website:** https://abuelaecologica.org  
📍 **Location:** San Carlos, Costa Rica

---

## Overview

This project is the official digital platform of Fundación Abuela Ecológica. It aims to communicate the foundation's mission, showcase environmental initiatives, promote community participation, and provide transparent access to its projects and activities.

The website is designed with a focus on:

- Multilingual accessibility and international reach.
- Responsive design across desktop and mobile devices.
- Performance and optimized image delivery.
- Search engine optimization (SEO).
- Maintainable and scalable architecture.
- Cloudflare-based deployment and delivery.

## Technology Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Build and runtime | Vinext, Vite |
| Hosting and deployment | Cloudflare Workers |
| Internationalization | Custom dictionary-based i18n |
| SEO | Metadata API, JSON-LD, sitemap, hreflang |

## Internationalization (i18n)

The platform uses a custom dictionary-based internationalization system to support multiple languages.

### Supported languages

| Language | Locale | Status |
|---|---|---|
| Spanish | `es` | Available |
| English | `en` | Available |
| German | `de` | Available |
| French | `fr` | Available |
| Portuguese | `pt` | Available |

### Future language roadmap

The internationalization strategy aims to incorporate all six official languages of the United Nations:

- Spanish (`es`)
- English (`en`)
- French (`fr`)
- Russian (`ru`)
- Chinese (`zh`)
- Arabic (`ar`)

German and Portuguese will remain additional supported languages.

Future implementations will also consider right-to-left (RTL) layout support for Arabic.

## Project Structure

```text
app/
├── [locale]/
│   ├── about/
│   ├── donate/
│   ├── nursery/
│   ├── projects/
│   ├── transparency/
│   ├── layout.tsx
│   └── page.tsx
├── globals.css
├── layout.tsx
└── sitemap.ts

components/
context/
data/
lib/
├── i18n/
│   ├── config.ts
│   ├── getDictionary.ts
│   └── dictionaries/
│       ├── es.json
│       ├── en.json
│       ├── de.json
│       ├── fr.json
│       └── pt.json
└── seo/
proxy.ts
public/
```

*The structure above represents the main application directories.*

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/mmurilloalfaro/abuela_ecologica.git
cd abuela_ecologica
```

Install dependencies:

```bash
npm install
```

### Development server

Start the local development environment:

```bash
npm run dev:vinext
```

The application will be available at:

```text
http://localhost:3001
```

### Production build

Run TypeScript validation:

```bash
npx tsc --noEmit
```

Build the application:

```bash
npm run build:vinext
```

## Deployment

The application is deployed using Cloudflare Workers and Vinext.

To deploy the application:

```bash
npm run deploy:vinext
```

Production URL:

https://abuelaecologica.org

## SEO and Web Optimization

The platform incorporates technical SEO practices, including:

- Localized metadata for supported languages.
- Canonical URLs.
- `hreflang` alternate language annotations.
- Open Graph and Twitter metadata.
- XML sitemap generation.
- Robots.txt configuration.
- JSON-LD structured data for the organization and website.
- Search engine indexing directives.

## Contributing

This repository is maintained for the development and continuous improvement of Fundación Abuela Ecológica's official website.

For proposed changes:

1. Create a feature branch.
2. Implement and validate your changes.
3. Run TypeScript validation and the production build.
4. Submit a Pull Request targeting the `dev` branch.

## Organization

**Fundación Abuela Ecológica**  
San Carlos, Costa Rica.

Environmental education, ecological restoration, biodiversity conservation, and community action.

🌱 *For San Carlos, Costa Rica, and the world... for those who have yet to be born.*