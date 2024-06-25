import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

// Styles sheet
import './Navbar.css';

// Assets
import Cv from '../../assets/img/Cv2024.349ea563d441f8b475fb.pdf';
import Logo from '../../assets/img/Logo.svg';
import openMenuIcon from '../../assets/img/open-menu.svg';
import closeMenuIcon from '../../assets/img/close-menu.svg';

function Navbar() {
  const email = "jayvincarlismael@gmail.com";
  const subject = "Inquiry: Let's Discuss Collaboration";
  const body = "";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const mobileGmailHref = `intent://send?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}#Intent;scheme=mailto;package=com.google.android.gm;end;`;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    let currentScrollTop = window.scrollY;
    if (currentScrollTop > 300) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        document.body.style.overflow = 'auto';
      } else {
        menuOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <nav className={`nav  ${isVisible ? '' : 'scroll'}`}>
        <div className="nav-container">
          <div className="nav-logo-container">
            <Link to="/" className="logo-link" onClick={() => scroll.scrollToTop(0, 0)}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="menu-btn" onClick={toggleMenu}>
            <div className="open-menu" id="openMenu" style={{ display: menuOpen ? 'none' : 'flex' }}>
              <img src={openMenuIcon} alt="Open Menu" />
            </div>
            <div className="close-menu" id="closeMenu" style={{ display: menuOpen ? 'flex' : 'none' }}>
              <img src={closeMenuIcon} alt="Close Menu" />
            </div>
          </div>

          <div className={`menu-container ${menuOpen ? 'open' : 'closed'}`}>
            <ul className="nav-list">
              <li className="nav-items">
                <ScrollLink to="fw" smooth={true} duration={750} offset={-96} className="nav-links" onClick={handleLinkClick} tabIndex={0}>
                  Work
                </ScrollLink>
              </li>
              <li className="nav-items">
                <ScrollLink to="ab" smooth={true} duration={750} offset={-96} className="nav-links" onClick={handleLinkClick} tabIndex={0}>
                  About
                </ScrollLink>
              </li>
              <li className="nav-items">
                <a href={Cv} className="nav-links" onClick={handleLinkClick} download="CV 2024.pdf">
                  Resume
                </a>
              </li>
            </ul>
            <ul className="nav-list">
              <li className="nav-items getit">
                <a href={isMobile ? mobileGmailHref : gmailHref} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-links" 
                  onClick={handleLinkClick}>
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
