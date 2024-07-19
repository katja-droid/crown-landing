import React from 'react';
import Header from './Header';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2  className={styles.headingOffer}
        
        >OFFER</h2>
        <h1 className={styles.headingBirthday}>
        CR30WN BIRTHDAY SURPRISE
        </h1>
        <img className={styles.line} src="home-line.png"></img>
        <h2  className={styles.headingDate}
        
        >5 JULY – 5 SEPTEMBER</h2>
         <Link to="/readmore" className={styles.linkReadMore}>
      Read more
      </Link>
      </div>
     
     
    </div>
  );
};

export default Home;
