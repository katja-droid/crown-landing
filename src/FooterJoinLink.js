import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterJoinLink.module.css';

const FooterJoinLink = () => {
  return (
    <Link
      to="https://melbourne-30.com/thankyoupage/index.php"
      className={styles.footerJoinLink}
      target="_blank" 
      rel="noopener noreferrer">
      JOIN CR30WN
    </Link>
  );
};

export default FooterJoinLink;
