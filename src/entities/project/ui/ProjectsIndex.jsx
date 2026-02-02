import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import ScrollArrows from '@shared/ui/ScrollArrows/ScrollArrows';
import './ProjectsIndex.css';

export default function ProjectsIndex() {
    const gridRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projects-index-page">
            <div className="page-background-elements">
                <div className="glow-circle glow-1"></div>
                <div className="glow-circle glow-2"></div>
            </div>

            <div className="container">
                <div className="page-navigation">
                    <BackButton text="Back to Home" to="/" />
                </div>

                <header className="page-header text-center">
                    <span className="badge">Our Portfolio</span>
                    <h1 className="page-title">Case Studies of Success</h1>
                    <p className="page-subtitle">
                        Discover how we've helped leading companies innovate and scale.
                    </p>
                </header>

                <div className="projects-grid" ref={gridRef}>
                    {dornacContent.projects.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id} className="project-index-card">
                            <div className="card-visual">
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className="card-overlay">
                                    <span className="view-text">View Case Study</span>
                                </div>
                                <span className="project-category-tag">{project.category}</span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-desc">{project.desc}</p>
                                <div className="card-footer">
                                    <span className="learn-more">Explore Project
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
