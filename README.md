# Smart Irrigation Digital Twin System

Professional React/Vite landing page for an AI + IoT + Digital Twin smart irrigation platform focused on smarter water management for modern agriculture.

## Features

- Premium dark landing page with emerald accents and realistic agriculture imagery
- Sticky responsive navbar with mobile menu and smooth section navigation
- Hero section with dashboard mockup, KPI badges, and CTA links
- Full section flow: stats, problem, features, Digital Twin, dashboard, process, water management, AI forecasting, market, benefits, testimonials, contact, CTA, and footer
- Recharts dashboard preview with soil moisture, temperature, humidity, water usage, irrigation status, sensor health, and AI recommendation
- WhatsApp and email direct contact links, configured through Vite environment variables
- Logo asset wired into navbar, footer, and browser favicon

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Recharts

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Contact Configuration

Create a local `.env` file from `.env.example`:

```txt
VITE_WHATSAPP_NUMBER=213XXXXXXXXX
VITE_CONTACT_EMAIL=your-email@example.com
```

Use the WhatsApp number in international format without `+`, spaces, parentheses, or dashes.

Example Algeria format:

```txt
213555123456
```

## Logo Replacement

The active logo file is:

```txt
public/assets/logo/smart-irrigation-logo.svg
```

Replace that file with the final brand logo when available. Keep the same filename, or update the logo path in `src/components/landing/BrandLogo.jsx` and `index.html`.

The required alt text is already applied:

```txt
Smart Irrigation Digital Twin System logo
```

## Assets

The page currently uses optimized remote agriculture images. For a fully offline delivery, place production images under:

```txt
public/assets/images/
```

Recommended image themes:

- Irrigated agricultural field for the hero
- Drip or sprinkler irrigation for water management
- Farmer or smart farming with tablet for AI forecasting
- Field, greenhouse, and crop imagery for market and CTA sections

## Notes

This project is frontend-only. It does not create backend APIs, submit contact forms, or modify backend logic.
