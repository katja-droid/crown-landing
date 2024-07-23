import React from 'react';
import { Link } from 'react-router-dom';
import styles from './JoinLink.module.css';

const JoinLink = () => {
  return (
    <Link to="/thankyoupage" className={styles.joinLink}>
      JOIN CR3OWN
    </Link>
  );
};

export default JoinLink;
