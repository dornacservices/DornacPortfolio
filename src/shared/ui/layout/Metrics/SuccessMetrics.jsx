import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './SuccessMetrics.css';

export default function SuccessMetrics() {
    const { title, subtitle, metrics } = dornacContent.home.successMetrics;

    return (
        <section className="success-metrics-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Results</span>
                    <h2 className="section-title anim-text">{title}</h2>
                    <p className="section-subtitle anim-text">{subtitle}</p>
                </div>

                {/* Z-Pattern Layout: Alternating left-right metrics */}
                <div className="metrics-container">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className={`metric-row anim-card ${index % 2 === 0 ? 'metric-left' : 'metric-right'} ${metric.highlight ? 'highlight' : ''}`}
                        >
                            <div className="metric-visual">
                                <div className="metric-circle">
                                    <span className="metric-value">{metric.value}</span>
                                </div>
                            </div>
                            <div className="metric-content">
                                <h3 className="metric-label">{metric.label}</h3>
                                <p className="metric-description">{metric.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
