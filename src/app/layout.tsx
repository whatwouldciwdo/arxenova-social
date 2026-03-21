import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-DL9EGEK5XR";

export const metadata: Metadata = {
  metadataBase: new URL("https://arxenovasocial.com"),
  title: "Arxenova-Social | Creative Social Media Agency",
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
  openGraph: {
    title: "Arxenova-Social | Creative Social Media Agency",
    description:
      "We craft digital experiences that captivate audiences and drive growth.",
    type: "website",
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
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
