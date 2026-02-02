import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './Awards.css';

export default function Awards() {
    const { title, subtitle, items } = dornacContent.home.awards;

    return (
        <section className="awards-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Recognition</span>
                    <h2 className="section-title anim-text">{title}</h2>
                    <p className="section-subtitle anim-text">{subtitle}</p>
                </div>

                <div className="awards-grid anim-grid">
                    {items.map((award, index) => (
                        <div key={index} className="award-card anim-card">
                            <div className="award-icon">{award.icon}</div>
                            <div className="award-year">{award.year}</div>
                            <h3 className="award-title">{award.title}</h3>
                            <p className="award-org">{award.organization}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
