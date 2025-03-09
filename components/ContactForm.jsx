'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Updated validation - only name is required
        if (!formData.name || !formData.phone || !formData.service) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: 'Please fill out all required fields (Name, Phone, and Service).'
            });
            return;
        }

        // Set loading state
        setFormStatus({
            isSubmitting: true,
            isSubmitted: false,
            isError: false,
            message: ''
        });

        try {
            // Make API call to your real endpoint
            const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/brandingForm/create`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok || !data.status) {
                throw new Error(data.msg || 'Something went wrong');
            }

            // Success state
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                isError: false,
                message: data.msg || 'Thank you! Your message has been sent successfully.'
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus(prev => ({
                    ...prev,
                    isSubmitted: false,
                    message: ''
                }));
            }, 5000);

        } catch (error) {
            // Error state
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: error.message || 'Something went wrong. Please try again.'
            });
        }
    };

    return (
        <div className="contact-form-container">
            {formStatus.isSubmitted && (
                <div className="form-success-message">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 4L12 14.01L9 11.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>{formStatus.message}</p>
                </div>
            )}

            {formStatus.isError && (
                <div className="form-error-message">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ef4444" strokeWidth="2" />
                        <path d="M15 9L9 15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 9L15 15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <p>{formStatus.message}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={formStatus.isSubmitted ? 'form-hidden' : ''}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Full Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number*</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">Service Interested In*</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="Architectural Design">Architectural Design</option>
                            <option value="Construction Management">Construction Management</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Renovation">Renovation</option>
                            <option value="Consultation">Consultation</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project"
                        rows="5"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="submit-button"
                    disabled={formStatus.isSubmitting}
                >
                    {formStatus.isSubmitting ? (
                        <span className="loading-spinner">
                            <svg className="animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : 'Send Message'}
                </button>
            </form>
        </div>
    );
} 