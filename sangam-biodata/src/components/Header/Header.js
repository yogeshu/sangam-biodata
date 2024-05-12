import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

import logo from "assets/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/auth");
      console.log("Sign-out successful");
    } catch (error) {
      console.log("Sign-out error", error);
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}
        >
          <img src={logo} alt="Sangam Logo" className={styles.logo} />
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}
        >
          <span className={styles.logoText}>Sangam Biodata</span>
        </Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
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
          {user ? (
            <button className={styles.cta} onClick={signOutUser}>
              Logout
            </button>
          ) : (
            <Link to="/auth">
              <button className={styles.cta}>Login / Sign Up</button>
            </Link>
          )}
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
