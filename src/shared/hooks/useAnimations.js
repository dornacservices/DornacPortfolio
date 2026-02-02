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
                { y: 80, rotateX: -60, opacity: 0, transformOrigin: "top center", transformPerspective: 1000 },
                {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 2. Cards 3D Glare Entry (Swing In from back)
        const grids = document.querySelectorAll('.anim-grid, .ritovex-grid, .industry-grid-new');
        grids.forEach(grid => {
            const cards = grid.querySelectorAll('.ritovex-card, .anim-card, .team-card, .blog-card, .portfolio-card, .testimonial-card, .stat-card, .ritovex-highlight-card');

            if (cards.length > 0) {
                gsap.fromTo(cards,
                    {
                        y: 100,
                        z: -150,
                        rotateX: 25,
                        opacity: 0,
                        transformPerspective: 1200
                    },
                    {
                        y: 0,
                        z: 0,
                        rotateX: 0,
                        opacity: 1,
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: grid,
                            start: "top 85%"
                        }
                    }
                );
            }
        });

        // 3. Hero Mouse-Follow 3D Tilt
        const heroVisual = document.querySelector('.visual-3d-container');
        if (heroVisual) {
            const handleHeroMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = heroVisual.getBoundingClientRect();
                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;

                gsap.to(heroVisual, {
                    rotateY: x * 15,
                    rotateX: -y * 15,
                    duration: 0.5,
                    ease: "power2.out"
                });
            };

            const resetHeroTilt = () => {
                gsap.to(heroVisual, {
                    rotateY: 0,
                    rotateX: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleHeroMouseMove);
            heroVisual.addEventListener('mouseleave', resetHeroTilt);

            // Clean up mouse listeners
            return () => {
                window.removeEventListener('mousemove', handleHeroMouseMove);
                heroVisual.removeEventListener('mouseleave', resetHeroTilt);
            };
        }

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
    }, []);
};
