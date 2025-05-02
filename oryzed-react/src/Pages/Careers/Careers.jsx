import React from 'react';
import styles from './Careers.module.css';
import Footer from '../../components/Footer/Footer';

const Careers = () => {
  return (
    <div className={styles.body}>

      <section className={styles.careerSection}>
        <h2>Join Oryzed - Shape the Future of Legal Research</h2>
        <p>
          Are you passionate about law and technology? Join our dynamic team as a legal intern and contribute to groundbreaking AI-driven legal research. Gain hands-on experience in legal analytics, case law structuring, and AI-powered legal databases.
        </p>

        <h3>Why Join Us?</h3>
        <ul>
          <li>Work with cutting-edge AI technology in the legal field.</li>
          <li>Contribute to building a smarter legal research database.</li>
          <li>Enhance your legal research skills with AI-driven insights.</li>
          <li>Network with legal professionals and technology experts.</li>
          <li>Get certified for your contributions and learning experience.</li>
        </ul>

        <p>Ready to take the next step in your legal career? Apply now using the link below.</p>
        <a
          href="https://forms.gle/deqiXpG2oJTaceGVA"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.applyButton}
        >
          Apply Now
        </a>
      </section>

      {/* <footer className={styles.footer}>
        <p>&copy; 2025 Oryzed. All Rights Reserved.</p>
      </footer> */}
      <Footer/>
    </div>
  );
};

export default Careers;