// FeatureSection.js
import React from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  return (
    <>
      <h1 className={styles.featureHeading}>Services we provide </h1>
    <div className={styles.featureSection}>
      
      <div className={styles.featureItem}>
        <h2 className={styles.featureTitle}>BioData Creator</h2>
        <p className={styles.featureDescription}>
          We provide you with an easy-to-use platform to create professional-looking matrimonial biodata that reflects your personality, education, career, family background, and Vedic astrology elements.
        </p>
      </div>
      <div className={styles.featureItem}>
        <h2 className={styles.featureTitle}>Customizable Templates</h2>
        <p className={styles.featureDescription}>
          We offer a wide range of customizable biodata templates that allow you to create a biodata that aligns with your preferences and personality.
        </p>
      </div>
      <div className={styles.featureItem}>
        <h2 className={styles.featureTitle}>Vedic Astrology Elements</h2>
        <p className={styles.featureDescription}>
          We offer the option to incorporate Vedic astrology elements in your biodata, providing prospective partners with insights into your astrological profile.
        </p>
      </div>
      <div className={styles.featureItem}>
        <h2 className={styles.featureTitle}>Editable and Downloadable</h2>
        <p className={styles.featureDescription}>
          Our biodata templates are editable and downloadable, allowing you to make changes as necessary and share your biodata in various formats.
        </p>
      </div>
    </div>
    </>

  );
};

export default FeatureSection;