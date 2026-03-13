import "./AboutHero.css";

export default function AboutHero() {
    return (
        <section className="about-hero section">
            <div className="container">
                <div className="about-hero__header">
                    <h1>
                        Humble beginnings.<br />
                        An inspiring story.
                    </h1>
                </div>

                <div className="about-hero__gallery">
                    <div className="about-hero__image about-img-1" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800)' }}></div>
                    <div className="about-hero__image about-img-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800)' }}></div>
                    <div className="about-hero__image about-img-3" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800)' }}></div>
                </div>
            </div>
        </section>
    );
}
