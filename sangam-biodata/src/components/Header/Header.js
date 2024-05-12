import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import logo from "assets/images/logo.png";
import styles from "./Header.module.css";
import ReactGA4 from "react-ga4";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  const handleViewServicesClick = () => {
    ReactGA4.get().event("click_view_services", {
      category: "Navigation",
      action: "Clicked View Services Link",
    });
  };

  const handleViewAboutClick = () => {
    ReactGA4.get().event("click_view_about", {
      category: "Navigation",
      action: "Clicked View About Link",
    });
  };

  const handleViewContactClick = () => {
    ReactGA4.get().event("click_view_contact", {
      category: "Navigation",
      action: "Clicked View Contact Link",
    });
  };

  const handleLoginSignupClick = () => {
    ReactGA4.get().event("click_login_signup", {
      category: "Authentication",
      action: "Clicked Login/Sign Up Button",
    });
  };

  const handleLogoutClick = () => {
    ReactGA4.get().event("click_logout", {
      category: "Authentication",
      action: "Clicked Logout Button",
    });
    signOutUser();
  };

  const handleMenuToggleClick = () => {
    ReactGA4.get().event("toggle_menu", {
      category: "Navigation",
      action: "Toggled Hamburger Menu",
    });
    toggleMenu();
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
          <Link
            to="/services"
            className={styles.navLink}
            onClick={handleViewServicesClick}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={handleViewAboutClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={styles.navLink}
            onClick={handleViewContactClick}
          >
            Contact
          </Link>
        </div>
        <div className={styles.ctaContainer}>
          {user ? (
            <button className={styles.cta} onClick={handleLogoutClick}>
              Logout
            </button>
          ) : (
            <Link to="/auth" onClick={handleLoginSignupClick}>
              <button className={styles.cta}>Login / Sign Up</button>
            </Link>
          )}
        </div>
      </nav>
      <div className={styles.hamburgerMenu} onClick={handleMenuToggleClick}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
    </header>
  );
};

export default Header;
