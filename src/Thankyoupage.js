import React, { useState } from 'react';
import styles from './Thankyoupage.module.css';
import { Link } from 'react-router-dom';

const Thankyoupage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка данных формы здесь, если необходимо
    console.log('Form submitted:', formData);
    window.location.reload(); // Обновление страницы
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>GET IN TOUCH</p>
        <div className={styles.lineDiv}>
          <img className={styles.line} src="/line.png" alt="Line"></img>
        </div>
        <p className={styles.paragraph}>
          If you have a question or are looking for specific information about CR30WN Birthday Surprise, please see our contact directory below.
          <br></br>
          <Link to="mailto:info@melbourne-30.com"> info@melbourne-30.com</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>Phone Number*</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkbox}>
              <input
                className={styles.inputField}
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              I have read and agree to the &nbsp; <Link to="/termsandconditions">Terms and conditions</Link>
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Thankyoupage;
