import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginLink.module.css';

const LoginLink = () => {
  return (
    <Link to="#" className={styles.loginLink}>
      LOGIN
    </Link>
  );
};

export default LoginLink;
