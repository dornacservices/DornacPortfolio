import React from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import './Pricing.css';

export default function Pricing() {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Pricing Plans</span>
                    <h2 className="section-title anim-text">{dornacContent.home.pricing.title}</h2>
                </div>

                <div className="pricing-grid anim-grid">
                    {dornacContent.home.pricing.plans.map((plan, index) => (
                        <div key={index} className={`pricing-card anim-card ${index === 1 ? 'featured' : ''}`}>
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">{plan.price}</div>
                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>
                            <Link to="/contact" className={`btn ${index === 1 ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center' }}>
                                Choose Plan
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
