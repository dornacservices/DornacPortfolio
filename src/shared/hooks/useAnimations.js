import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
    useEffect(() => {
        // Global 3D Scroll Animations

        // 1. Text 3D Reveal (Flip Up)
        const textElements = document.querySelectorAll('.anim-text');
        textElements.forEach(el => {
            gsap.fromTo(el,
                { y: 50, rotateX: 45, opacity: 0, transformOrigin: "top center" },
                {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 2. Cards 3D Glare Entry (Swing In from back)
        const grids = document.querySelectorAll('.anim-grid, .ritovex-grid, .industry-grid-new'); // Added industry grid
        grids.forEach(grid => {
            const cards = grid.querySelectorAll('.ritovex-card, .anim-card, .team-card, .blog-card, .portfolio-card, .testimonial-card, .stat-card, .ritovex-highlight-card'); // Full list

            if (cards.length > 0) {
                gsap.fromTo(cards,
                    {
                        y: 50,
                        // z: -200, // Removed for flat look
                        // rotateX: 30, // Removed for flat look
                        opacity: 0,
                        // transformPerspective: 1000 // Removed
                    },
                    {
                        y: 0,
                        // z: 0,
                        // rotateX: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.1,
                        ease: "back.out(1.5)", // Bouncy 3D arrive
                        scrollTrigger: {
                            trigger: grid,
                            start: "top 85%"
                        }
                    }
                );
            }
        });

        // Global 3D Tilt Effect removed for performance
        // The CSS hover effects are sufficient and much more performant.

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
    }, []);
};
