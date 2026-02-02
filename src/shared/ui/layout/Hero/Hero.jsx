import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-gradient-bg"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge-wrapper">
                        <div className="badge anim-text">
                            <span className="badge-icon">✨</span>
                            Smart, Simple, Magical
                        </div>
                    </div>

                    <h1 className="hero-title anim-text">
                        Transform Your Digital Dreams Into Reality
                    </h1>

                    <p className="hero-subtitle anim-text">
                        We craft beautiful, high-performance digital experiences that make your users smile.
                        From concept to launch, we handle everything with care.
                    </p>

                    <div className="hero-actions anim-text">
                        <Link to="/contact" className="btn-primary">
                            <span>Start Your Journey</span>
                            <span className="arrow">→</span>
                        </Link>
                        <Link to="/company/about" className="btn-outline">
                            <span>Explore Our Work</span>
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-card">
                            <div className="stat-value">150+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">4.9</div>
                            <div className="stat-label">Client Rating</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-3d-container">
                        <div className="floating-card card-1">
                            <div className="card-glow"></div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-glow"></div>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-glow"></div>
                        </div>
                        <div className="center-orb"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
