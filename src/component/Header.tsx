import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  logoText?: string;
}

export const Header: React.FC<HeaderProps> = ({ logoText = 'MM.' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`portfolio-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* الشعار */}
        <Link to="/" className="logo">
          {logoText}<span>_</span>
        </Link>

        {/* الروابط للشاشات الكبيرة */}
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/aboutMe" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="https://github.com/mohamadmellal26-rgb" onClick={() => setMenuOpen(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Projects <FaGithub />
          </Link>
          <Link to="/Skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        </nav>

        {/* زر القائمة للهواتف (Hamburger) */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;