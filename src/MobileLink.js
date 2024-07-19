import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileLink.module.css';

const MobileLink = () => {
  return (
    <Link to="#" className={styles.mobileLink}>
      <img src='/mobile-menu.svg'></img>
    </Link>
  );
};

export default MobileLink;
