import React from 'react';
import { useTheme } from '@app/context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 101,
                background: 'rgba(128,128,128,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-color)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={theme}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'dark' ? '☀' : '☾'}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
