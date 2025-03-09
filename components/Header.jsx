"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  // Close menu when clicking a link (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Handle navigation to sections
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link href="/">
              <Image
                src={isScrolled ? "/assets/logo-dark.png" : "/assets/logo-white.png"}
                alt="SiteSketchSolutions"
                width={180}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Menu */}
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About</a>
              </li>
              <li className="nav-item">
                <a href="#services" onClick={(e) => handleNavigation(e, 'services')}>Services</a>
              </li>
              <li className="nav-item">
                <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')}>Projects</a>
              </li>
              <li className="nav-item">
                <a href="#app" onClick={(e) => handleNavigation(e, 'app')}>App</a>
              </li>
              <li className="nav-item">
                <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header; 