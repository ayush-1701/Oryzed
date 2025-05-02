import React from 'react';
import styles from './Features.module.css';

const Feature = () => {
  return (
    <div>
      <section className={styles.featureSection}>
        <h2>Empowering Legal Research with Technology</h2>
        <p>
          At Oryzed, we're redefining legal work with futuristic tools that integrate artificial intelligence, simplify documentation, and accelerate legal processes for professionals across the field.
        </p>
        <div className={styles.featureContainer}>
          <div className={styles.featureCard}>
            <h3>AI-Powered Legal Research</h3>
            <p>Instantly access relevant case laws and statutes personalized to your case using context-aware AI models trained on vast legal datasets.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Smart Case Drafting</h3>
            <p>Structure persuasive and legally sound drafts in seconds, guided by AI-driven legal logic and formatting precision.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Automated Contract Generation</h3>
            <p>Create compliant, robust contracts using AI templates customized for industry-specific and jurisdictional needs.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Dynamic Legal Database</h3>
            <p>Explore a continually evolving, intelligently structured database curated for precise legal references and research ease.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Judgment Summarization</h3>
            <p>Digest complex legal decisions into crisp summaries with AI-driven interpretation of key holdings and reasoning.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Oryzed. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Feature;