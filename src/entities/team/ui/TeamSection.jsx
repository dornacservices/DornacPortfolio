import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import ScrollArrows from '@shared/ui/ScrollArrows/ScrollArrows';
import './TeamSection.css';

export default function TeamSection() {
    const { team } = dornacContent.home;
    const gridRef = useRef(null);

    return (
        <section className="team-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Our Team</span>
                    <h2 className="section-title anim-text">{team.title}</h2>
                    <p className="section-subtitle anim-text">{team.subtitle}</p>
                </div>

                <div className="team-grid anim-grid" ref={gridRef}>
                    {team.members.map((member) => (
                        <Link to={`/team/${member.id}`} key={member.id} className="team-card anim-card">
                            <div className="member-image-container">
                                {member.image && member.image.includes('assets/images') ? (
                                    <img src={member.image} alt={member.name} className="member-img" />
                                ) : (
                                    <div className="member-placeholder-svg">
                                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <div className="placeholder-glow"></div>
                                    </div>
                                )}
                                <div className="member-overlay"></div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <span className="view-profile-link">View Profile &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <ScrollArrows containerRef={gridRef} />
            </div>
        </section>
    );
}
