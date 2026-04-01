# 🌿 Ariva

[![Next.js](https://img.shields.io/badge/Next.js-v14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

> Premium natural wellness products, argan oil, and botanicals — crafted with excellence in Agadir, Morocco.

**Ariva** is a modern e-commerce web application for showcasing and selling premium organic products such as pure argan oil, natural honey, spices, and herbal tinctures. It is completely built from the ground up prioritizing a premium, ivory-green themed aesthetic with extensive use of organic shapes and smooth micro-animations.

## ✨ Key Features

- **🛍️ Complete Product Catalog**: Displays a wide variety of natural Moroccan produce including Honey, Spices, Essential Oils, Argan Oil, and Natural Cosmetics.
- **📱 Premium Responsive UI/UX**: Ivory-themed interface with natural, rounded aesthetics seamlessly optimized for mobile and desktop screens.
- **⚡ Performance First**: Built on Next.js App Router for lightning-fast server-side rendering, smooth client routing, and supreme SEO.
- **🔍 SEO & Metadata Prepared**: Integrated JSON-LD structured data and optimized meta tags focused on natural wellness keywords.
- **💬 Direct-to-WhatsApp Ordering**: Frictionless checkout experience that directs users securely to WhatsApp.
- **🎨 Interactive Components**: High-fidelity dynamic elements, search overlays, and interactive product galleries powered by Radix UI and Tailwind CSS.
- **🌍 Localization**: Prepared entirely with an international, premium brand messaging model.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) Ready

## 📦 Data being used (Data Layer)

All main application data is centrally managed locally within `lib/products-data.ts`. This acts as a robust mock database until a custom backend or CMS is attached.

### Categories Available (`ProductCategory`)
- **Honey** (Pure Middle Atlas Honey)
- **Herbal Tinctures & Capsules**
- **Essential Oils & Aromatherapy**
- **Argan Oil**
- **Natural Cosmetics**
- **Spices** (Premium Saffron, Ras El Hanout, etc.)

### Product Data Structure (`Product`)
Every product displayed uses the following properties:
- `id`: Unique string identifier
- `name`: Product display name
- `shortDescription`: Used in product cards and search snippets
- `longDescription`: Full narrative description on the product details page
- `mainImage`: High-resolution hero image
- `thumbnailImages`: Array of additional gallery images 
- `category`: Matches one of the defined `ProductCategory`
- `price`: Pricing in MAD (Moroccan Dirham)
- `stock`: Current availability counter
- `isPopular`: Highlights product in "Best Sellers" collections
- `city`: Sourcing region (e.g., Agadir, Casablanca, Ifrane)

## 🗺️ Page Structure

- `app/page.tsx` — **Home Page**: Features hero banners, categories, best sellers, and subscription call-to-actions.
- `app/about/page.tsx` — **About Page**: Deep dive into Ariva's ethical herbalism, transparency, organic metrics (8560+ buyers), and full corporate team transparency (CEO, Product Owners).
- `app/products/page.tsx` — **Shop Catalog**: Filterable listings of the entire product base.
- `app/products/[id]/page.tsx` — **Product Detail Page**: Intensive breakdown of product stats, image galleries, and WhatsApp checkout action.
- `app/categories/page.tsx` — **Categories Overview**: Browse collections grouped by category.
- `app/contact/page.tsx` — **Contact Page**: Responsive contact forms and physical address placement (Agadir, Morocco).
- `app/(informational)/...` — **Support Hub**: FAQ, Shipping Info, Return Policy, and Privacy Pages.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or pnpm

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/ariva-wellness.git
   cd ariva-wellness
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to experience the application.

## 📄 License & Brand Identity

The "Ariva" name, aesthetic design concept, and all corresponding branding (including natural wellness, argan oil sourcing context, and typography) are proprietary. All rights reserved.
