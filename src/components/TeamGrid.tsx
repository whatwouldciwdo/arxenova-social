import "./TeamGrid.css";

import { teamMembers } from "../data/team";

export default function TeamGrid() {
    return (
        <section className="team-page-grid section">
            <div className="container">

                
                <div className="team-page__header">
                    <div className="team-page__title-col">
                        <h1>Our Team</h1>
                    </div>
                    <div className="team-page__desc-col">
                        <p>
                            We are passionate about creating visually stunning and functional
                            solutions that communicate effectively.
                        </p>
                    </div>
                </div>

                
                <div className="team-page__members">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-page__member-card">
                            <div 
                                className="team-page__member-image"
                                style={
                                    member.image 
                                        ? { backgroundImage: `url(${member.image})`, backgroundPosition: member.imagePosition || 'center' } 
                                        : { background: "radial-gradient(circle at center, #374151 0%, #111827 100%)" }
                                }
                            >
                                
                            </div>
                            <div className="team-page__member-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
