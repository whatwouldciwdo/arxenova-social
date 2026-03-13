"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

import logoPic from "../../public/images/logo.png";

const navLinks = [
    { label: "Projects", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar__inner">
                
                <Link href="/" className="navbar__logo" aria-label="Arxenova-Social Home">
                    <Image
                        src={logoPic}
                        alt="Arxenova-Social"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>

                
                <div className="navbar__center">
                    <nav className="navbar__links">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="navbar__link">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="navbar__actions">
                        <Link href="/blog" className="navbar__action-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            Blog
                        </Link>
                        <Link href="/contact" className="navbar__action-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Get in touch
                        </Link>
                    </div>
                </div>

                
                <button
                    className={`navbar__hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            
            <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
                <nav className="navbar__mobile-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="navbar__mobile-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/blog" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
                        Blog
                    </Link>
                    <Link href="/contact" className="navbar__mobile-link navbar__mobile-link--cta" onClick={() => setMenuOpen(false)}>
                        Get in touch
                    </Link>
                </nav>
            </div>
        </header>
    );
}
