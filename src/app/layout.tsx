import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const GA_MEASUREMENT_ID = "G-DL9EGEK5XR";
const GOOGLE_ADS_ID = "AW-18032333414";
const SITE_URL = "https://arxenovasocial.com";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "Arxenova-Social",
  "url": SITE_URL,
  "description": "Creative social media agency specializing in brand strategy, content creation, and digital marketing.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Arxenova-Social",
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6281285313084",
    "contactType": "customer service",
    "availableLanguage": ["Indonesian", "English"]
  },
  "email": "hello@arxenovasocial.com",
  "sameAs": [
    "https://wa.me/+6281285313084"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arxenova-Social | Creative Social Media Agency",
    template: "%s | Arxenova-Social",
  },
  description:
    "Arxenova-Social is a creative social media agency specializing in brand strategy, content creation, and digital marketing that drives real results.",
  keywords: [
    "social media agency",
    "creative agency",
    "digital marketing",
    "brand strategy",
    "content creation",
    "Arxenova",
  ],
  authors: [{ name: "Arxenova-Social", url: SITE_URL }],
  creator: "Arxenova-Social",
  publisher: "Arxenova-Social",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Arxenova-Social | Creative Social Media Agency",
    description:
      "We craft digital experiences that captivate audiences and drive growth.",
    type: "website",
    url: SITE_URL,
    siteName: "Arxenova-Social",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Arxenova-Social — Creative Social Media Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arxenova-Social | Creative Social Media Agency",
    description:
      "We craft digital experiences that captivate audiences and drive growth.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@arxenovasocial",
    site: "@arxenovasocial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts CDN — eliminates DNS + TLS overhead */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Non-blocking font load — replaces render-blocking CSS @import */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;700;800&display=swap"
        />
        {/* Preload LCP hero image so browser discovers it early in the critical path */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-art.png"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
