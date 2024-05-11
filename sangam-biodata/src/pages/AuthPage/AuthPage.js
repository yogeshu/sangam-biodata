import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // For routing to different pages

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMessage("Sign up successful!");
        setErrorMessage("");
        navigate("/auth"); // Navigate to Builder page on success
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccessMessage("");
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMessage("Sign in successful!");

        navigate("/select-template"); // Navigate to Builder page on success
        setErrorMessage("");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setErrorMessage("User not found. Please sign up.");
        }
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Incorrect password.");
        }
        if (error.code === "auth/invalid-credential") {
          setErrorMessage("Invalid credential");
        }
        setSuccessMessage("");
      });
  };

  return (
    <div className={styles.authPage}>
      <h1 className={styles.heading}>Authentication</h1>

      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {successMessage && <div className={styles.success}>{successMessage}</div>}

      <form className={styles.authForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" onClick={signUp} className={styles.button}>
            Sign Up
          </button>
          <button type="button" onClick={signIn} className={styles.button}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
