import React from 'react';
import { Link } from 'react-router-dom';
import styles from './JoinLink.module.css';

const JoinLink = () => {
  return (
    <Link
      to="https://melbourne-30.com/thankyoupage/index.php"
      className={styles.joinLink}
      target="_blank" 
      rel="noopener noreferrer">
      JOIN CR3OWN
    </Link>
  );
};

export default JoinLink;
