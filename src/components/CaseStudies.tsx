"use client";

import Link from "next/link";
import Image from "next/image";
import "./CaseStudies.css";

const works = [
    {
        id: 1,
        title: "Otobi Auto Detailing",
        slug: "otobi-auto-detailing",
        imageClass: "study-img-1",
        clientLogo: "/images/OTOBI-LOGO.jpeg"
    },
    {
        id: 2,
        title: "Putra Jayantara Ananta",
        slug: "putra-jayantara-ananta",
        imageClass: "study-img-2",
        clientLogo: "/images/PJA-LOGO.png"
    },
    {
        id: 4,
        title: "Berdikari Raya Services",
        slug: "berdikari-raya-services",
        imageClass: "study-img-4",
        clientLogo: "/images/berdikariraya.png"
    },
    {
        id: 5,
        title: "PLN Indonesia Power",
        slug: "pln-indonesia-power",
        imageClass: "study-img-5",
        clientLogo: "/images/PLN-INDONESIAPOWER-LOGO.png"
    }
];

export default function CaseStudies() {
    return (
        <section className="case-studies section" id="case-studies">
            <div className="container">
                <div className="case-studies__header-box">
                    <div className="case-studies__header-title">
                        <h2>Case Studies</h2>
                    </div>
                    <div className="case-studies__header-text">
                        <p>From concept to execution, each case study highlights how we create digital solutions that are not only visually compelling, but also effective.</p>
                    </div>
                </div>

                <div className="case-studies__list">
                    {works.map((work) => (
                        <Link href={`/portfolio/${work.slug}`} key={work.id} className="case-studies__card">
                            <div className={`case-studies__image ${work.imageClass}`}>
                                
                                {work.clientLogo && (
                                    <div className="case-studies__logo-overlay">
                                        <div className="case-studies__logo-wrapper">
                                            <Image 
                                                src={work.clientLogo} 
                                                alt={`${work.title} Logo`}
                                                fill
                                                className="img-contain"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="case-studies__info">
                                <h3>{work.title}</h3>
                                <div className="case-studies__link">
                                    View case study
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
