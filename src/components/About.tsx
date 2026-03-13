"use client";

import { useState } from "react";
import Image from "next/image";
import "./About.css";

const clients = [
    { name: "Berdikari Raya", id: 1, logo: "/images/berdikariraya.png" },
    { name: "Goethe", id: 2, logo: "/images/Goethe-Logo.jpg" },
    { name: "PJA", id: 3, logo: "/images/PJA-LOGO.png" },
    { name: "PLN Indonesia Power", id: 4, logo: "/images/PLN-INDONESIAPOWER-LOGO.png" },
    { name: "PLN", id: 5, logo: "/images/PLN-LOGO.svg" },
    { name: "Otobi Auto Detailing", id: 6, logo: "/images/OTOBI-LOGO.jpeg" },
    { name: "Satu Sisi Social House", id: 7, logo: "/images/satusisisocialhouse-logo.png" },
];

const servicesList = [
    { title: "Web & Mobile Design", id: "thumb-web", description: "Crafting beautiful and functional digital experiences for web and mobile platforms that delight users and drive engagement." },
    { title: "Brand Identity", id: "thumb-brand", description: "Developing unique visual identities that resonate with your target audience and help your business stand out from the competition." },
    { title: "App Development", id: "thumb-app", description: "Building scalable, secure, and performant mobile and web applications tailored to your specific business needs." },
    { title: "Consultancy", id: "thumb-consultancy", description: "Providing expert advice and actionable strategies to elevate your digital presence and optimize your business processes." },
    { title: "Packaging", id: "thumb-packaging", description: "Designing standout packaging that captures attention on the shelf and effectively communicates your brand's unique story." },
];

export default function About() {
    const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

    const toggleService = (index: number) => {
        setOpenServiceIndex(openServiceIndex === index ? null : index);
    };

    return (
        <section className="about section" id="about">
            <div className="container about__container">
                <div className="about__top">
                    <h2 className="about__statement">
                        We are passionate about creating visually stunning and functional solutions that
                        communicate effectively. I have a keen eye for detail and a deep understanding of design
                        principles, which I use to deliver projects that exceed my clients' expectations.
                    </h2>

                    <div className="about__clients">
                        {clients.map((client) => (
                            <div key={client.id} className="about__client-logo">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={140}
                                    height={50}
                                    className="client-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about__services">
                    <div className="about__services-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 10 4 15 9 20" />
                            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                        </svg>
                        <span className="about__services-title">Our Services</span>
                    </div>

                    <div className="about__services-list">
                        {servicesList.map((service, index) => {
                            const isOpen = openServiceIndex === index;

                            return (
                                <div key={index} className={`about__services-item ${isOpen ? 'active' : ''}`}>
                                    <div
                                        className="about__services-item-top"
                                        onClick={() => toggleService(index)}
                                    >
                                        <div className="about__services-item-left">
                                            <div className={`about__services-thumb ${service.id}`}>
                                                
                                            </div>
                                            <h3 className="about__services-name">{service.title}</h3>
                                        </div>
                                        <button className="about__services-icon-btn" aria-label="Toggle details">
                                            <div className={`about__services-icon ${isOpen ? 'rotated' : ''}`}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="about__services-content" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                                        <p className="about__services-desc">{service.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
