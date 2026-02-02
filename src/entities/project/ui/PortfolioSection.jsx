import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import ScrollArrows from '@shared/ui/ScrollArrows/ScrollArrows';
import './PortfolioSection.css';

export default function PortfolioSection() {
    const gridRef = useRef(null);

    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Our Work</span>
                    <h2 className="section-title anim-text">Selected Projects.</h2>
                </div>

                <div className="portfolio-grid anim-grid" ref={gridRef}>
                    {dornacContent.projects.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id} className="portfolio-card anim-card">
                            <div className="portfolio-visual">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="visual-overlay">View Case Study</div>
                            </div>
                            <div className="portfolio-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <ScrollArrows containerRef={gridRef} />
            </div>
        </section>
    );
}
