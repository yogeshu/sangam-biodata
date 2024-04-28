// ServiceOfferings.js
import React from 'react';
import styles from './ServiceOfferings.module.css';
import biodataCreatorImage from 'assets/images/biodata-creator.webp';
import customizableTemplatesImage from 'assets/images/customizable-templates.webp';
import vedicAstrologyImage from 'assets/images/vedic-astrology.webp';
import editableDownloadableImage from 'assets/images/editable-downloadable.webp';

const ServiceOfferings = () => {
  return (
    <div className={styles.serviceOfferings}>
      <div className={styles.offering}>
        <div className={styles.offeringContent}>
          <h3 className={styles.offeringTitle}>BioData Creator</h3>
          <p className={styles.offeringDescription}>
            At Sangam, we strive to create a professional biodata that is a true reflection of you. Meticulously crafted, your biodata will include your personality, education, career, and family background, in addition to incorporating Vedic astrology elements. With our extensive research and attention to detail, we ensure that your biodata stands out from the rest and reflects your unique personality, giving you the best chance for a successful matrimonial partnership.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.offeringImageContainer}>
          <img src={biodataCreatorImage} alt="BioData Creator" className={styles.offeringImage} />
        </div>
      </div>

      <div className={styles.offering}>
        <div className={styles.offeringContent}>
          <h3 className={styles.offeringTitle}>Customizable Templates</h3>
          <p className={styles.offeringDescription}>
            At Sangam, we realize that one size does not fit all. That's why we offer a wide range of customizable templates that encompass various personality types and preferences. Crafted by experts, our templates are designed to be visually appealing and attention-grabbing, ensuring that your biodata stands out from the crowd. With our customizable templates, you can easily personalize and create a biodata that resonates with your personality and preferences, making it easier for prospective partners to get to know the real you.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.offeringImageContainer}>
          <img src={customizableTemplatesImage} alt="Customizable Templates" className={styles.offeringImage} />
        </div>
      </div>

      <div className={styles.offering}>
        <div className={styles.offeringContent}>
          <h3 className={styles.offeringTitle}>Vedic Astrology Elements</h3>
          <p className={styles.offeringDescription}>
            At Vedic Astrology Sangam, we understand that astrology is an integral component of the matrimonial process in India. Therefore, we offer you the option to incorporate Vedic astrological elements into your biodata. Our team of experienced astrologers will provide you with a comprehensive analysis of your astrological profile and its compatibility with potential partners. This valuable astrological profile can then be added to your biodata, giving prospective partners a deeper understanding of your personality and increasing your chances of finding the right match for compatibility.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.offeringImageContainer}>
          <img src={vedicAstrologyImage} alt="Vedic Astrology" className={styles.offeringImage} />
        </div>
      </div>

      <div className={styles.offering}>
        <div className={styles.offeringContent}>
          <h3 className={styles.offeringTitle}>Editable and Downloadable</h3>
          <p className={styles.offeringDescription}>
            Our biodata templates are editable and downloadable, allowing you to make changes as necessary and share your biodata in various formats. Not only can you edit and update your biodata online, but you can also download it in PDF format for sharing or printing purposes. Our platform provides you with the flexibility to make any changes or updates to your biodata at any time, ensuring that it remains accurate and up-to-date information.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.offeringImageContainer}>
          <img src={editableDownloadableImage} alt="Editable and Downloadable" className={styles.offeringImage} />
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferings;