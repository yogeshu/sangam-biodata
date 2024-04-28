import React from 'react'
import styles from './AboutPage.module.css'
import teamImage from 'assets/images/team.webp';
function AboutPage() {
    return (
        <div>    <main className={styles.main}>
            <h1 className={styles.heading}>About</h1>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Our vision</h2>
                <p className={styles.sectionDescription}>
                    At Sangam, we envision a world where technology bridges cultural divides and fosters understanding and appreciation. We believe that by creating accessible, user-friendly solutions, we can empower individuals and communities to celebrate their heritage and share their stories with the world. Our mission is to be a catalyst for cultural preservation and innovation, and we are committed to advancing this vision through our work.
                </p>
                <p className={styles.contactInfo}>Let's talk</p>
                <p className={styles.contactEmail}>contact@domain.com</p>
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
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <i className={`${styles.icon} fab fa-linkedin-in`}></i>
                    </a>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Team story</h2>
                <p className={styles.sectionDescription}>
                    At Sangam, we are passionate about preserving and celebrating cultural traditions through innovative technology. Our team, comprised of experts in design, engineering, and cultural studies, brings together a unique blend of skills and experience. We are dedicated to creating accessible, user-friendly solutions that cater to the diverse needs of our users. Our mission is to empower individuals to share their stories and celebrate their heritage with the world.
                </p>
                <div className={styles.imageContainer}>
                    <img src={teamImage} alt="Team" className={styles.teamImage} />
                </div>
            </section>
        </main></div>
    )
}

export default AboutPage