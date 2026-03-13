import Link from "next/link";
import Image from "next/image";
import "./RecentWorks.css";

const works = [
    {
        id: 1,
        title: "Otobi Auto Detailing",
        slug: "otobi-auto-detailing",
        imageClass: "work-img-1",
        clientLogo: "/images/OTOBI-LOGO.jpeg"
    },
    {
        id: 2,
        title: "Putra Jayantara Ananta",
        slug: "putra-jayantara-ananta",
        imageClass: "work-img-2",
        clientLogo: "/images/PJA-LOGO.png"
    },
    {
        id: 4,
        title: "Berdikari Raya Services",
        slug: "berdikari-raya-services",
        imageClass: "work-img-4",
        clientLogo: "/images/berdikariraya.png"
    },
    {
        id: 5,
        title: "PLN Indonesia Power",
        slug: "pln-indonesia-power",
        imageClass: "work-img-5",
        clientLogo: "/images/PLN-INDONESIAPOWER-LOGO.png"
    }
];

export default function RecentWorks() {
    return (
        <section className="recent-works section" id="works">
            <div className="container">
                <div className="recent-works__header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 10 4 15 9 20" />
                        <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                    </svg>
                    <span className="recent-works__title">Recent Work</span>
                </div>

                <div className="recent-works__grid">
                    {works.map((work) => (
                        <Link href={`/portfolio/${work.slug}`} key={work.id} className="recent-works__card">
                            <div className={`recent-works__image ${work.imageClass}`}>
                                
                                {work.clientLogo && (
                                    <div className="recent-works__logo-overlay">
                                        <div className="recent-works__logo-wrapper">
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
                            <div className="recent-works__info">
                                <h3>{work.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="recent-works__footer">
                    <Link href="/portfolio" className="recent-works__btn">
                        View all work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
