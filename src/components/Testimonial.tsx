import "./Testimonial.css";

export default function Testimonial() {
    return (
        <section className="testimonial section">
            <div className="container">
                <div className="testimonial__inner">

                    
                    <div className="testimonial__author">
                        <div className="testimonial__avatar">
                            
                        </div>
                        <div className="testimonial__author-info">
                            <h4 className="testimonial__name">M. Ilham Roziano</h4>
                            <p className="testimonial__role">CEO of Satu Sisi Social House</p>
                        </div>
                    </div>

                    
                    <h2 className="testimonial__quote">
                        &quot;I&apos;ve been using Arxenova for the past year and I&apos;m absolutely
                        loving it. It&apos;s a powerful design tool that&apos;s easy to use and
                        collaborate with others on. I especially love the real-time
                        collaboration feature, which makes it so easy to get feedback
                        from my team.&quot;
                    </h2>

                    
                    <div className="testimonial__logo">
                        <img
                            src="/images/satusisisocialhouse-logo.png"
                            alt="Satu Sisi Social House"
                            style={{ height: "100px", width: "auto", objectFit: "contain" }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
