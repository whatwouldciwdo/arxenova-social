import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__content">
                <h1 className="hero__title">
                    Arxenova-Social
                    <br />
                    digital agency
                </h1>

                <div className="hero__pills">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="hero__pill" style={{ '--pill-index': i } as React.CSSProperties}>
                            <div className="hero__pill-inner">
                                <div className="hero__pill-image" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
