"use client";

import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thanks for getting in touch!");
        setFormData({ firstName: "", lastName: "", email: "", department: "", message: "" });
    };

    return (
        <section className="contact-form-section section">
            <div className="container contact-form-container">
                <h2 className="contact-form__title">Get in touch</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form__row">
                        <div className="contact-form__group">
                            <input
                                type="text"
                                placeholder="First name"
                                className="contact-input"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="contact-form__group">
                            <input
                                type="text"
                                placeholder="Last name"
                                className="contact-input"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-form__group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="contact-input"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <select
                            className="contact-input contact-select"
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            required
                        >
                            <option value="" disabled hidden>Department</option>
                            <option value="sales">Sales</option>
                            <option value="support">Customer Support</option>
                            <option value="careers">Careers</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="contact-form__group contact-form__group--text">
                        <textarea
                            placeholder="Message"
                            className="contact-input contact-textarea"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                        Send message
                    </button>

                    <p className="contact-form__legal">
                        By contacting us, you agree to Arxenovasocial's <strong>Terms and Conditions</strong>.
                    </p>
                </form>
            </div>
        </section>
    );
}
