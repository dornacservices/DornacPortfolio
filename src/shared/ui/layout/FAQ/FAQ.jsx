import React, { useState } from 'react';
import { dornacContent } from '@shared/data/dornacContent';
import './FAQ.css';

export default function FAQ() {
    const { title, subtitle, categories } = dornacContent.home.faq;
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                {/* F-Pattern: Header flows naturally */}
                <div className="section-header">
                    <span className="badge anim-text">FAQ</span>
                    <h2 className="section-title anim-text">{title}</h2>
                    <p className="section-subtitle anim-text">{subtitle}</p>
                </div>

                <div className="faq-content">
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} className="faq-category">
                            <h3 className="category-title">{category.name}</h3>
                            <div className="questions-list">
                                {category.questions.map((item, qIndex) => {
                                    const index = `${catIndex}-${qIndex}`;
                                    const isOpen = openIndex === index;

                                    return (
                                        <div
                                            key={qIndex}
                                            className={`faq-item ${isOpen ? 'open' : ''}`}
                                        >
                                            <button
                                                className="faq-question"
                                                onClick={() => toggleQuestion(catIndex, qIndex)}
                                            >
                                                <span>{item.question}</span>
                                                <svg
                                                    className="faq-icon"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </button>
                                            <div className="faq-answer">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
