"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only make the header sticky on the home page
  const isHomePage = pathname === '/';

  // Handle scroll event to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Only add scroll listener on home page
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(false); // Always non-sticky on other pages
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

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

  // Set header classes based on page and scroll state
  // Add 'white-bg' class for non-home pages
  const headerClasses = `site-header ${isHomePage && isScrolled ? 'scrolled' : ''} ${!isHomePage ? 'white-bg' : ''} ${isMenuOpen ? 'menu-open' : ''}`;

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link href="/">
              <Image
                // Use dark logo on non-home pages or when scrolled on home page
                src={!isHomePage || isScrolled ? `${process.env.NEXT_PUBLIC_CLOUD_FRONT_URL}/logo-dark.png` : `${process.env.NEXT_PUBLIC_CLOUD_FRONT_URL}/logo-white.png`}
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
                <a href={isHomePage ? "#about" : "/#about"} onClick={isHomePage ? (e) => handleNavigation(e, 'about') : closeMenu}>About</a>
              </li>
              <li className="nav-item">
                <a href={isHomePage ? "#services" : "/#services"} onClick={isHomePage ? (e) => handleNavigation(e, 'services') : closeMenu}>Services</a>
              </li>
              <li className="nav-item">
                <a href={isHomePage ? "#projects" : "/#projects"} onClick={isHomePage ? (e) => handleNavigation(e, 'projects') : closeMenu}>Projects</a>
              </li>
              <li className="nav-item">
                <a href={isHomePage ? "#app" : "/#app"} onClick={isHomePage ? (e) => handleNavigation(e, 'app') : closeMenu}>App</a>
              </li>
              <li className="nav-item">
                <a href={isHomePage ? "#contact" : "/#contact"} onClick={isHomePage ? (e) => handleNavigation(e, 'contact') : closeMenu}>Contact</a>
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