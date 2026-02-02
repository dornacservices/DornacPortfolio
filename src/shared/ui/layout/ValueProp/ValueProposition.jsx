import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import IsometricIcon from '@shared/ui/effects/IsometricIcon/IsometricIcon';
import './ValueProposition.css';

export default function ValueProposition() {
    const { title, subtitle, items } = dornacContent.home.valuePropositions;

    return (
        <section className="value-proposition-section">
            <div className="container">
                {/* F-Pattern: Header on left, naturally flows down */}
                <div className="section-header">
                    <span className="badge anim-text">Our Advantage</span>
                    <h2 className="section-title anim-text">{title}</h2>
                    <p className="section-subtitle anim-text">{subtitle}</p>
                </div>

                {/* Grid of value cards following F-pattern reading flow */}
                <div className="value-grid anim-grid">
                    {items.map((item, index) => (
                        <div key={index} className="value-card anim-card">
                            <div className="value-icon-wrapper">
                                <img src={item.image} alt={item.title} className="value-icon" />
                            </div>
                            <div className="value-card-content">
                                <h3 className="value-title">{item.title}</h3>
                                <p className="value-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
