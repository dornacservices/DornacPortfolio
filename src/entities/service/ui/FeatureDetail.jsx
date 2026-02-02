import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import GlassCard from './GlassCard';
import './FeatureDetail.css';

export default function FeatureDetail() {
    const { id } = useParams();
    const feature = dornacContent.sections.features.find(f => f.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!feature) {
        return (
            <div className="feature-not-found">
                <h2>Feature Not Found</h2>
                <Link to="/" className="back-link">Return to Base</Link>
            </div>
        );
    }

    return (
        <div className="feature-detail-page">
            <Link to="/" className="back-link">← Back to System</Link>

            <div className="feature-header">
                <span className="feature-detail-category">{feature.category}</span>
                <h1 className="feature-detail-title">{feature.title}</h1>
            </div>

            <div className="feature-content-grid">
                <GlassCard className="feature-main-card">
                    <h2>Overview</h2>
                    <p className="feature-long-desc">{feature.description}</p>
                </GlassCard>

                <div className="feature-sidebar">
                    <GlassCard className="feature-spec-card">
                        <h3>Technical Specs</h3>
                        <ul className="spec-list">
                            {feature.specs.map((spec, i) => (
                                <li key={i}>{spec}</li>
                            ))}
                        </ul>
                    </GlassCard>
                    <div className="feature-actions">
                        <button className="action-btn">Initialize Module</button>
                        <button className="action-btn secondary">View Documentation</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
