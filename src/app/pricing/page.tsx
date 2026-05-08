import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingClient from "./PricingClient";

const SITE_URL = "https://arxenovasocial.com";

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/pricing`,
  "name": "Harga Jasa Pembuatan Website Profesional — Arxenova-Social",
  "description":
    "Paket harga transparan untuk jasa pembuatan website landing page, company profile, dan e-commerce profesional dari Arxenova-Social.",
  "url": `${SITE_URL}/pricing`,
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": `${SITE_URL}/pricing`,
      },
    ],
  },
  "mainEntity": [
    {
      "@type": "Offer",
      "name": "Jasa Pembuatan Landing Page — Starter Pack",
      "description": "Landing page responsif untuk campaign, promosi produk tunggal, atau branding awal bisnis.",
      "lowPrice": "6000000",
      "highPrice": "8000000",
      "priceCurrency": "IDR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Arxenova-Social" }
    },
    {
      "@type": "Offer",
      "name": "Jasa Pembuatan Website Company Profile",
      "description": "Multi-page website untuk company profile, jasa, dan brand profesional dengan CMS dan SEO.",
      "lowPrice": "6000000",
      "highPrice": "12000000",
      "priceCurrency": "IDR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Arxenova-Social" }
    },
    {
      "@type": "Offer",
      "name": "Jasa Pembuatan Website E-Commerce & Ticketing System",
      "description": "Toko online, event management, dan booking system dengan payment gateway Midtrans/Xendit.",
      "lowPrice": "17000000",
      "highPrice": "40000000",
      "priceCurrency": "IDR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Arxenova-Social" }
    },
    {
      "@type": "Offer",
      "name": "Jasa Pembuatan Sistem ERP Enterprise",
      "description": "Solusi ERP terintegrasi end-to-end untuk perusahaan, manufaktur, distribusi, dan high-end business.",
      "lowPrice": "55000000",
      "highPrice": "250000000",
      "priceCurrency": "IDR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Arxenova-Social" }
    }
  ],
};

export const metadata: Metadata = {
  title:
    "Harga Jasa Pembuatan Website Cilegon & Serang — Landing Page, Company Profile, Toko Online | Arxenova-Social",
  description:
    "Cek harga jasa pembuatan website profesional di Cilegon, Serang & Banten dari Arxenova-Social. Landing Page mulai Rp 2.500.000, Company Profile Rp 6.500.000, E-Commerce Rp 15.000.000. Desain custom, SEO-friendly, responsif.",
  keywords: [
    "harga jasa pembuatan website",
    "jasa pembuatan website Cilegon",
    "jasa pembuatan website Serang",
    "biaya buat website profesional Banten",
    "jasa website company profile Cilegon",
    "harga website toko online Serang Banten",
    "jasa landing page murah Cilegon",
    "paket website bisnis Serang",
    "biaya website e-commerce Banten",
    "jasa web developer Cilegon Serang",
    "harga website responsif SEO Banten",
    "jasa pembuatan website UMKM Cilegon",
    "tarif website profesional Serang 2025",
    "website company profile Cilegon",
  ],
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title:
      "Harga Jasa Pembuatan Website Cilegon & Serang | Arxenova-Social",
    description:
      "Jasa pembuatan website di Cilegon, Serang & Banten. Landing Page Rp 2,5 jt · Company Profile Rp 6,5 jt · E-Commerce Rp 15 jt. Desain custom & SEO-friendly.",
    type: "website",
    url: `${SITE_URL}/pricing`,
    siteName: "Arxenova-Social",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Harga Jasa Pembuatan Website — Arxenova-Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harga Jasa Pembuatan Website Cilegon & Serang | Arxenova-Social",
    description:
      "Jasa website Cilegon & Serang. Landing Page Rp 2,5 jt · Company Profile Rp 6,5 jt · E-Commerce Rp 15 jt. Transparan & berkualitas.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Navbar />
      <PricingClient />
      <Footer />
    </main>
  );
}
