import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import Breadcrumb from '@shared/ui/navigation/Breadcrumb/Breadcrumb';
import './BlogPostPage.css';

export default function BlogPostPage() {
    const { slug } = useParams();
    const post = dornacContent.home.blog.posts.find(p => p.id === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) return <div className="page-404">Article Not Found <Link to="/">Return</Link></div>;

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Blog', path: '/#blog' },
        { label: post.title }
    ];

    return (
        <div className="ritovex-page-wrapper">
            <div className="container blog-container">
                <BackButton text="Back to Blog" to="/#blog" />
                <Breadcrumb items={breadcrumbItems} />

                <header className="article-header">
                    <div className="badge">{post.category}</div>
                    <h1 className="article-title">{post.title}</h1>
                    <div className="article-meta">
                        <span>{post.date}</span>
                        <span className="dot">•</span>
                        <span>By {post.author}</span>
                    </div>
                </header>

                <div className="article-visual">
                    <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <linearGradient id="blogHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.1 }} />
                                <stop offset="100%" style={{ stopColor: 'var(--secondary)', stopOpacity: 0.1 }} />
                            </linearGradient>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#blogHeroGrad)" />
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        <circle cx="400" cy="200" r="150" fill="var(--primary)" opacity="0.05" />
                        <circle cx="600" cy="100" r="100" fill="var(--secondary)" opacity="0.05" />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="var(--primary)" fontSize="24" opacity="0.5" fontWeight="bold" letterSpacing="0.2em">
                            DORNAC INSIGHTS
                        </text>
                    </svg>
                </div>

                <article className="article-content">
                    <p className="lead-text">{post.content}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>The Key Takeaway</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>

                <div className="article-cta">
                    <h3>Enjoyed this read?</h3>
                    <p>Let's discuss how we can help your business succeed.</p>
                    <Link to="/contact" className="btn-primary">Work With Us</Link>
                </div>
            </div>
        </div>
    );
}
