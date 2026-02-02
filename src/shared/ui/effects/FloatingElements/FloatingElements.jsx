import React, { useEffect, useState } from 'react';
import './FloatingElements.css';

const FloatingElements = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="floating-elements-container">
            {/* Floating Geometric Shapes with Parallax */}
            <div
                className="floating-shape shape-1"
                style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)` }}
            >
                <div className="shape-inner gradient-purple"></div>
            </div>
            <div
                className="floating-shape shape-2"
                style={{ transform: `translateY(-${scrollY * 0.15}px) rotate(-${scrollY * 0.03}deg)` }}
            >
                <div className="shape-inner gradient-pink"></div>
            </div>
            <div
                className="floating-shape shape-3"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                <div className="shape-inner gradient-blue"></div>
            </div>
            <div
                className="floating-shape shape-4"
                style={{ transform: `translateY(-${scrollY * 0.25}px)` }}
            >
                <div className="shape-inner gradient-yellow"></div>
            </div>
            <div
                className="floating-shape shape-5"
                style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.18}px)` }}
            >
                <div className="shape-inner gradient-purple-light"></div>
            </div>
            <div
                className="floating-shape shape-6"
                style={{ transform: `translateY(-${scrollY * 0.12}px)` }}
            >
                <div className="shape-inner gradient-pink-light"></div>
            </div>

            {/* Floating Circles with different parallax speeds */}
            <div className="floating-circle circle-1" style={{ transform: `translateY(${scrollY * 0.05}px)` }}></div>
            <div className="floating-circle circle-2" style={{ transform: `translateY(-${scrollY * 0.08}px)` }}></div>
            <div className="floating-circle circle-3" style={{ transform: `translateY(${scrollY * 0.15}px)` }}></div>
            <div className="floating-circle circle-4" style={{ transform: `translateY(-${scrollY * 0.1}px)` }}></div>
        </div>
    );
};

export default FloatingElements;
