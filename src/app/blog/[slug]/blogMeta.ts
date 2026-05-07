// Blog post metadata — server-safe (no JSX, no "use client")
// Used by page.tsx for generateMetadata and generateStaticParams

export const blogMeta: Record<string, {
    title: string;
    date: string;
    author: string;
    heroImage: string;
    description: string;
}> = {
    "how-to-create-svg-ready-icon-symbols-in-sketch": {
        title: "How to create SVG-ready icon symbols in Sketch",
        date: "Mar 13, 2026",
        author: "Arxenova-Social",
        heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
        description: "Learn how to design and export clean, scalable SVG icon symbols in Sketch. A practical guide for UI/UX designers and developers.",
    },
    "ultimate-guide-modern-seo": {
        title: "The Ultimate Guide to Modern SEO and Web Growth",
        date: "Mar 13, 2026",
        author: "Arxenova-Social",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        description: "A comprehensive guide to mastering modern SEO — covering Core Web Vitals, technical SEO, content strategy, and data-driven growth tactics.",
    },
    "jasa-website-cilegon-serang-banten": {
        title: "Jasa Pembuatan Website Profesional di Cilegon, Serang & Banten — Panduan Lengkap 2025",
        date: "Mei 7, 2026",
        author: "Arxenova-Social",
        heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
        description: "Cari jasa pembuatan website profesional di Cilegon, Serang, atau Banten? Pelajari manfaat website company profile, harga, dan cara memilih vendor terpercaya untuk bisnis Anda.",
    },
    "digital-marketing-cilegon-serang-banten": {
        title: "Jasa Digital Marketing Terbaik di Cilegon, Serang & Banten: Strategi Efektif untuk Bisnis Lokal 2025",
        date: "Mei 7, 2026",
        author: "Arxenova-Social",
        heroImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1200",
        description: "Cari jasa digital marketing di Cilegon, Serang, atau Banten? Pelajari strategi SEO, SEM, dan social media yang terbukti efektif untuk bisnis lokal agar tampil di halaman pertama Google.",
    },
    "website-company-profile-profesional": {
        title: "5 Alasan Bisnis Anda Wajib Punya Website Company Profile Profesional di 2025",
        date: "Mei 7, 2026",
        author: "Arxenova-Social",
        heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200",
        description: "Website company profile profesional bukan sekadar formalitas — ini adalah aset bisnis paling penting di era digital. Temukan 5 alasan krusial mengapa bisnis Anda harus memilikinya sekarang.",
    },
};
