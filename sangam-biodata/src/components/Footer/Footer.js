// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>About</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/about" className={styles.footerLink}>
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/team" className={styles.footerLink}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/careers" className={styles.footerLink}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Services</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/services/biodata-creation" className={styles.footerLink}>
                Biodata Creation
              </Link>
            </li>
            <li>
              <Link to="/services/astrology" className={styles.footerLink}>
                Astrology Services
              </Link>
            </li>
            <li>
              <Link to="/services/counseling" className={styles.footerLink}>
                Counseling
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Resources</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/blog" className={styles.footerLink}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faqs" className={styles.footerLink}>
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.footerLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Sangam. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className={`${styles.icon} fab fa-facebook-f`}></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className={`${styles.icon} fab fa-twitter`}></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className={`${styles.icon} fab fa-instagram`}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;