import React from 'react';
import styles from './Footer.module.css';
import FooterJoinLink from './FooterJoinLink';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link
        to="https://melbourne-30.com/thankyoupage/index.php"
        target="_blank" 
        rel="noopener noreferrer"><div className={styles.overlay}></div></Link>

      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <Link
            to="https://melbourne-30.com/thankyoupage/index.php"
            target="_blank" 
            rel="noopener noreferrer"> <img className={styles.footerImg} src="footer-img.svg" alt="FooterImage" /></Link>
        </div>
        <div className={styles.footerRight}>
          <h1>Access Exclusive CR30WN Offers</h1>

          <p className={styles.text}>Join our inner circle and enjoy the value of being in the know</p>
          <FooterJoinLink />
          <div className={styles.footerLinks}>
            <Link
              to="https://melbourne-30.com/thankyoupage/thankyoupage.html"
            target="_blank" 
      rel="noopener noreferrer">Contact us</Link>
          <Link to="/termsandconditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
