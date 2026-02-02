import React from 'react';
import { Link } from 'react-router-dom';
import './LandingCTA.css';

export default function LandingCTA() {
    return (
        <section className="landing-cta-section">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-content">
                        <span className="badge">Get Started</span>
                        <h2 className="cta-title">Ready to build something magical?</h2>
                        <p className="cta-text">
                            Let's transform your vision into an extraordinary digital experience.
                            Our team is ready to bring your ideas to life.
                        </p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn-primary cta-btn">
                                Start Your Project
                            </Link>
                            <Link to="/projects" className="btn-secondary cta-btn outline">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
