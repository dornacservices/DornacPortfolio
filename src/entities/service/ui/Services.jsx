import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dornacContent } from '@shared/data/dornacContent';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const container = useRef();
    const { services } = dornacContent.pages; // Now getting from pages.services

    // Limiting to first 2 or 4 for sections, showing more in FeatureList
    const previewServices = services.slice(0, 4);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card-wrapper", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="services" className="services-section">
            <div className="services-header">
                <h2 className="section-title">The Grid (Highlights)</h2>
            </div>
            <div className="services-grid">
                {previewServices.map((service, index) => (
                    <Link to={`/service/${service.id}`} key={service.id} className="service-card-wrapper anim-card">
                        <div className="service-card-inner">
                            <div className="service-image-container">
                                <img src={service.image} alt={service.title} className="service-card-img" />
                                <div className="service-card-overlay"></div>
                                <span className="service-number">0{index + 1}</span>
                            </div>
                            <div className="service-card-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-tech">{service.tech}</p>
                                <p className="service-desc">{service.overview.substring(0, 80)}...</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
