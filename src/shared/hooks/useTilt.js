import { useEffect, useRef } from 'react';

export const useTilt = (active = true) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !active) return;

        const el = ref.current;
        const handleMove = (e) => {
            const height = el.clientHeight;
            const width = el.clientWidth;

            // Mouse position relative to element
            const rect = el.getBoundingClientRect();
            const xVal = e.clientX - rect.left; // x position within the element.
            const yVal = e.clientY - rect.top;  // y position within the element.

            // Calculate rotation
            // Max rotation = 20 degrees
            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);

            const string = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            el.style.transform = string;
        };

        const handleOut = () => {
            el.style.transform = `perspective(1000px) scale(1) rotateX(0) rotateY(0)`;
        };

        const handleDown = () => {
            el.style.transform = `perspective(1000px) scale(0.95)`;
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleOut);
        el.addEventListener('mousedown', handleDown);
        el.addEventListener('mouseup', handleMove); // Restore

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleOut);
            el.removeEventListener('mousedown', handleDown);
            el.removeEventListener('mouseup', handleMove);
        };
    }, [active]);

    return ref;
};
