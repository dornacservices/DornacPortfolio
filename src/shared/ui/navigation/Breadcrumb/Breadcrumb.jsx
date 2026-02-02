import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

export default function Breadcrumb({ items }) {
    // items format: [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Web Design' }]

    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        {item.path ? (
                            <>
                                <Link to={item.path} className="breadcrumb-link">
                                    {item.label}
                                </Link>
                                {index < items.length - 1 && (
                                    <svg className="breadcrumb-separator" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                )}
                            </>
                        ) : (
                            <span className="breadcrumb-current">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
