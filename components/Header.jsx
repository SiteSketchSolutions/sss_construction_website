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
  };

  // Close menu when clicking a link (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/logo.png"
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
                <Link href="#about" onClick={closeMenu}>About</Link>
              </li>
              <li className="nav-item">
                <Link href="#services" onClick={closeMenu}>Services</Link>
              </li>
              <li className="nav-item">
                <Link href="#projects" onClick={closeMenu}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link href="#app" onClick={closeMenu}>App</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" onClick={closeMenu}>Contact</Link>
              </li>
              <li className="nav-item cta-item">
                <Link href="/contact" className="nav-cta-button" onClick={closeMenu}>
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 