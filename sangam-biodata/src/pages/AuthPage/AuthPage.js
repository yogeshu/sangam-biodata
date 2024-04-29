import React, { useState } from 'react';
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import styles from './AuthPage.module.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        console.log(userCredential.user);
      })
      .catch((error) => {
        // Handle sign-up error
        console.error(error);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        console.log(userCredential.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };

  return (
    <div className={styles.authPage}>
      <h1 className={styles.heading}>Authentication</h1>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={signUp} className={styles.button}>Sign Up</button>
        <button onClick={signIn} className={styles.button}>Sign In</button>
      </div>
    </div>
  );
};

export default AuthPage;