import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { useTheme } from '@app/context/ThemeContext';

import Logo from '@shared/ui/layout/Logo/Logo';

export default function Navbar({ onMenuClick }) {
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                {/* 1. Logo Section */}
                <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>

                {/* 2. Centered Navigation */}
                <div className="nav-links-desktop">
                    <Link to="/">Home</Link>
                    <Link to="/company/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* 3. Actions Section */}
                <div className="nav-actions">
                    <Link to="/contact" className="btn-primary nav-cta">
                        Let's Talk
                    </Link>
                    <button className="theme-toggle" onClick={(e) => toggleTheme(e)} aria-label="Toggle Theme">
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Trigger */}
                <button className="mobile-toggle" onClick={onMenuClick}>
                    Menu
                </button>
            </div>
        </nav>
    );
}
