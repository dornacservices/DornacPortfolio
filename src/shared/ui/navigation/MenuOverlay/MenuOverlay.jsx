import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MenuOverlay.css';

const links = [
    { name: "Services", href: "/" }, // Scroll to top/services usually better handled by route but simplifying
    { name: "Mobile", href: "/service/mobile-development" },
    { name: "Web", href: "/service/web-engineering" },
    { name: "Projects", href: "/" }, // Should ideally scroll to #projects if on home, or route
    { name: "About", href: "/company/about" },
    { name: "Contact", href: "/contact" },
];

export default function MenuOverlay({ isOpen, onClose }) {
    const overlayRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });

        // Set initial state
        gsap.set(overlayRef.current, { scale: 0.9, opacity: 0, autoAlpha: 0 });

        if (isOpen) {
            // Animate In
            tl.to(overlayRef.current, {
                scale: 1,
                opacity: 1,
                autoAlpha: 1,
                duration: 0.4,
                ease: "power3.out"
            });

            tl.fromTo(linksRef.current,
                { x: 20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" },
                "-=0.2"
            );

            tl.play();
        } else {
            // Animate Out
            tl.to(linksRef.current, {
                x: 20, opacity: 0, duration: 0.2, stagger: 0.05, ease: "power2.in"
            });

            tl.to(overlayRef.current, {
                scale: 0.9,
                opacity: 0,
                autoAlpha: 0,
                duration: 0.3,
                ease: "power3.in"
            });

            tl.play();
        }
    }, [isOpen]);

    return (
        <div className="menu-overlay" ref={overlayRef}>
            <div className="menu-container">
                <ul className="menu-links">
                    {links.map((link, index) => (
                        <li key={index} className="menu-item">
                            <span className="menu-idx">0{index + 1}</span>
                            <a
                                href={link.href}
                                onClick={onClose}
                                ref={el => linksRef.current[index] = el}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="menu-footer">
                    <div className="footer-col">
                        <p>hello@dornac.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
