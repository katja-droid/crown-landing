import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginLink.module.css';

const LoginLink = () => {
  return (
    <Link
      to="https://melbourne-30.com/thankyoupage/index.php"
      className={styles.loginLink}
      target="_blank" 
      rel="noopener noreferrer">
      SIGN UP
    </Link>
  );
};

export default LoginLink;
