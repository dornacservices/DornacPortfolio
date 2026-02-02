import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import ScrollArrows from '@shared/ui/ScrollArrows/ScrollArrows';
import './BlogSection.css';

export default function BlogSection() {
    const gridRef = useRef(null);

    return (
        <section className="blog-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge anim-text">Latest News</span>
                    <h2 className="section-title anim-text">{dornacContent.home.blog.title}</h2>
                </div>

                <div className="blog-grid anim-grid" ref={gridRef}>
                    {dornacContent.home.blog.posts.map((post, index) => (
                        <Link to={`/blog/${post.id}`} key={index} className="blog-card anim-card">
                            <div className="blog-visual-container">
                                <img src={post.image} alt={post.title} className="blog-img" />
                                <div className="blog-overlay"></div>
                                <span className="blog-cat">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.content.substring(0, 80)}...</p>
                                <span className="read-more">Read Article &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <ScrollArrows containerRef={gridRef} />
            </div>
        </section>
    );
}
