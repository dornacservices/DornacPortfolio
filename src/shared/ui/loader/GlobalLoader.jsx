import React, { useEffect, useState } from 'react';
import './GlobalLoader.css';

const GlobalLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial load or listen to router events if possible
        // For now, just a simple timeout on mount to show the effect
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="global-loader">
            <div className="loader-content">
                <div className="loader-logo">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="url(#loader_grad)" strokeWidth="8" strokeLinecap="round" className="loader-circle" />
                        <defs>
                            <linearGradient id="loader_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A78BFA" />
                                <stop offset="1" stopColor="#EC4899" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h2 className="loader-text">Dornac</h2>
            </div>
        </div>
    );
};

export default GlobalLoader;
