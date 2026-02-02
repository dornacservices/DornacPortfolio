import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import Breadcrumb from '@shared/ui/navigation/Breadcrumb/Breadcrumb';
import './TeamMemberPage.css';

export default function TeamMemberPage() {
    const { slug } = useParams();
    const member = dornacContent.home.team.members.find(m => m.id === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!member) return <div className="page-404">Member Not Found <Link to="/">Return</Link></div>;

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Team', path: '/#team' },
        { label: member.name }
    ];

    return (
        <div className="ritovex-page-wrapper">
            <div className="container profile-container">
                <BackButton text="Back to Team" to="/#team" />
                <Breadcrumb items={breadcrumbItems} />

                <div className="profile-layout">
                    <div className="profile-sidebar">
                        <div className="profile-image-large">
                            <div className="memb-initials-lg">{member.name.charAt(0)}</div>
                        </div>
                        <div className="profile-socials">
                            {Object.keys(member.social).map(platform => (
                                <a key={platform} href={member.social[platform]} className="social-link-btn" target="_blank" rel="noopener noreferrer">
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="profile-content">
                        <div className="badge">{member.role}</div>
                        <h1 className="profile-name">{member.name}</h1>
                        <p className="profile-bio">{member.bio}</p>

                        <div className="skills-section">
                            <h3>Expertise</h3>
                            <div className="skills-grid">
                                {member.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="contact-section">
                            <h3>Get in Touch</h3>
                            <p>Interested in working together? Let's connect!</p>
                            <Link to="/contact" className="btn-primary">Contact {member.name.split(' ')[0]}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
