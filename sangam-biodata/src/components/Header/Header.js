// Header.js
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Sangam Logo" className={styles.logo} />
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.navLinks}>
         
          <a href="#" className={styles.navLink}>
            Services
          </a>
          <a href="#" className={styles.navLink}>
            About
          </a>
          <a href="#" className={styles.navLink}>
            Contact
          </a>
        </div>
        <div className={styles.ctaContainer}>
          <button className={styles.cta}>LET'S TALK</button>
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