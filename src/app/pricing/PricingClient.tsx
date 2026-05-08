"use client";

import { useState } from "react";
import Link from "next/link";
import GlassIcons from "@/components/GlassIcons";
import "./Pricing.css";

type BillingCycle = "once" | "monthly";

const IconLanding = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="currentColor" fillOpacity="0.1" />
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
    <path d="M8 21h8" />
    <path d="M12 18v3" />
    <path d="M2 8h20" />
    <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconCompany = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" fill="currentColor" fillOpacity="0.1" />
    <path d="M4 22V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" />
    <path d="M12 22V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
    <path d="M2 22h20" />
    <path d="M8 8h.01M8 12h.01M8 16h.01" />
    <path d="M16 12h.01M16 16h.01" />
  </svg>
);

const IconEcommerce = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8h14l-1.5 9H6.5L5 8z" fill="currentColor" fillOpacity="0.1" />
    <path d="M5 8h14l-1.5 9H6.5L5 8z" />
    <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconERP = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="2" y="4" width="20" height="5" rx="1" />
    <rect x="2" y="15" width="20" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="2" y="15" width="20" height="5" rx="1" />
    <path d="M12 9v6" />
    <path d="M8 9v6" />
    <path d="M16 9v6" />
    <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="3" />
    <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="3" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);


const plans = [
  {
    id: "landing",
    icon: <IconLanding />,
    iconColor: "cyan",
    name: "Landing Page",
    subtitle: "Starter Pack",
    tagline: "Ideal untuk Promosi, Campaign & Produk Tunggal",
    priceRange: "Rp 6 jt – 8 jt",
    delivery: "5–10 hari kerja",
    highlighted: false,
    badge: null,
    seoTitle: "Jasa Pembuatan Landing Page Cilegon & Serang",
    features: [
      "1 Halaman Responsif (Landing Page)",
      "Desain Custom — Mobile & Desktop",
      "Copywriting Headline + Call-to-Action",
      "Integrasi WhatsApp & Form Lead",
      "Optimasi SEO Dasar (On-Page)",
      "Optimasi Kecepatan & Core Web Vitals",
    ],
    includes: [
      "Revisi hingga 2×",
      "Dokumentasi Penggunaan",
      "Email Profesional (hello@customdomain)",
      "Setup Domain & Hosting",
    ],
    ctaHref:
      "https://wa.me/+6281285313084?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Landing%20Page",
    ctaText: "Konsultasi Landing Page",
  },
  {
    id: "company",
    icon: <IconCompany />,
    iconColor: "blue",
    name: "Multi Page Website",
    subtitle: "Company Profile",
    tagline: "Company Profile, Jasa & Brand Profesional",
    priceRange: "Rp 6 jt – 12 jt",
    delivery: "14–21 hari kerja",
    highlighted: true,
    badge: "Paling Diminati",
    seoTitle: "Jasa Website Company Profile Cilegon & Serang",
    features: [
      "3–7 Halaman (Home, About, Services, dll)",
      "CMS — Edit Konten Mandiri Tanpa Coding",
      "Integrasi WhatsApp, Email & Form",
      "SEO On-Page Semua Halaman",
      "Google Analytics & Search Console Setup",
      "Optimasi Kecepatan & Core Web Vitals",
    ],
    includes: [
      "Revisi hingga 3×",
      "Maintenance 1 Bulan Gratis",
      "Dokumentasi Penggunaan",
      "Email Profesional (hello@customdomain)",
      "Setup Domain & Hosting",
    ],
    ctaHref:
      "https://wa.me/+6281285313084?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Company%20Profile",
    ctaText: "Konsultasi Company Profile",
  },
  {
    id: "ecommerce",
    icon: <IconEcommerce />,
    iconColor: "coral",
    name: "E-Commerce & Ticketing",
    subtitle: "Toko Online & Booking",
    tagline: "Toko Online, Event Management & Booking System",
    priceRange: "Rp 10 jt – 40 jt",
    delivery: "30–45 hari kerja",
    highlighted: false,
    badge: null,
    seoTitle: "Jasa Pembuatan Toko Online & E-Commerce Banten",
    features: [
      "Multi-Halaman + CMS Lengkap",
      "Keranjang & Checkout System",
      "Payment Gateway (Midtrans / Xendit)",
      "Manajemen Produk, Stok & Tiket",
      "System Order & Invoice Otomatis",
      "Dashboard Admin + Laporan Penjualan",
      "Ticketing System (QR & Email)",
      "Integrasi Ongkos Kirim (Rajaongkir)",
      "SEO E-Commerce + Schema Markup",
    ],
    includes: [
      "Revisi hingga 5×",
      "Maintenance 2–4 Bulan",
      "Dokumentasi Penggunaan",
      "Email Profesional (hello@customdomain)",
      "Setup Domain & Hosting",
      "Training Admin",
    ],
    ctaHref:
      "https://wa.me/+6281285313084?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20E-Commerce",
    ctaText: "Konsultasi E-Commerce",
  },
  {
    id: "erp",
    icon: <IconERP />,
    iconColor: "magenta",
    name: "ERP System Enterprise",
    subtitle: "Solusi Bisnis Terintegrasi",
    tagline: "Perusahaan, Manufaktur, Distribusi & High-End Business",
    priceRange: "Rp 55 jt – 250 jt",
    delivery: "60–120 hari kerja",
    highlighted: false,
    badge: "Enterprise",
    seoTitle: "Jasa Pembuatan Sistem ERP & Web App Enterprise",
    features: [
      "Sistem Integrasi End-to-End",
      "Modul: Finance, Inventory, Sales CRM, HR & Payroll",
      "Dashboard Analitik & Reporting Real-Time",
      "Multi-User Management & Role Permission",
      "Integrasi API (Bank, Payment & Sistem Lain)",
      "Automasi Workflow Bisnis",
      "Cloud / On-Premise Server Deployment",
      "High Security System & Enkripsi Data",
      "Custom Development Sesuai SOP Bisnis",
      "Scalable — Dapat Dikembangkan Jangka Panjang",
    ],
    includes: [
      "Revisi Sesuai Scope & Kesepakatan",
      "Dedicated Support Team",
      "Maintenance 3–6 Bulan",
      "Dokumentasi Teknikal & User",
      "Training Tim Internal",
    ],
    ctaHref:
      "https://wa.me/+6281285313084?text=Halo%2C%20saya%20tertarik%20dengan%20solusi%20ERP%20Enterprise",
    ctaText: "Konsultasi ERP Enterprise",
  },
];

const faqs = [
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Ya, semua harga paket sudah termasuk GRATIS domain (.com) dan hosting premium selama 1 tahun pertama. Kami yang akan mengurus seluruh konfigurasi teknis dari awal hingga website Anda live.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Bergantung paket: Landing Page 5–10 hari kerja, Company Profile 14–21 hari kerja, E-Commerce 30–45 hari kerja, dan ERP Enterprise 60–120 hari kerja. Estimasi dapat berubah sesuai kompleksitas dan kecepatan feedback.",
  },
  {
    q: "Apakah saya bisa edit konten website sendiri?",
    a: "Ya! Paket Company Profile ke atas sudah dilengkapi CMS (Content Management System) sehingga Anda bisa mengubah teks, gambar, dan konten lainnya secara mandiri tanpa perlu skill coding.",
  },
  {
    q: "Apakah ada garansi setelah website selesai?",
    a: "Ya, semua paket menyertakan periode maintenance gratis pasca-launch. Selama periode ini kami akan memperbaiki bug atau masalah teknis tanpa biaya tambahan.",
  },
];

export default function PricingClient() {
  const [billing, setBilling] = useState<BillingCycle>("once");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePlanId, setActivePlanId] = useState<string>("company");

  const activePlan = plans.find((p) => p.id === activePlanId) || plans[1];

  return (
    <section className="pricing-page section" aria-label="Paket Harga Website Development">
      <div className="container">

        <header className="pricing-hero">
          <span className="section-label">Harga & Paket</span>
          <h1 className="pricing-hero__title">
            Jasa Pembuatan Website{" "}
            <span className="pricing-hero__gradient">Profesional</span>
            {" "}di Cilegon & Serang
          </h1>
          <p className="pricing-hero__desc">
            Solusi digital untuk bisnis UMKM hingga enterprise di Cilegon, Serang,
            dan seluruh Banten. Desain custom, SEO-optimized, responsif, dan
            siap konversi.
          </p>
          <div className="pricing-hero__trust">
            <span><IconStar /> Desain Custom</span>
            <span><IconStar /> SEO-Friendly</span>
            <span><IconStar /> Harga Transparan</span>
            <span><IconStar /> Support Lokal</span>
          </div>
        </header>

        <div className="pricing-controls">
          <div className="billing-toggle" role="group" aria-label="Billing cycle">
            <button
              id="billing-once"
              className={`billing-toggle__btn ${billing === "once" ? "billing-toggle__btn--active" : ""}`}
              onClick={() => setBilling("once")}
              aria-pressed={billing === "once"}
            >
              Biaya Pembuatan
            </button>
            <button
              id="billing-monthly"
              className={`billing-toggle__btn ${billing === "monthly" ? "billing-toggle__btn--active" : ""}`}
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
            >
              Maintenance/Bulan
              <span className="billing-toggle__badge">Opsional</span>
            </button>
          </div>
        </div>

        <div className="pricing-pills" role="tablist" aria-label="Pilih Paket Website">
          {plans.map((plan, i) => (
            <button
              key={plan.id}
              role="tab"
              aria-selected={activePlanId === plan.id}
              aria-controls={`panel-${plan.id}`}
              id={`tab-${plan.id}`}
              className={`pricing-pill pricing-pill--${plan.iconColor} ${activePlanId === plan.id ? "pricing-pill--active" : ""}`}
              onClick={() => setActivePlanId(plan.id)}
            >
              <div className={`pricing-pill__pattern bg-pattern-${i}`} aria-hidden="true" />
              <div className="pricing-pill__content">
                <span className="pricing-pill__icon" aria-hidden="true">{plan.icon}</span>
                <span className="pricing-pill__label">{plan.name}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="pricing-active-container">
          <div
            id={`panel-${activePlan.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activePlan.id}`}
            className="pricing-active-panel"
          >
            <article
              className={`pricing-card pricing-card--${activePlan.iconColor} ${activePlan.highlighted ? "pricing-card--highlighted" : ""}`}
              aria-label={activePlan.seoTitle}
            >
              {activePlan.highlighted && <div className="pricing-card__glow" aria-hidden="true" />}

              <div className="pricing-card__top">
                <GlassIcons 
                  items={[{ icon: activePlan.icon, color: activePlan.iconColor }]} 
                  className="icon-btns--inline" 
                />
                <div className="pricing-card__meta">
                  {activePlan.badge && (
                    <span className={`pricing-badge pricing-badge--${activePlan.highlighted ? "primary" : activePlan.iconColor}`}>
                      {activePlan.badge}
                    </span>
                  )}
                  <h2 className="pricing-card__name">{activePlan.name}</h2>
                  <p className="pricing-card__subtitle">{activePlan.subtitle}</p>
                </div>
              </div>

              <p className="pricing-card__tagline">{activePlan.tagline}</p>

              <div className="pricing-card__price-block">
                <p className="pricing-card__price">{activePlan.priceRange}</p>
                <span className="pricing-card__delivery">
                  <IconClock /> {activePlan.delivery}
                </span>
              </div>

              <div className="pricing-card__divider" />

              <div className="pricing-card__grid">
                <div className="pricing-card__section">
                  <p className="pricing-card__section-label">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Fitur Utama
                  </p>
                  <ul className="pricing-feature-list" aria-label={`Fitur paket ${activePlan.name}`}>
                    {activePlan.features.map((f, i) => (
                      <li key={i} className="pricing-feature">
                        <span className={`pricing-feature__dot pricing-feature__dot--${activePlan.iconColor}`} aria-hidden="true">
                          <IconCheck />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-card__section">
                  <p className="pricing-card__section-label pricing-card__section-label--include">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                    Sudah Termasuk
                  </p>
                  <ul className="pricing-feature-list" aria-label={`Bonus paket ${activePlan.name}`}>
                    {activePlan.includes.map((inc, i) => (
                      <li key={i} className="pricing-feature pricing-feature--include">
                        <span className="pricing-feature__dot pricing-feature__dot--include" aria-hidden="true">
                          <IconCheck />
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                id={`pricing-cta-${activePlan.id}`}
                href={activePlan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`pricing-card__cta ${activePlan.highlighted ? "pricing-card__cta--primary" : "pricing-card__cta--ghost"}`}
                aria-label={activePlan.ctaText}
              >
                <IconWhatsApp />
                {activePlan.ctaText}
                <IconArrow />
              </a>
            </article>
          </div>
        </div>

        <p className="pricing-note" role="note">
          * Harga bersifat estimasi dan dapat disesuaikan dengan kebutuhan spesifik
          bisnis Anda. Hubungi kami untuk mendapatkan penawaran terbaik.
        </p>

        <div className="pricing-faq">
          <div className="pricing-faq__header">
            <h2 className="pricing-faq__title">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="pricing-faq__sub">Tentang layanan pembuatan website kami di Cilegon & Serang</p>
          </div>
          <div className="pricing-faq__list" role="list">
            {faqs.map((item, i) => (
              <div
                key={i}
                role="listitem"
                className={`pfaq-item ${openFaq === i ? "pfaq-item--open" : ""}`}
              >
                <button
                  id={`pfaq-btn-${i}`}
                  className="pfaq-item__q"
                  aria-expanded={openFaq === i}
                  aria-controls={`pfaq-ans-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="pfaq-item__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`pfaq-ans-${i}`}
                  className="pfaq-item__a"
                  role="region"
                  aria-labelledby={`pfaq-btn-${i}`}
                >
                  <p className="pfaq-item__a-inner">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pricing-faq__footer">
            <Link id="pricing-faq-link" href="/faq" className="pricing-faq__link">
              Lihat semua FAQ →
            </Link>
          </div>
        </div>

        <div className="pricing-bottom-cta">
          <div className="pricing-bottom-cta__inner">
            <div className="pricing-bottom-cta__glow" aria-hidden="true" />
            <h2 className="pricing-bottom-cta__title">
              Siap Punya Website Profesional di Cilegon & Serang?
            </h2>
            <p className="pricing-bottom-cta__desc">
              Konsultasi gratis — ceritakan kebutuhan bisnis Anda dan kami
              rekomendasikan solusi yang paling tepat dan efisien.
            </p>
            <div className="pricing-bottom-cta__actions">
              <a
                id="pricing-bottom-wa"
                href="https://wa.me/+6281285313084"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-bottom-cta__btn pricing-bottom-cta__btn--primary"
              >
                <IconWhatsApp />
                Konsultasi Gratis via WhatsApp
              </a>
              <Link
                id="pricing-bottom-portfolio"
                href="/portfolio"
                className="pricing-bottom-cta__btn pricing-bottom-cta__btn--secondary"
              >
                Lihat Portfolio Kami
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
