import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import ScrollArrows from '@shared/ui/ScrollArrows/ScrollArrows';
import './ServicesIndex.css';

export default function ServicesIndex() {
    const services = dornacContent.services || dornacContent.pages.services;
    const gridRef = useRef(null);

    useEffect(() => {
        // Restore scroll position if returning from a service detail page
        const savedScrollPosition = sessionStorage.getItem('servicesIndexScrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
            sessionStorage.removeItem('servicesIndexScrollPosition');
        } else {
            window.scrollTo(0, 0);
        }

        // Save scroll position before navigating away
        const handleScroll = () => {
            sessionStorage.setItem('servicesIndexScrollPosition', window.scrollY.toString());
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="services-index-page">
            <div className="page-background-elements">
                <div className="glow-circle glow-1"></div>
                <div className="glow-circle glow-2"></div>
            </div>

            <div className="container">
                <div className="page-navigation">
                    <BackButton text="Back to Home" to="/" />
                </div>

                <header className="page-header text-center">
                    <span className="badge">Our Expertise</span>
                    <h1 className="page-title">Digital Excellence for Every Need</h1>
                    <p className="page-subtitle">
                        Comprehensive solutions tailored to empower your business in the digital era.
                    </p>
                </header>

                <div className="services-grid" ref={gridRef}>
                    {services.map((s) => (
                        <Link to={`/service/${s.id}`} key={s.id} className="service-index-card">
                            <div className="card-visual">
                                {/* Using a placeholder or service specific icon if available */}
                                <div className="card-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{s.title}</h3>
                                <p className="card-desc">{s.overview}</p>
                                <div className="card-footer">
                                    <span className="learn-more">Learn More
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <ScrollArrows containerRef={gridRef} />
            </div>
        </div>
    );
}
