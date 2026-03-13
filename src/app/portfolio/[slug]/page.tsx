import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import "./PortfolioDetail.css";

const portfolios = {
    "otobi-auto-detailing": {
        title: "Otobi Auto Detailing",
        clientLogo: "/images/OTOBI-LOGO.jpeg",
        desc: "Arxenova-Social developed a custom landing page and e-commerce checkout system for Otobi Auto Detailing, enhancing their digital storefront.",
        meta1: "Arxenova-Social Design",
        meta2: "Branding, UI.UX",
        headerTitle: "Transforming Otobi Auto Detailing with a High-Performance E-Commerce Landing Page",
        headerDesc: "Arxenova-Social partnered with Otobi Auto Detailing to develop a visually stunning, high-converting landing page designed to elevate their brand's digital presence. Understanding the client's core objective to drive direct sales, we seamlessly integrated a robust e-commerce checkout system directly into the website.\n\nThis optimized online shopping experience empowers customers to easily browse, select, and securely purchase premium auto detailing products and service packages from any device. By combining an immersive, premium UI/UX design with reliable e-commerce capabilities, we delivered a digital solution that not only highlights Otobi's exceptional detailing mastery but also actively accelerates their online revenue and customer acquisition metrics.",
        img1: "/images/portfolio/otobi/otobi-arxenova-portfolio.jpg",
        img2: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200",
        img3: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1200",
        img1Alt: "Otobi Auto Detailing Landing Page developed by Arxenova-Social",
        img2Alt: "Professional Auto Detailing Services",
        img3Alt: "Car polishing and ceramic coating",
    },
    "berdikari-raya-services": {
        title: "Berdikari Raya Services",
        clientLogo: "/images/berdikariraya.png",
        desc: "Arxenova-Social partnered with Berdikari Raya Services, a leading company in the carrosserie (auto body manufacturing) industry, to overhaul their digital presence and streamline their web operations.",
        meta1: "Arxenova-Social Marketing",
        meta2: "SEO, SEM, WordPress",
        headerTitle: "Driving Digital Growth and Operational Efficiency for Berdikari Raya Services",
        headerDesc: "Arxenova-Social partnered with Berdikari Raya Services, a leading company in the carrosserie (auto body manufacturing) industry, to overhaul their digital presence and streamline their web operations. Our primary goal was to increase their online visibility and optimize their lead generation pipeline.\n\nTo achieve this, we executed a comprehensive Search Engine Optimization (SEO) and Search Engine Marketing (SEM) strategy tailored specifically to the automotive manufacturing sector. Simultaneously, we performed a deep architectural cleanup and optimization of their backend WordPress system. By restructuring their database queries, updating legacy plugins, and improving server response times, we ensured their website not only ranks higher on search engines but also delivers a lightning-fast, secure experience for prospective B2B clients.",
        img1: "/images/portfolio/berdikariraya/berdikari-arxenova.jpg",
        img2: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
        img3: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
        img1Alt: "Berdikari Raya Services carrosserie manufacturing facility",
        img2Alt: "Automotive chassis working area",
        img3Alt: "Automotive fabrication and welding process",
    },
    "putra-jayantara-ananta": {
        title: "Putra Jayantara Ananta (PJA)",
        clientLogo: "/images/PJA-LOGO.png",
        desc: "We engineered a robust corporate website and digital catalog for PJA, a prominent supplier of industrial control materials like valves, gas detectors, and electrical PLCs.",
        meta1: "Arxenova-Social Dev",
        meta2: "B2B Web Development",
        headerTitle: "Digitalizing Industrial Procurement for Specialized Control Materials",
        headerDesc: "Putra Jayantara Ananta (PJA) is a trusted supplier bridging the gap between global manufacturers and Indonesia's major industrial sectors. Specializing in the provision of critical control materials—such as high-performance butterfly valves, precision gas detectors, and Electrical Programmable Logic Controllers (PLCs)—they needed a digital platform that matched the technical sophistication of their inventory.\n\nWe designed and developed an authoritative, SEO-optimized B2B corporate website focused on high-quality lead generation. By creating structured, easily navigable digital catalogs for technical specifications and datasheets, we empowered their enterprise clients to find the exact industrial components they require. The new platform modernizes PJA's procurement pipeline and reinforces their position as a leading distributor in Indonesia's heavy industry ecosystem.",
        img1: "/images/portfolio/putrajayantara-ananta/putrajayantara-ananta-valve.jpg",
        img2: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200",
        img3: "https://images.unsplash.com/photo-1565073624497-7144969946f0?auto=format&fit=crop&q=80&w=1200",
        img1Alt: "Large industrial butterfly valve installation",
        img2Alt: "Electrical PLC and automation control panels",
        img3Alt: "Complex industrial piping and control systems",
    },
    "pln-indonesia-power": {
        title: "PLN Indonesia Power",
        clientLogo: "/images/PLN-INDONESIAPOWER-LOGO.png",
        desc: "Arxenova-Social partnered with PLN Indonesia Power to create a web-based application designed to support the operational needs of their power plants.",
        meta1: "Arxenova-Social Dev",
        meta2: "Next.js, Nest.js, Operational Tech",
        headerTitle: "Digitalizing Power Plant Operations for PLN Indonesia Power",
        headerDesc: "Arxenova-Social partnered with PLN Indonesia Power to create a web-based application designed to support the operational needs of their power plants. As part of PLN's broader digitalization program, this platform modernizes critical processes to enhance efficiency and safety.\n\nThe system features a comprehensive Document ToR (Term of Reference) creation module leveraging a robust Next.js frontend and Nest.js backend architecture. Furthermore, we integrated a specialized Lockout & Tagout (LOTO) System specifically designed to support operators in maintaining strict safety protocols. This digital transformation streamlines daily operations while ensuring the highest standards of industrial compliance.",
        img1: "/images/portfolio/plnindonesiapower/plnindonesiapower-arxenova.jpg",
        img2: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
        img3: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80&w=1200",
        img1Alt: "Industrial power plant infrastructure",
        img2Alt: "Digitalized power plant control dashboard",
        img3Alt: "Industrial Lockout Tagout safety procedures",
    }
};

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = portfolios[slug as keyof typeof portfolios];

    if (!data) {
        notFound();
    }

    return (
        <main className="portfolio-detail-page">
            <Navbar />

            <div className="portfolio-detail">
                <div className="container">
                    <div className="portfolio-detail__top">
                        <Link href="/portfolio" className="portfolio-detail__back">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            All case studies
                        </Link>
                    </div>

                    <div className="portfolio-detail__header">
                        <div className="portfolio-detail__title-col">
                            <h1>{data.title}</h1>
                        </div>
                        <div className="portfolio-detail__desc-col">
                            <Image
                                src={data.clientLogo}
                                alt={`${data.title} Logo`}
                                width={80}
                                height={80}
                                className="portfolio-detail__client-logo"
                            />
                            <p>
                                {data.desc}
                            </p>
                        </div>
                        <div className="portfolio-detail__meta-col">
                            <div className="meta-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>{data.meta1}</span>
                            </div>
                            <div className="meta-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                                <span>{data.meta2}</span>
                            </div>
                            <a href="#" className="meta-link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                                live Preview
                            </a>
                        </div>
                    </div>

                    <div className="portfolio-detail__content">
                        
                        <div className="portfolio-detail__media">
                            <Image 
                                src={data.img1} 
                                alt={data.img1Alt}
                                width={1200} 
                                height={675} 
                                className="portfolio-media-img"
                                priority
                            />
                        </div>

                        
                        <div className="portfolio-detail__text-block">
                            <div className="text-left">
                                <h2>
                                    {data.headerTitle}
                                </h2>
                            </div>
                            <div className="text-right">
                                <p style={{ whiteSpace: 'pre-line' }}>
                                    {data.headerDesc}
                                </p>
                            </div>
                        </div>

                        
                        <div className="portfolio-detail__media">
                            <Image 
                                src={data.img2} 
                                alt={data.img2Alt}
                                width={1200} 
                                height={675} 
                                className="portfolio-media-img"
                            />
                        </div>

                        
                        <div className="portfolio-detail__media">
                            <Image 
                                src={data.img3} 
                                alt={data.img3Alt}
                                width={1200} 
                                height={675} 
                                className="portfolio-media-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
