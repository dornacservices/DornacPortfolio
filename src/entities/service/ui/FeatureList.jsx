import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import './FeatureList.css'; // Renaming to Ritovex styled css

export default function FeatureList() {
    // Use the specific 'services' array for the homepage grid, falling back to 'pages.services' only if needed for routing
    const services = dornacContent.services || dornacContent.pages.services;
    const { industries } = dornacContent.home; // If industries moved to home or just keep pages.industries

    return (
        <div className="ritovex-features-wrapper">

            {/* Services Section */}
            <section className="ritovex-section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge anim-text">What We Do Best</span>
                        <h2 className="section-title anim-text">Our Expertise.</h2>
                    </div>

                    <div className="ritovex-grid anim-grid">
                        {services.map((s) => (
                            <Link to={`/service/${s.id}`} key={s.id} className="ritovex-card anim-card">
                                <div className="card-icon">{/* Icon Placeholder could use s.icon */}</div>
                                <h3 className="card-title">{s.title}</h3>
                                <p className="card-desc">{s.overview}</p>
                                <div className="card-link">Learn More &rarr;</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="ritovex-section alt-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="badge">Industries</span>
                        <h2 className="section-title">Sectors We Serve.</h2>
                    </div>

                    <div className="ritovex-grid">
                        {dornacContent.pages.industries.map((i) => (
                            <Link to={`/industry/${i.id}`} key={i.id} className="ritovex-card">
                                <div className="card-icon">{/* Icon */}</div>
                                <h3 className="card-title">{i.title}</h3>
                                <p className="card-desc">{i.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
