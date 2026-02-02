import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import Breadcrumb from '@shared/ui/navigation/Breadcrumb/Breadcrumb';
import './ServicePage.css';

export default function ServicePage() {
    const { slug } = useParams();
    const service = dornacContent.pages.services.find(s => s.id === slug);
    const allServices = dornacContent.pages.services;
    const relatedServices = allServices.filter(s => s.id !== slug).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) return <div className="page-404">Service Not Found</div>;

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: service.title }
    ];

    return (
        <div className="ritovex-page-wrapper">
            <div className="container">
                <BackButton text="Back to Services" to="/services" />
                <Breadcrumb items={breadcrumbItems} />

                <div className="page-header">
                    <div className="badge">Services</div>
                    <h1 className="page-h1">{service.title}</h1>
                    <p className="page-h1-sub">{service.subtitle}</p>
                </div>

                <div className="service-hero-visual anim-card">
                    <img src={service.image} alt={service.title} className="service-hero-img" />
                    <div className="hero-overlay"></div>
                </div>

                <div className="service-layout">
                    <div className="service-main-content">
                        <div className="content-block">
                            <h3>Overview</h3>
                            <p>{service.overview}</p>
                        </div>

                        <div className="content-block">
                            <h3>Key Features</h3>
                            <ul className="ritovex-list">
                                {service.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Why Choose This Service?</h3>
                            <p>Our {service.title.toLowerCase()} service combines industry best practices with cutting-edge technology to deliver exceptional results. We focus on creating solutions that are not only visually stunning but also highly functional and scalable.</p>
                        </div>
                    </div>

                    <aside className="service-sidebar-bx">
                        <div className="sidebar-card">
                            <h4>Tech Stack</h4>
                            <div className="tags-container">
                                {service.techStack.map((tech, i) => (
                                    <span key={i} className="ritovex-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <h4>Service Highlights</h4>
                            <ul className="highlights-list">
                                <li>✓ Expert team with 8+ years experience</li>
                                <li>✓ Agile development process</li>
                                <li>✓ 24/7 support and maintenance</li>
                                <li>✓ Scalable and future-proof solutions</li>
                            </ul>
                        </div>

                        <div className="sidebar-cta">
                            <h3>Ready to start?</h3>
                            <p>Let's turn this concept into reality.</p>
                            <Link to="/contact" className="btn-primary full-width">Start Project</Link>
                        </div>
                    </aside>
                </div>

                {/* Related Services Section */}
                {relatedServices.length > 0 && (
                    <div className="related-services-section">
                        <h2 className="section-title">Related Services</h2>
                        <div className="related-services-grid">
                            {relatedServices.map((relatedService) => (
                                <Link
                                    key={relatedService.id}
                                    to={`/service/${relatedService.id}`}
                                    className="related-service-card"
                                >
                                    <div className="related-service-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <h3>{relatedService.title}</h3>
                                    <p>{relatedService.subtitle}</p>
                                    <span className="learn-more">Learn More →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
