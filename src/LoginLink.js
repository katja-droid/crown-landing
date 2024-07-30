import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginLink.module.css';

const LoginLink = () => {
  return (
    <Link to="index.php" className={styles.loginLink}>
      SIGN UP
    </Link>
  );
};

export default LoginLink;
