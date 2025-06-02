import Image from 'next/image';
import './contact.css';
import ContactForm from '../../components/ContactForm';
export const metadata = {
    title: 'Contact Us | SiteSketchSolutions',
    description: 'Get in touch with our team for construction consultations and free quotes.',
};

export default function ContactPage() {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Let's discuss your construction project</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h2 className="contact-label">GET IN TOUCH</h2>
                            <h3 className="contact-title">Let's Discuss Your Project</h3>
                            <div className="divider"></div>

                            <p className="contact-description">
                                Ready to start your construction project? Get in touch with our team for a consultation and free quote.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email Us</h4>
                                        <p>contact@sssconstructioncompany.com</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Call Us</h4>
                                        <p>(+91) 9482150598</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Visit Us</h4>
                                        <p>H S Garden, Chikkaballapur, Karnataka 562101</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.7909313035443!2d77.73193887513067!3d13.425264286933468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e50896b8daff%3A0xb270facfcc9e5582!2sSite%20Sketch%20Solutions%20Design%20%26%20Home%20Construction%20Company!5e0!3m2!1sen!2sin!4v1748874979632!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
} 