import React from 'react';
import './Logo.css';

const Logo = ({ className = "", style = {} }) => {
    return (
        <div className={`dornac-logo-wrapper ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '14px', ...style }}>
            {/* Premium 'D' Emblem */}
            <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main Body: Sleek D Shape */}
                <path
                    d="M10 8C10 5.79086 11.7909 4 14 4H20C27.732 4 34 10.268 34 18V22C34 29.732 27.732 36 20 36H14C11.7909 36 10 34.2091 10 32V8Z"
                    fill="url(#logo_gradient)"
                    fillOpacity="0.15"
                    stroke="url(#logo_gradient)"
                    strokeWidth="2.5"
                />

                {/* Inner Accent Line (Tech Circuit Feel) */}
                <path
                    d="M18 12V28"
                    stroke="var(--text-main)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <circle cx="18" cy="12" r="1.5" fill="var(--text-main)" />
                <circle cx="18" cy="28" r="1.5" fill="var(--text-main)" />

                {/* Accent Node */}
                <circle cx="26" cy="20" r="3" fill="var(--primary)" />

                <defs>
                    <linearGradient id="logo_gradient" x1="10" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--primary)" />
                        <stop offset="1" stopColor="var(--primary-hover)" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    letterSpacing: '-0.5px',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-main)',
                    lineHeight: 1
                }}>
                    DORNAC
                </span>
            </div>
        </div>
    );
};

export default Logo;
