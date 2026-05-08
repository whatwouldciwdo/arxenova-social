"use client";

import { useState } from "react";
import Link from "next/link";
import "./FAQ.css";

/* ─────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────── */
const IconGeneral = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconServices = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconPricing = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const IconProcess = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconQuestion = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#00e5cc", marginBottom: "16px" }}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const faqCategories = [
  {
    id: "general",
    label: "Umum",
    icon: <IconGeneral />,
  },
  {
    id: "services",
    label: "Layanan",
    icon: <IconServices />,
  },
  {
    id: "pricing",
    label: "Harga",
    icon: <IconPricing />,
  },
  {
    id: "process",
    label: "Proses Kerja",
    icon: <IconProcess />,
  },
];

const faqs = [
  {
    category: "general",
    question: "Apa itu Arxenova-Social dan layanan apa yang ditawarkan?",
    answer:
      "Arxenova-Social adalah <strong>creative digital agency</strong> yang menyediakan layanan pembuatan website, manajemen media sosial, pembuatan konten kreatif, strategi brand, iklan digital, desain grafis, dan analitik performa untuk bisnis di Indonesia.",
  },
  {
    category: "general",
    question: "Apakah Arxenova-Social melayani klien di luar Banten?",
    answer:
      "Ya, kami melayani klien di <strong>seluruh Indonesia</strong> termasuk Jakarta, Surabaya, Bandung, Bali, Medan, Makassar, dan kota-kota lainnya. Semua layanan dapat dilakukan secara remote dengan komunikasi intensif melalui platform digital.",
  },
  {
    category: "general",
    question: "Apa yang membedakan Arxenova-Social dari agency lain?",
    answer:
      "Kami mengutamakan <strong>hasil yang terukur</strong>, bukan sekadar desain yang bagus. Setiap strategi didasarkan pada data dan riset mendalam, dengan tim kreatif yang berpengalaman di berbagai industri. Kami juga memberikan laporan performa yang transparan.",
  },
  {
    category: "services",
    question: "Platform website apa yang digunakan oleh Arxenova-Social?",
    answer:
      "Kami menggunakan berbagai platform modern seperti <strong>Next.js, React, Node.js</strong> untuk custom development, hingga WordPress dan Shopify bergantung pada skala dan kebutuhan bisnis klien agar investasi lebih efektif.",
  },
  {
    category: "services",
    question: "Apakah Arxenova-Social juga menangani iklan berbayar (paid ads)?",
    answer:
      "Ya, kami menangani <strong>Meta Ads</strong> (Instagram & Facebook) dan <strong>Google Ads</strong>. Budget iklan dikelola secara terpisah dan sepenuhnya transparan—klien dapat memantau pengeluaran dan hasil iklan kapan saja.",
  },
  {
    category: "services",
    question: "Apakah Arxenova-Social bisa membantu bisnis baru untuk go digital?",
    answer:
      "Tentu! Kami sangat cocok untuk bisnis yang baru membangun kehadiran digital. Tim kami akan membantu mulai dari <strong>pembuatan website, setup akun medsos, brand identity</strong>, hingga strategi pertumbuhan yang terstruktur.",
  },
  {
    category: "services",
    question: "Apakah Arxenova-Social menyediakan layanan desain grafis terpisah?",
    answer:
      "Ya, kami menyediakan layanan desain grafis seperti pembuatan logo, company profile cetak, banner, dan aset visual lainnya yang sesuai dengan branding bisnis Anda.",
  },
  {
    category: "pricing",
    question: "Berapa biaya pembuatan website di Arxenova-Social?",
    answer:
      "Paket pembuatan website kami mulai dari <strong>Rp 2.500.000</strong> untuk Landing Page, <strong>Rp 6.500.000</strong> untuk Company Profile, dan <strong>Rp 15.000.000</strong> untuk E-Commerce. Kami juga menyediakan solusi ERP Enterprise.",
  },
  {
    category: "pricing",
    question: "Apakah harga website sudah termasuk domain dan hosting?",
    answer:
      "Ya, semua harga paket sudah termasuk <strong>GRATIS domain (.com) dan hosting premium</strong> selama 1 tahun pertama. Kami yang akan mengurus seluruh konfigurasi teknis dari awal hingga website Anda live.",
  },
  {
    category: "pricing",
    question: "Apakah ada biaya maintenance bulanan?",
    answer:
      "Kami menyediakan paket maintenance opsional mulai dari <strong>Rp 350.000/bulan</strong> yang mencakup update keamanan, backup rutin, monitoring uptime, perbaikan bug, dan support teknis.",
  },
  {
    category: "process",
    question: "Berapa lama waktu pembuatan website?",
    answer:
      "Bergantung paket: Landing Page <strong>5–10 hari kerja</strong>, Company Profile <strong>14–21 hari kerja</strong>, E-Commerce <strong>30–45 hari kerja</strong>. Estimasi dapat berubah sesuai kompleksitas dan kecepatan feedback.",
  },
  {
    category: "process",
    question: "Bagaimana proses revisi desain atau konten?",
    answer:
      "Setiap project melalui proses <strong>approval sebelum finalisasi</strong>. Klien mendapatkan jatah revisi sesuai paket yang dipilih (misal: 3x revisi untuk Company Profile). Proses revisi dilakukan secara transparan.",
  },
  {
    category: "process",
    question: "Bagaimana cara mengukur keberhasilan campaign digital?",
    answer:
      "Kami menggunakan KPI yang disepakati bersama seperti <strong>pertumbuhan traffic website, konversi, engagement rate, reach, dan CTR</strong>. Laporan performa dikirimkan secara berkala.",
  },
  {
    category: "process",
    question: "Bagaimana cara memulai kerja sama dengan Arxenova-Social?",
    answer:
      "Sangat mudah! Cukup hubungi kami melalui WhatsApp atau form kontak di website. Kami akan mengatur <strong>sesi konsultasi gratis</strong> untuk memahami kebutuhan bisnis Anda dan merekomendasikan solusi yang tepat.",
  },
];

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter((f) => f.category === activeCategory);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-page section">
      <div className="container">
        {/* Hero */}
        <div className="faq-hero">
          <span className="section-label">Pusat Bantuan</span>
          <h1 className="faq-hero__title">
            Pertanyaan yang{" "}
            <span className="faq-hero__highlight">Sering Ditanyakan</span>
          </h1>
          <p className="faq-hero__desc">
            Temukan jawaban lengkap seputar layanan, harga, dan cara kerja
            Arxenova-Social. Tidak menemukan jawaban yang Anda cari?{" "}
            <Link href="/contact" className="faq-hero__link">
              Hubungi kami langsung.
            </Link>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="faq-tabs" role="tablist" aria-label="FAQ Categories">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              id={`faq-tab-${cat.id}`}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`faq-panel-${cat.id}`}
              className={`faq-tab ${activeCategory === cat.id ? "faq-tab--active" : ""}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
            >
              <span className="faq-tab__icon" aria-hidden="true">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div
          id={`faq-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`faq-tab-${activeCategory}`}
          className="faq-list"
        >
          {filtered.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "faq-item--open" : ""}`}
            >
              <button
                id={`faq-question-${activeCategory}-${i}`}
                className="faq-item__question"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${activeCategory}-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="faq-item__q-text">{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${activeCategory}-${i}`}
                role="region"
                aria-labelledby={`faq-question-${activeCategory}-${i}`}
                className="faq-item__answer"
              >
                <div
                  className="faq-item__answer-inner"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <div className="faq-cta__card">
            <div className="faq-cta__glow" />
            <IconQuestion />
            <h2 className="faq-cta__title">Masih Ada Pertanyaan?</h2>
            <p className="faq-cta__desc">
              Tim kami siap membantu Anda menemukan solusi yang tepat untuk
              bisnis Anda.
            </p>
            <div className="faq-cta__actions">
              <a
                id="faq-whatsapp-cta"
                href="https://wa.me/+6281285313084"
                target="_blank"
                rel="noopener noreferrer"
                className="faq-cta__btn faq-cta__btn--primary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Chat via WhatsApp
              </a>
              <Link
                id="faq-contact-cta"
                href="/contact"
                className="faq-cta__btn faq-cta__btn--secondary"
              >
                Kirim Pesan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
