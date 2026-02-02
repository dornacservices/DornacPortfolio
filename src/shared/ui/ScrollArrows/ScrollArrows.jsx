import React from 'react';
import './ScrollArrows.css';

export default function ScrollArrows({ containerRef, className = '' }) {
    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = 400;
            const currentScroll = containerRef.current.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            containerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`scroll-arrows ${className}`}>
            <button
                className="scroll-arrow scroll-arrow-left"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button
                className="scroll-arrow scroll-arrow-right"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
}
