import React from 'react';
import { Link } from 'react-router-dom';
import styles from './JoinLink.module.css';

const JoinLink = () => {
  return (
    <Link to="https://melbourne-30.com/thankyoupage.html" className={styles.joinLink}>
      JOIN CR3OWN
    </Link>
  );
};

export default JoinLink;
