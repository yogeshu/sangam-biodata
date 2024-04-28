import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.infoSection}>
        <h2>Welcome to Sangam!</h2>
        <p>We're excited to hear from you. Fill out the form and our team will get back to you as soon as possible.</p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h1 className={styles.formTitle}>Contact Us</h1>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
