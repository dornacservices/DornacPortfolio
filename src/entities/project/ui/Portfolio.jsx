import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import './Portfolio.css';

export default function Portfolio() {
    const { projects } = dornacContent; // Now at top level

    return (
        <section id="projects" className="portfolio-section">
            <h2 className="section-title">The Proof</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="project-card anim-card">
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-card-img" />
                            <div className="project-card-overlay"></div>
                            <span className="project-card-category">{project.category}</span>
                        </div>
                        <div className="project-card-content">
                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-desc">{project.desc}</p>
                            <span className="project-link-text">Case Study &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
