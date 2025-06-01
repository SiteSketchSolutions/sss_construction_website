import Image from "next/image";
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/hero.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
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
              <Link href="#contact" className="primary-button">
                Begin Your Legacy <span className="arrow">→</span>
              </Link>
              <Link href="#projects" className="secondary-button">
                Explore Our Portfolio <span className="arrow">→</span>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <p className="stat-value">10+ Years Experience</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">250+ Projects Completed</p>
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
          {/* <div className="about-header">
            <h2 className="section-label">ABOUT US</h2>
            <h3 className="section-title">Excellence in Construction Since 2015</h3>
            <div className="divider"></div>
          </div> */}
          <div className="about-content">

            <div className="about-text">
              <h2 className="section-label">ABOUT US</h2>
              <h2 className="section-title">Excellence in Construction Since 2015</h2>              <div className="divider"></div>
              <p className="about-description">
                SiteSketchSolutions Construction has been delivering exceptional construction services and innovative solutions to clients across Bengaluru and Chikkaballapur.
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
                  <path d="M2 9H22M2 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9M2 9V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V9" stroke="currentColor" strokeWidth="2" />
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
            <Link href="#contact" className="services-button">
              Discuss Your Project <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* App Section */}
      <section className="app-section" id="app">
        <div className="container">
          <div className="section-header">
            <h2 className="section-label">MOBILE APPLICATION</h2>
            <h3 className="section-title">Introducing the <span className="highlight">SiteSketch</span> Mobile App</h3>
            <div className="divider"></div>
            <p className="section-description">
              Our proprietary mobile application gives you complete control over your construction project. Monitor real-time progress, manage documents, track expenses, and communicate with your project team - all from your smartphone or tablet.
            </p>
          </div>

          <div className="app-main-content">
            <div className="app-features">
              <div className="app-feature-card">
                <div className="feature-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Real-time Project Updates</h4>
                <p>Stay informed with daily updates and progress reports on your construction project, delivered directly to your mobile device.</p>
              </div>

              <div className="app-feature-card">
                <div className="feature-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 10H16M8 14H16M8 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Document Management</h4>
                <p>Access and manage all project documents in one secure, centralized location accessible anytime, anywhere from your smartphone.</p>
              </div>

              <div className="app-feature-card">
                <div className="feature-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Smart Project Insights</h4>
                <p>Get intelligent analytics and insights to help you make informed decisions about your project, powered by our proprietary algorithms.</p>
              </div>

              <div className="app-feature-card">
                <div className="feature-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V9M5 9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Payment Management</h4>
                <p>Track expenses, manage payments, and maintain complete financial transparency with our secure, integrated payment system.</p>
              </div>
            </div>

            <div className="app-showcase-wrapper">
              <div className="app-showcase">
                <Image
                  src="/assets/apps.jpeg"
                  alt="SiteSketch Mobile App"
                  width={400}
                  height={700}
                  className="app-screenshot"
                />
                <div className="app-notification notification-1">
                  <div className="notification-icon document-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
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
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 8H9M15 12H9M15 16H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="notification-content">
                    <h5>Payment Processed</h5>
                    <p>$24,500 - Phase 2</p>
                  </div>
                </div>
                <div className="app-notification notification-3">
                  <div className="notification-icon update-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

          <div className="app-cta">
            <Link href="#contact" className="cta-button">Request a Demo</Link>
            <div className="app-download">
              {/* <strong>Download our app:</strong> */}
              <p>Our app is <span className="highlight">coming soon!</span> Stay tuned for updates.</p>
              {/* <div className="download-buttons">
                <a href="#" className="download-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="140" height="42" viewBox="0 0 120 40">
                    <path d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 0 0 5.517.19a6.665 6.665 0 0 0-1.9.627 6.438 6.438 0 0 0-1.62 1.18A6.258 6.258 0 0 0 .82 3.617 6.601 6.601 0 0 0 .195 5.52a12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 0 0 .18 2.002 6.588 6.588 0 0 0 .624 1.905A6.208 6.208 0 0 0 1.998 38a6.274 6.274 0 0 0 1.618 1.179 6.7 6.7 0 0 0 1.901.63 13.455 13.455 0 0 0 2.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 0 0 2-.178 6.804 6.804 0 0 0 1.908-.63A6.277 6.277 0 0 0 117.666 38a6.395 6.395 0 0 0 1.182-1.614 6.604 6.604 0 0 0 .62-1.905 13.506 13.506 0 0 0 .185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 0 0-.184-2.003 6.618 6.618 0 0 0-.62-1.903 6.466 6.466 0 0 0-2.799-2.8 6.768 6.768 0 0 0-1.908-.627 13.044 13.044 0 0 0-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z" fill="#A6A6A6" />
                    <path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.755 5.755 0 0 1 .544-1.662 5.373 5.373 0 0 1 1.015-1.398 5.565 5.565 0 0 1 1.402-1.023 5.823 5.823 0 0 1 1.653-.544A12.586 12.586 0 0 1 7.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 0 1 1.858.162 5.938 5.938 0 0 1 1.671.548 5.594 5.594 0 0 1 2.415 2.42 5.763 5.763 0 0 1 .535 1.649 12.995 12.995 0 0 1 .174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 0 1-.17 1.853 5.739 5.739 0 0 1-.54 1.67 5.48 5.48 0 0 1-1.016 1.386 5.413 5.413 0 0 1-1.4 1.022 5.862 5.862 0 0 1-1.668.55 12.542 12.542 0 0 1-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z" />
                    <g fill="#fff">
                      <path d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.36 4.1 4.1 0 0 0 3.237-1.53z" />
                    </g>
                    <g fill="#fff">
                      <path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.051zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM65.125 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM71.71 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 0 0 .611-.043v1.463a5.104 5.104 0 0 1-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zM96.186 21.442h1.773v1.541h.043a2.16 2.16 0 0 1 2.177-1.635 2.866 2.866 0 0 1 .637.069v1.738a2.598 2.598 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.858zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298z" />
                    </g>
                  </svg>
                </a>
                <a href="#" className="download-button">
                  <Image src="/assets/google-play.svg" alt="Get it on Google Play" width={140} height={42} />
                </a>
              </div> */}
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
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
