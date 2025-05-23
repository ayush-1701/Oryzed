import React from 'react';
import styles from './About.module.css';
import logo from '../../assets/oryzed_logo.png';


const About = () => {
  return (
    <div className={styles.body}>
      <div className={styles.logo}>
        <img src={logo} style={{width:"280px", height:"100px", objectFit:"cover", objectPosition:"center"}} alt="Oryzed Logo" />
                 
        {/* Oryzed */}
      </div>
      <div className={styles.aboutText}>
        <p>
          At Oryzed, we're on a mission to simplify and supercharge legal research using the power of AI. Built by law students for law students and legal professionals, Oryzed helps you cut through the noise and get to the point faster.
        </p>
        <p>
          Whether you're digging through case laws, prepping for moots, or managing multiple citations, our platform learns how you work and helps you work smarter.
        </p>
        <p>
          We're starting with Tier 3 colleges and growing upward — because innovation doesn’t wait for infrastructure. Oryzed is where hustle meets clarity.
        </p>
        <p>
          Welcome to the future of legal research. Welcome to Oryzed.
        </p>
      </div>
    </div>
  );
};

export default About;