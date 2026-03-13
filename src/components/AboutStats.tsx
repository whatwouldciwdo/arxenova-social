import "./AboutStats.css";

export default function AboutStats() {
    return (
        <section className="about-stats section">
            <div className="container">
                <div className="about-stats__grid">

                    
                    <div className="about-stats__image-wrapper">
                        <img 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                            alt="Agency Office" 
                            className="about-stats__image"
                        />
                    </div>

                    
                    <div className="about-stats__content">
                        <h2>Our Core Values</h2>
                        <p className="about-stats__desc">
                            As a forward-thinking digital agency, our foundation is built upon 
                            principles that ensure we deliver exceptional value and impactful 
                            results for every client we partner with.
                        </p>

                        <div className="about-stats__numbers">
                            <div className="stat-item">
                                <h3 className="stat-value" style={{ fontSize: "1.5rem" }}>Innovation</h3>
                                <p className="stat-subtext">We embrace creativity and new technologies to build solutions that stand out.</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-value" style={{ fontSize: "1.5rem" }}>Quality</h3>
                                <p className="stat-subtext">Excellence is not an option; it's our standard in every project we deliver.</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-value" style={{ fontSize: "1.5rem" }}>Collaboration</h3>
                                <p className="stat-subtext">We work closely with you, ensuring your vision is brought to life flawlessly.</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-value" style={{ fontSize: "1.5rem" }}>Integrity</h3>
                                <p className="stat-subtext">Honesty and transparency guide every interaction and business decision.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
