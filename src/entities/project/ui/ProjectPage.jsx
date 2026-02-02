
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import Breadcrumb from '@shared/ui/navigation/Breadcrumb/Breadcrumb';
import ScrollArrows from '@shared/ui/ScrollArrows/ScrollArrows';
import './ProjectPage.css';

export default function ProjectPage() {
    const { slug } = useParams();
    const project = dornacContent.projects.find(p => p.id === slug);
    const allProjects = dornacContent.projects;
    const relatedProjects = allProjects.filter(p => p.id !== slug && p.category === project?.category).slice(0, 3);
    const relatedGridRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) return <div className="page-404">Project Not Found <Link to="/">Return Home</Link></div>;

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        { label: project.title }
    ];

    return (
        <div className="ritovex-page-wrapper">
            <div className="container">
                <BackButton text="Back to Portfolio" to="/projects" />
                <Breadcrumb items={breadcrumbItems} />

                <div className="project-hero">
                    <div className="badge">{project.category}</div>
                    <h1 className="page-h1">{project.title}</h1>
                    <p className="page-h1-sub">{project.desc}</p>
                </div>

                {/* Project Metrics */}
                <div className="project-metrics">
                    <div className="metric-item">
                        <div className="metric-icon">📅</div>
                        <div className="metric-content">
                            <span className="metric-label">Duration</span>
                            <span className="metric-value">6 months</span>
                        </div>
                    </div>
                    <div className="metric-item">
                        <div className="metric-icon">👥</div>
                        <div className="metric-content">
                            <span className="metric-label">Team Size</span>
                            <span className="metric-value">8 members</span>
                        </div>
                    </div>
                    <div className="metric-item">
                        <div className="metric-icon">🚀</div>
                        <div className="metric-content">
                            <span className="metric-label">Status</span>
                            <span className="metric-value">Completed</span>
                        </div>
                    </div>
                    <div className="metric-item">
                        <div className="metric-icon">⭐</div>
                        <div className="metric-content">
                            <span className="metric-label">Client Rating</span>
                            <span className="metric-value">5.0/5.0</span>
                        </div>
                    </div>
                </div>

                <div className="project-visual-large anim-card">
                    <img src={project.image} alt={project.title} className="project-visual-img" />
                    <div className="visual-overlay"></div>
                </div>

                <div className="project-details-grid">
                    <div className="detail-col">
                        <h3>The Challenge</h3>
                        <p>We were tasked to redefine the user experience for {project.title}, focusing on scalability and performance. The client needed a solution that could handle rapid growth while maintaining exceptional user experience.</p>
                    </div>
                    <div className="detail-col">
                        <h3>Our Solution</h3>
                        <p>Implementing a modern stack and intuitive design system to drive engagement and growth. We leveraged cutting-edge technologies and best practices to deliver a robust, scalable solution.</p>
                    </div>
                    <div className="detail-col">
                        <h3>Technologies Used</h3>
                        <div className="tech-tags">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">PostgreSQL</span>
                            <span className="tech-tag">AWS</span>
                        </div>
                    </div>
                    <div className="detail-col">
                        <h3>Results</h3>
                        <ul className="results-list">
                            <li>✓ 150% increase in user engagement</li>
                            <li>✓ 40% reduction in load time</li>
                            <li>✓ 99.9% uptime achieved</li>
                        </ul>
                    </div>
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <div className="related-projects-section">
                        <h2 className="section-title">More {project.category} Projects</h2>
                        <div className="related-projects-grid" ref={relatedGridRef}>
                            {relatedProjects.map((relatedProject) => (
                                <Link
                                    key={relatedProject.id}
                                    to={`/project/${relatedProject.id}`}
                                    className="related-project-card"
                                >
                                    <div className="related-project-image">
                                        <img src={relatedProject.image} alt={relatedProject.title} />
                                    </div>
                                    <div className="related-project-content">
                                        <span className="project-category">{relatedProject.category}</span>
                                        <h3>{relatedProject.title}</h3>
                                        <p>{relatedProject.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <ScrollArrows containerRef={relatedGridRef} />
                    </div>
                )}

                <div className="project-cta">
                    <h3>Have a similar project?</h3>
                    <p>Let's discuss how we can help bring your vision to life</p>
                    <Link to="/contact" className="btn-primary">Let's Talk</Link>
                </div>
            </div>
        </div>
    );
}
