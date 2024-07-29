import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import JoinLink from './JoinLink';
import LoginLink from './LoginLink';
import MobileLink from './MobileLink';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/index.php">
      <div className={styles.overlay}>
        <div className={styles.overlayTop}></div>
        <div className={styles.overlayBottom}></div>
      </div>
      </Link>
      <div className={styles.headerTop}>
        <div className={styles.links}>
          <Link to="/">HOME</Link>
         
        </div>
        <MobileLink/>
        <Link to="/index.php"><img className={styles.logoHeader} src='/logo.svg' alt="Logo"></img></Link>
        <LoginLink />
      </div>
      <div className={styles.headerBottom}>
        <img className={styles.line} src="/line.png" alt="Line"></img>
        <h1>DISCOVER THE WORD OF<br/> CROWN AND BE REWARDED</h1>
        <JoinLink />
      </div>
    </div>
  );
};

export default Header;
