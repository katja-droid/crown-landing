import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginLink.module.css';

const LoginLink = () => {
  return (
    <Link to="/thankyoupage" className={styles.loginLink}>
      SIGN UP
    </Link>
  );
};

export default LoginLink;
