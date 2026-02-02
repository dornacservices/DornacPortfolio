import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './Process.css';

export default function Process() {
    return (
        <section className="process-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title anim-text">{dornacContent.home.process.title}</h2>
                </div>

                <div className="process-grid anim-grid">
                    <div className="process-line"></div>
                    {dornacContent.home.process.steps.map((step, index) => {
                        const icons = {
                            "01": (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    <path d="M11 7v4l3 2"></path>
                                </svg>
                            ),
                            "02": (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 19V5"></path>
                                    <path d="M5 12l7-7 7 7"></path>
                                    <rect x="2" y="17" width="20" height="4" rx="2"></rect>
                                </svg>
                            ),
                            "03": (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                    <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L9 12z"></path>
                                    <path d="M15 15v5s-1-.5-4-1c0-1.5.5-3 .5-3l3.5-1z"></path>
                                </svg>
                            )
                        };

                        return (
                            <div key={index} className="process-step anim-card">
                                <div className="step-icon-wrapper">
                                    <div className="step-icon">{icons[step.number]}</div>
                                    <div className="step-dot"></div>
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
