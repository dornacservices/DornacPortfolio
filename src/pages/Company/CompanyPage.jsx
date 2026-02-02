import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import Breadcrumb from '@shared/ui/navigation/Breadcrumb/Breadcrumb';
import './CompanyPage.css';

export default function CompanyPage() {
    const { slug } = useParams();
    const page = dornacContent.pages.company.find(c => c.id === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!page) return <div className="page-404">Page Not Found</div>;

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Company', path: '/company/about' },
        { label: page.title }
    ];

    return (
        <div className="ritovex-page-wrapper">
            <div className="container">
                <BackButton text="Back to Home" to="/" />
                <Breadcrumb items={breadcrumbItems} />

                <div className="company-layout">
                    <div className="company-text-col">
                        <div className="badge-wrapper"><span className="badge">Our Story</span></div>
                        <h1 className="page-h1">{page.title}</h1>
                        <div className="company-content-body">
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#ccc' }}>
                                {page.content}
                            </p>
                            <p style={{ marginTop: '1.5rem', color: '#888' }}>
                                We believe in pushing boundaries. Ritovex (now Dornac) was built on the foundation of rigorous engineering and creative freedom.
                            </p>
                        </div>
                        <div style={{ marginTop: '3rem' }}>
                            <Link to="/contact" className="btn-primary">Join Our Journey</Link>
                        </div>
                    </div>

                    <div className="company-visual-col">
                        <div className="company-brand-visual">
                            <svg width="100%" height="100%" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
                                <defs>
                                    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.2 }} />
                                        <stop offset="100%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 0.05 }} />
                                    </linearGradient>
                                </defs>
                                <rect width="500" height="600" fill="url(#brandGrad)" rx="30" />
                                <circle cx="250" cy="300" r="150" stroke="var(--primary)" strokeWidth="1" fill="none" opacity="0.1" />
                                <circle cx="250" cy="300" r="100" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.2" />
                                <line x1="100" y1="100" x2="400" y2="500" stroke="var(--primary)" strokeWidth="0.5" opacity="0.3" />
                                <line x1="400" y1="100" x2="100" y2="500" stroke="var(--primary)" strokeWidth="0.5" opacity="0.3" />
                                <rect x="200" y="250" width="100" height="100" stroke="var(--primary)" strokeWidth="1" fill="none" transform="rotate(45 250 300)" opacity="0.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
