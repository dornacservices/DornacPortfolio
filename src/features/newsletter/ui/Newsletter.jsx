import React, { useState } from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './Newsletter.css';

export default function Newsletter() {
    const { title, subtitle, benefits, placeholder, buttonText } = dornacContent.home.newsletter;
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <section className="newsletter-section">
            <div className="container">
                {/* Z-Pattern: Content on left, form on right */}
                <div className="newsletter-layout">
                    <div className="newsletter-content">
                        <span className="badge anim-text">Newsletter</span>
                        <h2 className="newsletter-title anim-text">{title}</h2>
                        <p className="newsletter-subtitle anim-text">{subtitle}</p>

                        <ul className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="benefit-item anim-text">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="newsletter-form-wrapper anim-card">
                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <input
                                type="email"
                                placeholder={placeholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="newsletter-input"
                            />
                            <button type="submit" className="btn-primary newsletter-btn">
                                {buttonText}
                            </button>
                        </form>
                        <p className="privacy-note">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
