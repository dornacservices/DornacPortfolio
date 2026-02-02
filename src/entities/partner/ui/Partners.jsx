import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './Partners.css';

export default function Partners() {
    return (
        <section className="partners-section">
            <div className="container">
                <p className="partners-title anim-text">{dornacContent.home.partners.title}</p>
                <div className="logos-grid anim-grid">
                    {dornacContent.home.partners.logos.map((logo, index) => {
                        const icons = [
                            <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                                <rect width="20" height="20" rx="4" />
                                <rect x="25" width="10" height="20" rx="2" opacity="0.5" />
                                <text x="45" y="16" fontSize="12" fontWeight="800" letterSpacing="1">{logo}</text>
                            </svg>,
                            <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                                <circle cx="10" cy="10" r="10" />
                                <circle cx="20" cy="10" r="5" opacity="0.6" />
                                <text x="45" y="16" fontSize="12" fontWeight="800" letterSpacing="1">{logo}</text>
                            </svg>,
                            <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                                <path d="M0 0 L20 0 L10 20 Z" />
                                <path d="M5 10 L15 10 L10 20 Z" opacity="0.5" />
                                <text x="45" y="16" fontSize="12" fontWeight="800" letterSpacing="1">{logo}</text>
                            </svg>,
                            <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                                <rect width="18" height="18" rx="9" />
                                <rect x="4" y="4" width="10" height="10" rx="5" fill="var(--bg-main)" />
                                <text x="45" y="16" fontSize="12" fontWeight="800" letterSpacing="1">{logo}</text>
                            </svg>,
                            <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                                <rect width="20" height="4" rx="2" />
                                <rect y="8" width="15" height="4" rx="2" opacity="0.7" />
                                <rect y="16" width="10" height="4" rx="2" opacity="0.4" />
                                <text x="45" y="16" fontSize="12" fontWeight="800" letterSpacing="1">{logo}</text>
                            </svg>
                        ];
                        return (
                            <div key={index} className="partner-logo anim-card">
                                {icons[index % icons.length]}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
