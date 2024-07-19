import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import JoinLink from './JoinLink';
import LoginLink from './LoginLink';
import MobileLink from './MobileLink';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.overlayTop}></div>
        <div className={styles.overlayBottom}></div>
      </div>
      <div className={styles.headerTop}>
        <div className={styles.links}>
          <Link to="/">HOME</Link>
          <Link to="/readmore">READ MORE</Link>
         
        </div>
        <MobileLink/>
        <img className={styles.logoHeader} src='/logo.svg' alt="Logo"></img>
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
