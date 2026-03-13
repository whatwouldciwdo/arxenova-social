import "./ContactHero.css";

export default function ContactHero() {
    return (
        <section className="contact-hero section">
            <div className="container">
                
                <div className="contact-hero__banner">
                    <div className="contact-hero__title-wrapper">
                        <h1 className="contact-hero__title">Get in touch</h1>
                    </div>
                    <div className="contact-hero__subtitle-wrapper">
                        <p className="contact-hero__subtitle">
                            We are passionate about creating visually
                            stunning and functional solutions that
                            communicate effectively.
                        </p>
                    </div>
                </div>

                
                <div className="contact-offices">
                    <div className="contact-offices__image-wrapper">
                        
                        <div className="contact-offices__img"></div>
                    </div>

                    <div className="contact-offices__info">
                        <h2>Our offices</h2>

                        <div className="contact-offices__grid">
                            <div className="office-location">
                                <h3>Indonesia</h3>
                                <p>+62 812-8531-3084</p>
                                <p>SatuSisi Socialhouse <br />Cilegon, Banten</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
