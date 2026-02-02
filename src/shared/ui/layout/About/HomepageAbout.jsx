import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './HomepageAbout.css';

export default function HomepageAbout() {
    return (
        <section className="home-about-section">
            <div className="container">
                <div className="about-layout">
                    {/* Left Column: Text */}
                    <div className="about-content">
                        <span className="badge anim-text">{dornacContent.home.about.title}</span>
                        <h2 className="about-heading anim-text">{dornacContent.home.about.content}</h2>
                        <p className="about-subtext anim-text">
                            We are a team of visionaries, engineers, and designers dedicated to reshaping the digital landscape.
                            Our passion lies in building systems that are not just functional, but revolutionary.
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="about-image-wrapper anim-card">
                        <img
                            src="/assets/images/team-abstract.png"
                            alt="Dornac Team Vision"
                            className="about-image"
                        />
                        <div className="image-overlay"></div>
                    </div>
                </div>

                <div className="stats-grid anim-grid">
                    {dornacContent.home.about.stats.map((stat, index) => (
                        <div key={index} className="stat-card anim-card">
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
