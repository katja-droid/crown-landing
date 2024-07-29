import React from 'react';
import styles from './Footer.module.css';
import FooterJoinLink from './FooterJoinLink';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/index.php"><div className={styles.overlay}></div></Link>

      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
        <Link to="/index.php"> <img className={styles.footerImg} src="footer-img.svg" alt="Footer Image" /></Link>
        </div>
        <div className={styles.footerRight}>
          <h1>Access Exclusive CR30WN Offers</h1>

          <p className={styles.text}>Join our inner circle and enjoy the value of being in the know</p>
          <FooterJoinLink />
          <div className={styles.footerLinks}>
          <Link to="/thankyoupage">Contact us</Link>
          <Link to="/termsandconditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
