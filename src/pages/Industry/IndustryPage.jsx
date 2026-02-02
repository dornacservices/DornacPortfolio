import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import Breadcrumb from '@shared/ui/navigation/Breadcrumb/Breadcrumb';
import './IndustryPage.css';

export default function IndustryPage() {
    const { slug } = useParams();
    const industry = dornacContent.pages.industries.find(i => i.id === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!industry) return <div className="page-404">Industry Not Found</div>;

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/#industries' },
        { label: industry.title }
    ];

    return (
        <div className="ritovex-page-wrapper">
            <div className="container">
                <BackButton text="Back to Industries" to="/#industries" />
                <Breadcrumb items={breadcrumbItems} />

                <div className="industry-hero">
                    <div className="decorative-svg-bg">
                        <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.1 }} />
                                    <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
                                </linearGradient>
                            </defs>
                            <path d="M0 400 L0 100 Q 200 50 400 100 T 800 100 L 800 400 Z" fill="url(#grad1)" />
                            <circle cx="10%" cy="20%" r="50" fill="var(--primary)" opacity="0.05" />
                            <circle cx="90%" cy="60%" r="80" fill="var(--primary)" opacity="0.03" />
                        </svg>
                    </div>
                    <div className="badge-wrapper"><span className="badge">Sector Focus</span></div>
                    <h1 className="page-h1">{industry.title}</h1>
                    <p className="page-h1-sub">{industry.desc}</p>
                </div>

                <div className="industry-grid-new">
                    {industry.highlights.map((highlight, index) => (
                        <div key={index} className="ritovex-highlight-card">
                            <span className="card-idx">0{index + 1}</span>
                            <h3>{highlight}</h3>
                            <div className="card-line"></div>
                        </div>
                    ))}
                </div>

                <div className="industry-cta-section">
                    <h2>Transforming {industry.title} with Technology.</h2>
                    <p>Let's discuss how we can help your business thrive in the digital age.</p>
                    <Link to="/contact" className="btn-primary">Request Consultation</Link>
                </div>
            </div>
        </div>
    );
}
