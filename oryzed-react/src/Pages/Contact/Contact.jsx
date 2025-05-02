import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const phoneValid = /^\d{10}$/.test(phone); // Validates a 10-digit phone number
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validates email format
    setIsValid(phoneValid && emailValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('We have received your request. Thank you!');
    setPhone('');
    setEmail('');
    setIsValid(false);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    validateForm();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to us through the details below. We’ll get back to you as soon as possible.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.contactInfo}>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              required
              maxLength={10}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <button type="submit" disabled={!isValid} className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;