import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQClient from "./FAQClient";

const SITE_URL = "https://arxenovasocial.com";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu Arxenova-Social dan layanan apa yang ditawarkan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arxenova-Social adalah creative social media agency yang menyediakan layanan manajemen media sosial, pembuatan konten kreatif, strategi brand, iklan digital (Meta Ads & Google Ads), desain grafis, dan analitik performa untuk bisnis di Indonesia dan internasional."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya jasa social media management dari Arxenova-Social?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Harga paket social media management kami mulai dari Rp 1.500.000/bulan untuk paket Starter, Rp 3.500.000/bulan untuk paket Growth, dan Rp 7.500.000/bulan untuk paket Pro. Kami juga menawarkan paket custom sesuai kebutuhan bisnis Anda."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah Arxenova-Social melayani klien di luar Jakarta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami melayani klien di seluruh Indonesia termasuk Jakarta, Surabaya, Bandung, Bali, Medan, Makassar, dan kota-kota lainnya. Semua layanan kami dapat dilakukan secara remote dengan komunikasi yang intensif melalui platform digital."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama proses onboarding sebelum campaign dimulai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses onboarding kami berlangsung sekitar 5–7 hari kerja. Selama periode ini kami melakukan brand audit, riset kompetitor, penentuan target audience, dan penyusunan content strategy awal sebelum konten pertama dipublikasikan."
      }
    },
    {
      "@type": "Question",
      "name": "Platform media sosial apa saja yang dikelola oleh Arxenova-Social?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami mengelola Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube, dan Pinterest. Pilihan platform disesuaikan dengan target audience dan tujuan bisnis klien."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah ada kontrak jangka panjang yang harus ditandatangani?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami menawarkan kontrak minimum 3 bulan agar hasil campaign dapat terlihat secara optimal. Setelah itu, Anda bebas melanjutkan atau tidak tanpa penalti. Kami tidak menyukai klien yang terjebak kontrak, kami ingin Anda bertahan karena hasil yang nyata."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara mengukur keberhasilan campaign media sosial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami menggunakan KPI yang disepakati bersama seperti pertumbuhan followers, engagement rate, reach, impressions, click-through rate (CTR), dan konversi. Laporan performa dikirimkan setiap bulan secara transparan melalui dashboard khusus."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah Arxenova-Social juga menangani iklan berbayar (paid ads)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami menangani Meta Ads (Instagram & Facebook) dan Google Ads. Biaya iklan berbayar tidak termasuk dalam paket bulanan kami—budget iklan dikelola terpisah dan sepenuhnya transparan kepada klien."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana proses revisi konten yang telah dibuat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Setiap konten melalui proses approval sebelum dipublikasikan. Klien mendapatkan 2 kali revisi untuk setiap konten. Konten dikirimkan melalui content calendar yang dapat diakses klien kapan saja."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah Arxenova-Social bisa membantu bisnis yang baru mulai di media sosial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tentu! Kami sangat cocok untuk bisnis yang baru membangun kehadiran digital. Tim kami akan membantu mulai dari setup akun, brand identity di media sosial, hingga strategi pertumbuhan organik dan berbayar yang terstruktur."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan Seputar Jasa Social Media Agency | Arxenova-Social",
  description:
    "Temukan jawaban lengkap seputar layanan social media management, harga paket, proses kerja, dan cara kerja Arxenova-Social sebagai creative digital agency terpercaya di Indonesia.",
  keywords: [
    "FAQ jasa pembuatan website",
    "pertanyaan jasa website Cilegon",
    "biaya pembuatan website Serang Banten",
    "jasa kelola media sosial Cilegon",
    "agensi digital marketing Banten",
    "harga content creator Serang",
    "social media marketing FAQ",
    "cara kerja jasa website Cilegon",
    "jasa iklan Facebook Instagram Banten",
    "manajemen media sosial Cilegon Serang",
  ],
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: "FAQ — Pertanyaan Seputar Jasa Social Media Agency | Arxenova-Social",
    description:
      "Jawaban lengkap seputar layanan, harga, dan proses kerja Arxenova-Social — creative social media agency terpercaya di Indonesia.",
    type: "website",
    url: `${SITE_URL}/faq`,
    siteName: "Arxenova-Social",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "FAQ Arxenova-Social — Creative Social Media Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Pertanyaan Seputar Jasa Social Media Agency | Arxenova-Social",
    description:
      "Jawaban lengkap seputar layanan, harga, dan proses kerja Arxenova-Social.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function FAQPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <FAQClient />
      <Footer />
    </main>
  );
}
