import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dornacContent } from '@shared/data/dornacContent';
import './Footer.css';

import Logo from '@shared/ui/layout/Logo/Logo';

export default function Footer() {
    const { services, company } = dornacContent.pages;
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="container footer-grid">
                {/* Col 1: Brand */}
                <div className="footer-col brand-col">
                    <Logo style={{ marginBottom: '1.5rem' }} />
                    <p className="footer-desc">
                        We help ambitious brands define their digital future using modern technology and strategy.
                    </p>

                    {/* Social Media Links */}
                    <div className="footer-social">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon social-linkedin" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon social-twitter" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon social-github" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon social-dribbble" aria-label="Dribbble">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.51m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Col 2: Company */}
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/company/about">About Us</Link></li>
                        <li><Link to="/company/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Col 3: Services */}
                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        {services.slice(0, 5).map(s => (
                            <li key={s.id}><Link to={`/service/${s.id}`}>{s.title}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Col 4: Connect */}
                <div className="footer-col contact-col">
                    <h4>Connect</h4>
                    <ul className="contact-list">
                        <li>
                            <span className="label">Email</span>
                            <a href="mailto:dornacservices@gmail.com" className="contact-link">dornacservices@gmail.com</a>
                        </li>
                        <li>
                            <span className="label">Phone</span>
                            <a href="tel:+910000000000" className="contact-link">+91 000 000 0000</a>
                        </li>
                        <li>
                            <span className="label">Office</span>
                            <span className="contact-text">Orai, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="container footer-newsletter">
                <div className="newsletter-content">
                    <h3>Stay Updated</h3>
                    <p>Subscribe to our newsletter for the latest insights and updates.</p>
                </div>
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form-footer">
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn-primary">Subscribe</button>
                </form>
            </div>

            <div className="container footer-bottom">
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Dornac Services. All rights reserved.
                </div>
                <div className="footer-legal">
                    <Link to="/">Terms</Link>
                    <Link to="/">Privacy</Link>
                </div>
            </div>

            {/* Back to Top Button */}
            <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </button>
        </footer>
    );
}
