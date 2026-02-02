import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0 };
        let scrollY = 0;

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];

            const numParticles = Math.floor(width / 5); // Balanced particle density
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    z: Math.random() * 2 + 0.5, // Depth factor
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2
                });
            }
        };

        const draw = () => {
            // Theme detection for colors
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            // Brighter Neon Violet for Dark Mode | Deep Contrast Violet for Light Mode
            const particleColor = isDark ? 'rgba(167, 139, 250,' : 'rgba(76, 29, 149,';

            // Clear with slight trail effect (optional, but clean clear is better for glassmorphism)
            ctx.clearRect(0, 0, width, height);

            // Connect nearby particles (Tech Network)
            particles.forEach((p, i) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Scroll influence (Fly through) - Keep this as it adds dynamic depth
                const sy = scrollY * 0.1 * p.z;

                // Mouse influence (Local Only)
                // We calculate distance from mouse to this specific particle (projected 2D)
                let renderX = p.x;
                // Infinite scroll wrap logic ( Robust Modulo )
                const loopHeight = height + 200; // Extra buffer

                // Calculate raw position
                let rawY = p.y - sy;

                // Wrap securely using modulo to keep in range [-100, height+100]
                // We perform the wrap relative to the loopHeight
                // ((rawY % loopHeight) + loopHeight) % loopHeight handles negative numbers correctly in JS
                let wrappedY = ((rawY % loopHeight) + loopHeight) % loopHeight;

                // Adjust to render text (shift back to cover top buffer if needed, but 0 to loopHeight is fine for drawing)
                // Let's center it: simpler is just mapping 0..loopHeight to -100..height+100
                let renderY = wrappedY - 100;

                // Interaction
                const dx = mouse.x - renderX;
                const dy = mouse.y - renderY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Only affect particles within 200px of mouse
                if (dist < 200) {
                    const force = (200 - dist) / 200; // 0 to 1 based on nearness
                    const angle = Math.atan2(dy, dx);
                    // Push away slightly
                    renderX -= Math.cos(angle) * force * 20;
                    renderY -= Math.sin(angle) * force * 20;
                }

                // Wrap actual p.y for next frame logic (keeping logical position separate from render position helps, but for simple loop:
                // We will just use the wrapped Render coordinates for drawing)

                // Update logical p.y for wrapping (simplified from previous)
                if (p.y - sy < -100) p.y += height + 100; // Reset logical Y to keep it in view

                const vx = renderX;
                const vy = renderY;

                // Draw Particle
                const alpha = (p.z / 2.5);
                ctx.fillStyle = `${particleColor} ${alpha})`; // fixed typo in original
                ctx.beginPath();
                ctx.arc(vx, vy, p.size * p.z, 0, Math.PI * 2);
                ctx.fill();

                // Draw Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];

                    // Calculate p2 render pos with same robust wrapping
                    const sy2 = scrollY * 0.1 * p2.z;
                    let rawY2 = p2.y - sy2;
                    let wrappedY2 = ((rawY2 % loopHeight) + loopHeight) % loopHeight;
                    let vy2 = wrappedY2 - 100;

                    const dist2 = Math.hypot((vx - p2.x), (vy - vy2)); // approx check

                    if (dist2 < 120) {
                        ctx.beginPath();
                        // Increased opacity for better visibility (0.1 -> 0.35)
                        ctx.strokeStyle = `${particleColor} ${0.35 * alpha})`;
                        ctx.lineWidth = 0.8; // Slightly thicker lines
                        ctx.moveTo(vx, vy);
                        ctx.lineTo(p2.x, vy2);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(draw);
        };

        const handleResize = () => init();
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        init();
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default TechBackground;
