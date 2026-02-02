import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '@shared/ui/navigation/BackButton/BackButton';
import './ContactPage.css';

const techOptions = [
    "Mobile App Development",
    "Web Platform",
    "UI/UX Design",
    "Custom Software",
    "Consultation"
];

export default function ContactPage() {
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

        // Construct mailto link
        const subject = `New Inquiry from ${name || 'Website Visitor'}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone || 'Not provided'}%0D%0AInterests: ${selectedTech.join(', ')}%0D%0A%0D%0ADetails:%0D%0A${details}`;

        window.location.href = `mailto:dornacservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const toggleTech = (tech) => {
        setSelectedTech(prev =>
            prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
        );
    };

    return (
        <div className="contact-page-wrapper">
            <div className="container contact-container">
                <BackButton text="Back to Home" to="/" />

                <div className="contact-header">
                    <div className="badge-wrapper"><div className="badge">Get In Touch</div></div>
                    <h1 className="contact-title">Let's Build Something <br /><span className="highlight">Extraordinary.</span></h1>
                    <p className="contact-desc">
                        Have a project in mind? We'd love to hear about it. Tell us your goals, and we'll help you reach them.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Form Section */}
                    <form className="ritovex-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <label>I'm interested in...</label>
                            <div className="tech-options">
                                {techOptions.map((tech) => (
                                    <button
                                        key={tech}
                                        type="button"
                                        className={`tech-chip ${selectedTech.includes(tech) ? 'active' : ''}`}
                                        onClick={() => toggleTech(tech)}
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Your Name <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address <span className="required-star">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@company.com"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Project Details <span className="required-star">*</span></label>
                            <textarea
                                name="details"
                                placeholder="Tell us about the project scope, timeline, and goals..."
                                rows={5}
                                className="form-input"
                                value={formData.details}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button className="btn-primary submit-btn" type="submit">Send Message</button>
                    </form>

                    {/* Info Sidebar */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Contact Info</h3>
                            <p>dornacservices@gmail.com</p>
                            <p>+91 000 000 0000</p>
                            <p>Orai, India</p>
                        </div>
                        <div className="info-card">
                            <h3>Careers</h3>
                            <p>dornacservices@gmail.com</p>
                            <p>We are always looking for talent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
