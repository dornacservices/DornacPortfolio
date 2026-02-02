import React from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './TechStack.css';

export default function TechStack() {
    const { title, subtitle, categories } = dornacContent.home.techStack;

    return (
        <section className="tech-stack-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Technologies</span>
                    <h2 className="section-title anim-text">{title}</h2>
                    <p className="section-subtitle anim-text">{subtitle}</p>
                </div>

                <div className="tech-categories">
                    {categories.map((category, index) => (
                        <div key={index} className="tech-category anim-card">
                            <h3 className="category-name">{category.name}</h3>
                            <div className="tech-tags">
                                {category.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
