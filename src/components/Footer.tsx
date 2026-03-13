"use client";

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="footer__grid">
                    
                    <div className="footer__block footer__brand-block">
                        <div className="footer__logo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span>Arxenova-Social</span>
                        </div>
                    </div>

                    
                    <div className="footer__block footer__nav-block">
                        <nav className="footer__nav">
                            <Link href="/portfolio">Projects</Link>
                            <Link href="/about">About</Link>
                            <Link href="/team">Team</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/terms">Terms</Link>
                        </nav>
                    </div>

                    
                    <div className="footer__block footer__email-block">
                        <a href="mailto:hello@arexenovasocial.com" className="footer__email">
                            hello@arxenovasocial.com
                        </a>
                    </div>

                    
                    <div className="footer__block footer__blog-block">
                        <Link href="/blog" className="footer__blog-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            Blog
                        </Link>
                    </div>

                    
                    <div className="footer__block footer__social-block">
                        <div className="footer__socials">
                            
                            <a href="https://wa.me/081285313084" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </a>
                            
                            <a href="mailto:hello@arxenovasocial.com" aria-label="Email">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    
                    <div className="footer__block footer__copy-block">
                        <p className="footer__copyright">
                            &copy; {new Date().getFullYear()} Arxenova-Social
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
