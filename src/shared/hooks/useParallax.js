import { useEffect } from 'react';

/**
 * Custom hook for 4D parallax scroll effects
 * Adds depth-based parallax to elements with data-parallax attributes
 */
export const useParallaxScroll = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            
            // Parallax for elements with data-parallax attribute
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            parallaxElements.forEach((element) => {
                const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px) translateZ(${Math.abs(yPos) * 0.1}px)`;
            });

            // 3D rotation based on scroll for elements with data-rotate-scroll
            const rotateElements = document.querySelectorAll('[data-rotate-scroll]');
            rotateElements.forEach((element) => {
                const speed = parseFloat(element.getAttribute('data-rotate-scroll')) || 0.05;
                const rotation = scrolled * speed;
                element.style.transform = `rotateX(${rotation}deg) rotateY(${rotation * 0.5}deg)`;
            });

            // Depth fade for elements with data-depth-fade
            const depthElements = document.querySelectorAll('[data-depth-fade]');
            depthElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const elementCenter = rect.top + rect.height / 2;
                const distanceFromCenter = Math.abs(windowHeight / 2 - elementCenter);
                const maxDistance = windowHeight / 2;
                const depth = Math.max(0, (1 - distanceFromCenter / maxDistance) * 100);
                
                element.style.transform = `translateZ(${depth}px)`;
                element.style.opacity = Math.max(0.3, depth / 100);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

/**
 * Custom hook for mouse-based 4D tilt effect
 * Adds 3D tilt to elements based on mouse position
 */
export const useMouseTilt = (ref, intensity = 10) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * intensity;
            const rotateY = ((centerX - x) / centerX) * intensity;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        };

        const handleMouseLeave = () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [ref, intensity]);
};
