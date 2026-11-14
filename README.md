# CareFlow — Patient Follow-up & Care Coordination (Next.js)
### By CAPSIC CARE (Care Beyond Consultation)

CareFlow is a modern **Next.js 14 App Router** application built as a dedicated service vertical under **CAPSIC CARE**. It is designed specifically for **independent doctors and individual doctor chambers in Howrah and Kolkata** (MBBS practitioners, general physicians, solo medical practitioners, and private specialist chambers).

---

## 1. Visual & Design System Inheritance

CareFlow directly mirrors the visual language, design system, and brand assets of the official **CAPSIC CARE** website ([https://www.capsic.in/](https://www.capsic.in/)):

- **Official Reference**: `https://www.capsic.in/`
- **Color Identity**:
  - Primary Brand Teal: `#0d9488` (Teal 600), `#0f766e` (Teal 700), `#115e59` (Teal 800), `#134e4a` (Teal 900), `#042f2e` (Teal 950), `#f0fdfa` (Teal 50).
  - Dark Neutral Slate: `#0f172a` (Slate 900) for footers/headings, `#020617` (Slate 950), `#334155` (Slate 700), `#e2e8f0` (Slate 200).
  - Accent / WhatsApp Green: `#059669` (Emerald 600), `#10b981` (Emerald 500).
- **Typography & Font Hierarchy**:
  - Primary Font: **Geist / Inter** (`next/font/google` and CSS variable `--font-geist-sans`).
  - Code / Figures: **Geist Mono** (`--font-geist-mono`).
  - Bold, authoritative clinician-respecting headlines, tracking, and leading.
- **Header & Navigation**:
  - Top announcement notice bar (`bg-gradient-to-r from-teal-800 via-teal-900 to-slate-950 text-white`) with helpline `8337077656` and WhatsApp desk.
  - Floating glass navigation bar with rounded bottom (`rounded-b-2xl md:rounded-b-3xl`), Capsic Care logo, and CareFlow co-branding.
- **Buttons & Cards**:
  - Primary buttons: `rounded-xl font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/25`.
  - Secondary buttons: `rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300`.
  - Cards: `rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300`.
- **Footer**:
  - 4-column dark slate footer matching capsic.in with clinic address: *Bankra Bazar, Dewan Para Road, Domjur, Howrah – 711403*, contact phone `+91 8337077656`, and email `capsiccare@gmail.com`.

---

## 2. Technical Architecture & Hosting Isolation

As required:
- The existing CAPSIC CARE website remains unchanged.
- CareFlow will be hosted at:
  ```
  https://capsic.in/careflow/
  ```
- In `next.config.mjs`, `basePath` is configurable via `NEXT_PUBLIC_BASE_PATH`:
  ```javascript
  const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    reactStrictMode: true,
    images: { unoptimized: true }
  };
  ```
- Deployable as a standalone Node/Next.js instance or exportable to static HTML/CSS.

---

## 3. Project File Structure

```
c:\Users\FusionIT\Desktop\careflow\
├── app/
│   ├── layout.tsx                  # Root layout with Geist/Inter font, metadata & viewport
│   ├── page.tsx                    # Main Page composing all doctor-focused sections
│   └── globals.css                 # Tailwind directives, Capsic Care glassmorphism & sliders
├── components/
│   ├── TopNoticeBar.tsx            # Top announcement gradient bar with helpline & WhatsApp
│   ├── Header.tsx                  # Floating glass nav bar, co-branding & mobile menu
│   ├── Hero.tsx                    # Hero section with doctor messaging & live timeline card
│   ├── ChamberReality.tsx          # 6 empathetic solo doctor chamber challenges
│   ├── HowItWorks.tsx              # 3-step frictionless workflow (zero software burden)
│   ├── PracticeCalculator.tsx      # Interactive practice planning & financial calculator
│   ├── FreeTrialSpotlight.tsx      # 3-Month Free Trial spotlight & inline registration form
│   ├── LocalCoverage.tsx           # Howrah & Kolkata chamber networks & medical pockets
│   ├── DoctorTestimonials.tsx      # Real practitioner feedback with verified Capsic Care photos
│   ├── DoctorFAQ.tsx               # Clinician FAQ accordion (zero medical advice by staff, etc.)
│   ├── Footer.tsx                  # 4-column dark footer matching capsic.in & final CTA
│   └── TrialModal.tsx              # Interactive 3-Month Free Trial dialog & WhatsApp fast-track
├── public/
│   ├── assets/
│   │   ├── brand/                  # Capsic Care logo and CareFlow SVG wordmarks
│   │   └── doctors/                # Authentic Capsic Care doctor credentials & photos
│   └── favicon.ico
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. How to Run Locally

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Serve
```bash
npm run build
npm start
```
Starts the high-performance Next.js production server on port 3000.
