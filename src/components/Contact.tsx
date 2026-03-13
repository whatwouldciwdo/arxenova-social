import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact__banner">
                    
                    <div className="contact__banner-bg"></div>

                    <div className="contact__content">
                        <h2 className="contact__title">
                            Have an idea?<br />
                            Let's talk.
                        </h2>
                        <p className="contact__text">
                            Visually attractive design from concept to final result. We create<br />
                            solutions that are bold and forward-looking.
                        </p>

                        <a href="mailto:hello@arxenoviasocial.com" className="contact__btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
