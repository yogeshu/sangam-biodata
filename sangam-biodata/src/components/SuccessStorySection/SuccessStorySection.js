// SuccessStorySection.js
import React from 'react';
import styles from './SuccessStorySection.module.css';
import successStoryImage from 'assets/images/success-story-image.webp';

const SuccessStorySection = () => {
  return (
    <div className={styles.successStorySection}>
      <div className={styles.storyContent}>
        <h2 className={styles.storyTitle}>Sneha and Rohan: A Match Made on Sangam</h2>
        <p className={styles.storyDescription}>
          Discover how Project Sangam helped Sneha and Rohan create their biodata, leading to a successful match and a happy marriage.
        </p>
        <ul className={styles.storyFeatures}>
          <li>Customizable biodata templates</li>
          <li>Vedic astrology elements</li>
        </ul>
        <button className={styles.readMoreButton}>READ MORE</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={successStoryImage} alt="Success Story" className={styles.storyImage} />
      </div>
    </div>
  );
};

export default SuccessStorySection;