import Link from "next/link";
import "./Team.css";
import { teamMembers } from "../data/team";

export default function Team() {
    return (
        <section className="team section" id="team">
            <div className="container">
                <div className="team__header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 10 4 15 9 20" />
                        <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                    </svg>
                    <span className="team__title">Our Team</span>
                </div>

                <div className="team__content">
                    
                    <div className="team__top-row">
                        <div className="team__statement-wrapper">
                            <h2 className="team__statement">
                                We are passionate about creating visually stunning and functional solutions that communicate effectively.
                            </h2>
                        </div>
                        <div className="team__grid-small">
                            {teamMembers.slice(0, 2).map((member) => (
                                <div key={member.id} className="team__member-card">
                                    <div 
                                    className="team__member-img" 
                                    style={
                                        member.image 
                                            ? { backgroundImage: `url(${member.image})`, backgroundPosition: member.imagePosition || 'center' } 
                                            : { background: "radial-gradient(circle at center, #374151 0%, #111827 100%)" }
                                    }
                                ></div>
                                    <div className="team__member-info">
                                        <h3>{member.name}</h3>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="team__grid-large">
                        {teamMembers.slice(2, 6).map((member) => (
                            <div key={member.id} className="team__member-card">
                                <div 
                                    className="team__member-img" 
                                    style={
                                        member.image 
                                            ? { backgroundImage: `url(${member.image})`, backgroundPosition: member.imagePosition || 'center' } 
                                            : { background: "radial-gradient(circle at center, #374151 0%, #111827 100%)" }
                                    }
                                ></div>
                                <div className="team__member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="team__footer">
                    <Link href="/about" className="team__btn">
                        See all members
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
