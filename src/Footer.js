import React from 'react';
import styles from './Footer.module.css';
import FooterJoinLink from './FooterJoinLink';

const Footer = () => {
  return (
    <div className={styles.footer}>
          <div className={styles.footerContent}>
      <div className={styles.footerLeft}>
        <img className={styles.footerImg} src="footer-img.svg"></img>
      </div>
      <div className={styles.footerRight}>
      <h1>Access Exclusive CR30WN Offers</h1>
      <p className={styles.text}>Join our inner circle and enjoy the value of being in the know</p>
      <FooterJoinLink />
      </div>
      </div>
    </div>
  );
}

export default Footer;
