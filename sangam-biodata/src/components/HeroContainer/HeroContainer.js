// HeroContainer.js
import React from 'react';
import styles from './HeroContainer.module.css';
import heroImage from 'assets/images/heroImage.webp'

const HeroContainer = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heading}>Craft Your Professional Biodata in Minutes
                </h1>
                <p className={styles.description}>
                Welcome to Sangam: The premier platform for effortlessly crafting bespoke matrimonial biodata. Our intuitive, open-source platform streamlines the biodata creation experience, meticulously incorporating all vital personal nuances. Featuring a diverse array of customizable templates and embedded Vedic astrological insights, Sangam enables you to weave your unique narrative into every biodata. Embark on a seamless journey with Sangam and compose your personalized biodata within moments.                </p>
                <button className={styles.cta}>Learn More</button>
            </div>
            <div className={styles.imageContainer}>
                <img src={heroImage} alt="Hero Image" className={styles.heroImage} />
            </div>
        </div>
    );
};

export default HeroContainer;