import React, { useState } from 'react';
import GlassCard from './GlassCard';
import './Contact.css';

const techOptions = [
    "Mobile App (Flutter)",
    "Web Platform (React)",
    "3D Experience",
    "Custom Software",
    "Consultation"
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        details: ''
    });
    const [selectedTech, setSelectedTech] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, details } = formData;

        const subject = `New Inquiry from ${name || 'Homepage Visitor'}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone || 'Not provided'}%0D%0AInterests: ${selectedTech.join(', ')}%0D%0A%0D%0ADetails:%0D%0A${details}`;

        window.location.href = `mailto:dornacservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const toggleTech = (tech) => {
        setSelectedTech(prev =>
            prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
        );
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <GlassCard className="contact-card">
                    <h2 className="contact-title">Start Your Project</h2>
                    <p className="contact-desc">Select what you need, and we'll engineer the rest.</p>

                    <div className="tech-picker">
                        <h3 className="picker-label">I'm interested in...</h3>
                        <div className="tech-options">
                            {techOptions.map((tech) => (
                                <button
                                    key={tech}
                                    className={`tech-chip ${selectedTech.includes(tech) ? 'active' : ''}`}
                                    onClick={() => toggleTech(tech)}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Mobile Number (Optional)"
                                className="form-input"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="details"
                                placeholder="Tell us about the vision... *"
                                rows={4}
                                className="form-input"
                                value={formData.details}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button className="submit-btn" type="submit">Initialize Contact &rarr;</button>
                    </form>
                </GlassCard>
            </div>
        </section>
    );
}
