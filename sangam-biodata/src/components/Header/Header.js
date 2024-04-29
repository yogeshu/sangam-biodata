// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png'

import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
     <Link to="/" style={{textDecoration: "none", color: "#000", fontWeight: 'bold'}}>   <img src={logo} alt="Sangam Logo" className={styles.logo} /> </Link>
     <Link to="/" style={{textDecoration: "none", color: "#000", fontWeight: 'bold'}}><span className={styles.logoText}>Sangam Biodata</span> </Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.navLinks}>

          <Link to="/services" className={styles.navLink}>
            Services
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>

        </div>
        <div className={styles.ctaContainer}>
         <Link to="/auth"> <button className={styles.cta}>Login</button> </Link>
        </div>
      </nav>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
    </header>
  );
};

export default Header;