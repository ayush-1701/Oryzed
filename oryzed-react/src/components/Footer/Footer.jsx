import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} Oryzed. All rights reserved.</p>
                <ul className={styles.footerLinks}>
                    {/* <a href="/privacy-policy">Privacy Policy</a> */}
                    {/* <a href="/terms-of-service">Terms of Service</a> */}
                    <a href="/contact">Contact Us</a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;