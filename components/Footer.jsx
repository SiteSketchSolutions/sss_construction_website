import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link href="/">
                            <h2 className="logo-text">
                                Site<span className="logo-bold">Sketch</span><span className="logo-highlight">Solutions</span>
                            </h2>
                        </Link>
                        <p className="footer-tagline">Excellence in Construction Since 2010</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-nav">
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/projects">Projects</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Services</h3>
                            <ul className="footer-nav">
                                <li><Link href="/services/residential">Residential Construction</Link></li>
                                <li><Link href="/services/commercial">Commercial Buildings</Link></li>
                                <li><Link href="/services/renovation">Renovations</Link></li>
                                <li><Link href="/services/consulting">Construction Consulting</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Contact</h3>
                            <address className="footer-contact">
                                <p>123 Construction Way</p>
                                <p>Building City, BC 12345</p>
                                <p>Phone: (555) 123-4567</p>
                                <p>Email: info@sitesketchsolutions.com</p>
                            </address>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© {new Date().getFullYear()} SiteSketchSolutions. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://facebook.com" aria-label="Facebook">
                            <Image src="/file.svg" alt="Facebook" width={24} height={24} />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter">
                            <Image src="/globe.svg" alt="Twitter" width={24} height={24} />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <Image src="/window.svg" alt="Instagram" width={24} height={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
} 