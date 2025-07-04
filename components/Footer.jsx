'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // Handle navigation to sections
    const handleNavigation = (e, sectionId) => {
        e.preventDefault();

        if (!isHomePage) {
            // If not on home page, navigate to home page with hash
            window.location.href = `/#${sectionId}`;
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop;
            window.scrollTo({
                top: offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <div className="footer-logo">
                            <Image src="/assets/logo-white.png" alt="SiteSketch Solutions" width={180} height={50} />
                        </div>
                        <p>Excellence in Construction Since 2015</p>

                        <div className="social-links">
                            <a href="https://www.facebook.com/share/16hDQYsYHH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/sssconstructionco/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href=" https://youtube.com/@sitesketchsolutions?si=K4jzGupAdNNZpEcw" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3 className='footer-heading'>Quick Links</h3>
                            <ul className='footer-nav'>
                                <li><a href="/#about" onClick={(e) => handleNavigation(e, 'about')}>About Us</a></li>
                                <li><a href="/#services" onClick={(e) => handleNavigation(e, 'services')}>Services</a></li>
                                <li><a href="/#projects" onClick={(e) => handleNavigation(e, 'projects')}>Projects</a></li>
                                <li><a href="/#app" onClick={(e) => handleNavigation(e, 'app')}>Mobile App</a></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className='footer-heading'>Our Services</h3>
                            <ul className='footer-nav'>
                                <li><a href="/#services" onClick={(e) => handleNavigation(e, 'services')}>Architectural Design</a></li>
                                <li><a href="/#services" onClick={(e) => handleNavigation(e, 'services')}>Construction Management</a></li>
                                <li><a href="/#services" onClick={(e) => handleNavigation(e, 'services')}>Interior Design</a></li>
                                <li><a href="/#services" onClick={(e) => handleNavigation(e, 'services')}>Renovation</a></li>
                                <li><a href="/#services" onClick={(e) => handleNavigation(e, 'services')}>Consultation</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Contact</h3>
                            <address className="footer-contact">
                                <p>H S Garden, Chikkaballapur, Karnataka 562101</p>
                                <p>Phone:(+91) 9482150598</p>
                                <p>Email: contact@sssconstructioncompany.com</p>
                            </address>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom ">
                    <p>&copy; {new Date().getFullYear()} SSS Construction Company. All rights reserved.</p>
                    <div className='flex items-center gap-4'>
                        <Link href="/privacy-policy" className="footer-link">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="footer-link">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 