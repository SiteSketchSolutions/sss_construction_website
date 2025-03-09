import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/hero.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div className="hero-content">
            <h1>
              Crafting <span className="highlight">Exceptional</span><br />
              Structures for the Future
            </h1>
            <p className="hero-description">
              Where traditional craftsmanship meets innovative technology to create<br />
              timeless architectural masterpieces
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="primary-button">
                Begin Your Legacy <span className="arrow">→</span>
              </Link>
              <Link href="/portfolio" className="secondary-button">
                Explore Our Portfolio <span className="arrow">→</span>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <p className="stat-value">25+ Years Experience</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">500+ Projects Completed</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">Award-Winning Designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-header">
            <h2 className="section-label">ABOUT US</h2>
            <h3 className="section-title">Excellence in Construction Since 2010</h3>
            <div className="divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                SiteSketchSolutions Construction has been delivering exceptional construction services and innovative solutions to clients across the country.
              </p>
              <p className="about-mission">
                Our commitment to quality, attention to detail, and customer satisfaction has made us a trusted name in the construction industry. We blend traditional craftsmanship with modern technology to create buildings that stand the test of time.
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <div className="icon-circle">✓</div>
                  </div>
                  <div className="feature-content">
                    <h4>Expert Team</h4>
                    <p>Our professionals bring decades of combined experience.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <div className="icon-circle">✓</div>
                  </div>
                  <div className="feature-content">
                    <h4>Quality Materials</h4>
                    <p>We use only the highest quality materials in all our projects.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <div className="icon-circle">✓</div>
                  </div>
                  <div className="feature-content">
                    <h4>On-Time Delivery</h4>
                    <p>We pride ourselves on meeting deadlines without compromising quality.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <div className="icon-circle">✓</div>
                  </div>
                  <div className="feature-content">
                    <h4>Innovative Approach</h4>
                    <p>We blend traditional methods with cutting-edge technology.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <Image
                src="/assets/about.jpeg"
                alt="Construction workers at a building site"
                width={600}
                height={400}
                priority
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-label">OUR SERVICES</h2>
            <h3 className="section-title">Comprehensive Construction Solutions</h3>
            <div className="divider center-divider"></div>
            <p className="section-description">
              We offer a wide range of construction services to meet all your building needs, from concept to completion.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="21" x2="9" y2="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h4>Architectural Design</h4>
              <p>Innovative and functional architectural designs tailored to your specific needs and vision.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9H22M2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9M2 9V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V9" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 15C16 13.3431 14.6569 12 13 12C11.3431 12 10 13.3431 10 15C10 16.6569 11.3431 18 13 18C14.6569 18 16 16.6569 16 15Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h4>Construction Management</h4>
              <p>Expert management of your construction project from planning to completion, ensuring efficiency and quality.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21V7M9 7H4M9 7H14M4 7V3H20V7M20 7H14M14 7V21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h4>Renovation & Remodeling</h4>
              <p>Transform your existing space with our professional renovation and remodeling services.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h4>Cost Estimation</h4>
              <p>Accurate cost estimations and budgeting to ensure your project stays within financial constraints.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H21M3 6V20H21V6M3 6V4H21V6M12 10V16M8 10V16M16 10V16" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h4>Structural Engineering</h4>
              <p>Comprehensive structural engineering services ensuring the safety and durability of your construction.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21M3 21V11L12 3L21 11V21M3 21H21M8 21V16C8 14.8954 8.89543 14 10 14H14C15.1046 14 16 14.8954 16 16V21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h4>Residential Construction</h4>
              <p>Premium residential construction solutions that blend aesthetics, functionality, and quality craftsmanship.</p>
            </div>
          </div>

          <div className="services-cta">
            <Link href="/projects" className="services-button">
              Discover Our Projects <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-label">OUR PORTFOLIO</h2>
            <h3 className="section-title">Featured Projects</h3>
            <div className="divider center-divider"></div>
            <p className="section-description">
              Browse through our portfolio of successful projects that showcase our expertise and quality craftsmanship.
            </p>
          </div>

          <div className="project-filters">
            <button className="filter-button active">All</button>
            <button className="filter-button">Commercial</button>
            <button className="filter-button">Residential</button>
            <button className="filter-button">Institutional</button>
            <button className="filter-button">Restoration</button>
            <button className="filter-button">Industrial</button>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <Image
                  src="/assets/project-1.jpeg"
                  alt="Modern Office Complex"
                  width={400}
                  height={300}
                  className="project-img"
                />
                <div className="project-overlay">
                  <span className="project-category">Commercial</span>
                  <h4 className="project-title">Modern Office Complex</h4>
                </div>
              </div>
              <div className="project-content">
                <h4>Modern Office Complex</h4>
                <p>A state-of-the-art office complex with innovative design and sustainable features.</p>
                <Link href="/projects/modern-office" className="project-link">
                  View Details <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <Image
                  src="/assets/project-2.jpeg"
                  alt="Luxury Residential Tower"
                  width={400}
                  height={300}
                  className="rounded-image"
                />
                <div className="project-overlay">
                  <span className="project-category">Residential</span>
                  <h4 className="project-title">Luxury Residential Tower</h4>
                </div>
              </div>
              <div className="project-content">
                <h4>Luxury Residential Tower</h4>
                <p>High-end residential apartments featuring premium amenities and stunning views.</p>
                <Link href="/projects/modern-office" className="project-link">
                  View Details <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <Image
                  src="/assets/project-1.jpeg"
                  alt="Shopping Mall Expansion"
                  width={400}
                  height={300}
                  className="rounded-image"
                />
                <div className="project-overlay">
                  <span className="project-category">Industrial</span>
                  <h4 className="project-title">Shopping Mall Expansion</h4>
                </div>
              </div>
              <div className="project-content">
                <h4>Shopping Mall Expansion</h4>
                <p>Major expansion of an existing shopping center, adding retail space and modern facilities.</p>
                <Link href="/projects/modern-office" className="project-link">
                  View Details <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="app-section" id="app">
        <div className="container">
          <div className="app-content">
            <div className="app-info">
              <h2 className="section-label">OUR MOBILE APP</h2>
              <h3 className="section-title">SiteSketch Mobile App</h3>
              <div className="divider"></div>
              <p className="app-description">
                Stay connected to your construction project anytime, anywhere with our innovative mobile application.
              </p>

              <div className="app-features-grid">
                <div className="app-feature-card">
                  <div className="feature-icon">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4>Real-time Project Updates</h4>
                  <p>Stay informed with daily updates and progress reports on your construction project.</p>
                </div>

                <div className="app-feature-card">
                  <div className="feature-icon">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4>Document Management</h4>
                  <p>Access and manage all project documents in one secure, centralized location.</p>
                </div>

                <div className="app-feature-card">
                  <div className="feature-icon">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4>Smart Project Insights</h4>
                  <p>Get intelligent analytics and insights to help you make informed decisions.</p>
                </div>

                <div className="app-feature-card">
                  <div className="feature-icon">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 9V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V9M5 9H19C20.1046 9 21 9.89543 21 11V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V11C3 9.89543 3.89543 9 5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h4>Payment Management</h4>
                  <p>Track expenses, manage payments, and maintain complete financial transparency.</p>
                </div>
              </div>

              <div className="app-cta">
                <button className="cta-button">Request a Demo</button>
                <div className="app-download">
                  <p>Download our app:</p>
                  <div className="download-buttons">
                    <a href="#" className="download-button">
                      <Image src="/assets/app-store.svg" alt="Download on App Store" width={140} height={42} />
                    </a>
                    <a href="#" className="download-button">
                      <Image src="/assets/google-play.svg" alt="Get it on Google Play" width={140} height={42} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-showcase">
              <Image
                src="/assets/apps.jpeg"
                alt="SiteSketch Mobile App"
                width={400}
                height={700}
                className="app-screenshot"
              />
              <div className="app-notification notification-1">
                <div className="notification-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="notification-content">
                  <h5>New Document</h5>
                  <p>Floor plan v2</p>
                </div>
              </div>
              <div className="app-notification notification-2">
                <div className="notification-icon payment-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="notification-content">
                  <h5>Payment Processed</h5>
                  <p>$24,500 - Phase 2</p>
                </div>
              </div>
              <div className="app-notification notification-3">
                <div className="notification-icon update-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="notification-content">
                  <h5>Project Update</h5>
                  <p>Foundation completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="contact-label">CONTACT US</h2>
              <h3 className="contact-title">Let's Discuss Your Project</h3>
              <div className="divider"></div>

              <p className="contact-description">
                Ready to start your construction project? Get in touch with our team for a consultation and free quote.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C18.4 22.05 16.88 21.73 15.5 21.05C14.22 20.4194 13.0553 19.5833 12.06 18.58C11.0566 17.5847 10.2206 16.42 9.59 15.14C8.90903 13.7579 8.58825 12.2348 8.68 10.71C8.67955 10.1611 8.89028 9.63288 9.26438 9.25806C9.63847 8.88325 10.1661 8.67155 10.715 8.67H13.715C14.7406 8.66014 15.6017 9.37179 15.76 10.38C15.8486 10.9896 15.9884 11.5886 16.18 12.17C16.4118 12.9033 16.2697 13.7038 15.8 14.32L14.74 15.38C15.3153 16.5783 16.1298 17.6536 17.14 18.54C18.0264 19.5502 19.1017 20.3647 20.3 20.94L21.36 19.88C21.9762 19.4103 22.7767 19.2682 23.51 19.5C24.0914 19.6916 24.6904 19.8314 25.3 19.92C26.3339 20.0867 27.0517 20.9769 27 22V25C27 25.5501 26.7893 26.0793 26.4142 26.4544C26.0391 26.8295 25.5099 27.0402 24.96 27.04C23.4 27.13 21.88 26.81 20.5 26.13C19.22 25.4994 18.0553 24.6633 17.06 23.66C16.0566 22.6647 15.2206 21.5 14.59 20.22C13.909 18.8379 13.5882 17.3148 13.68 15.79C13.6795 15.2411 13.8903 14.7129 14.2644 14.3381C14.6385 13.9632 15.1661 13.7516 15.715 13.75H18.715C19.7406 13.7401 20.6017 14.4518 20.76 15.46C20.8486 16.0696 20.9884 16.6686 21.18 17.25C21.4118 17.9833 21.2697 18.7838 20.8 19.4L19.74 20.46C20.3153 21.6583 21.1298 22.7336 22.14 23.62" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>(123) 456-7890</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@sitesketchsolutions.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>123 Construction Ave, Building City, BC 12345</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder="John Doe" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="(123) 456-7890" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" required>
                    <option value="">Select a service</option>
                    <option value="architectural-design">Architectural Design</option>
                    <option value="construction-management">Construction Management</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="cost-estimation">Cost Estimation</option>
                    <option value="structural-engineering">Structural Engineering</option>
                    <option value="residential-construction">Residential Construction</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
