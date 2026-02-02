import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './Testimonials.css';

export default function Testimonials() {
    const renderStars = () => {
        return (
            <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Client Feedback</span>
                    <h2 className="section-title anim-text">{dornacContent.home.testimonials.title}</h2>
                </div>

                <div className="testimonials-grid anim-grid">
                    {dornacContent.home.testimonials.items.map((item, index) => (
                        <div key={index} className="testimonial-card anim-card">
                            <div className="card-bg-quote">"</div>
                            {renderStars()}
                            <div className="testimonial-content">
                                <p className="quote-text">{item.quote}</p>
                                <div className="author-info">
                                    <div className="author-avatar-styled">
                                        <span className="author-init">{item.author.charAt(0)}</span>
                                    </div>
                                    <div className="author-meta">
                                        <span className="author-name">{item.author}</span>
                                        <span className="author-verify">✓ Verified Client</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
