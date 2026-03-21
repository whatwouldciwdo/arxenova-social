import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
