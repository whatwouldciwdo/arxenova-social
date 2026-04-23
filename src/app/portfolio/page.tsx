import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Portfolio | Arxenova-Social — Our Work & Case Studies",
    description: "Browse Arxenova-Social's portfolio of successful projects — from brand identity and social media campaigns to custom web development and digital marketing case studies.",
    keywords: ["Arxenova portfolio", "case studies", "social media projects", "web development portfolio", "digital agency work", "brand campaigns"],
    alternates: {
        canonical: "https://arxenovasocial.com/portfolio",
    },
    openGraph: {
        title: "Portfolio | Arxenova-Social — Our Work & Case Studies",
        description: "See how Arxenova-Social has helped brands like Otobi, Berdikari Raya, PJA, and PLN Indonesia Power grow their digital presence.",
        type: "website",
        url: "https://arxenovasocial.com/portfolio",
        images: [
            {
                url: "https://arxenovasocial.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Arxenova-Social Portfolio — Our Work & Case Studies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Arxenova-Social — Our Work & Case Studies",
        description: "See how Arxenova-Social has helped brands like Otobi, Berdikari Raya, PJA, and PLN Indonesia Power grow their digital presence.",
        images: ["https://arxenovasocial.com/og-image.png"],
    },
};

export default function PortfolioPage() {
    return (
        <main>
            <Navbar />

            
            <div style={{ paddingTop: "120px" }}>
                <CaseStudies />
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
