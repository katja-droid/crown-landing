import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterJoinLink.module.css';

const FooterJoinLink = () => {
  return (
    <Link to="/thankyoupage" className={styles.footerJoinLink}>
      JOIN CR30WN
    </Link>
  );
};

export default FooterJoinLink;
