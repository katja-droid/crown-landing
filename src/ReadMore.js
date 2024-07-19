import React from 'react';
import Header from './Header';
import styles from './ReadMore.module.css';
import { Link } from 'react-router-dom';

const ReadMore = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headingOffer}>OFFER</h2>
          <h1 className={styles.headingBirthday}>CR30WN BIRTHDAY SURPRISE</h1>
          <img className={styles.line} src="home-line.png" alt="Decorative Line" />
          <h2 className={styles.headingDate}>5 JULY – 5 SEPTEMBER</h2>
          <h3 className={styles.headingExclusive}>Exclusive to CR30WN Rewards Members</h3>
          <p className={styles.text}> Crown is celebrating 30 years!<br />To receive an automatic entry into the Draw, use your Crown Rewards Card</p>
          <h4 className={styles.headingWinner}>The lucky winner will be revealed in the Atrium each Thursday from 6.30pm!</h4>
          <p className={styles.text} > <span className={styles.text2}>Come along and celebrate with us in the Atrium and you could also have the chance to win a birthday surprise at the reveal!</span></p>
          <h5 className={styles.headingDraw}>Draw weeks:</h5>
          <div className={styles.weeks}>
            {[
              { number: 'Week 1', date: '6am Friday, 28 June – 5.59am Thursday, 4 July 2024' },
              { number: 'Week 2', date: '6am Friday, 5 July - 5.59am Thursday, 11 July 2024' },
              { number: 'Week 3', date: '6am Friday, 12 July – 5.59am Thursday, 18 July 2024' },
              { number: 'Week 4', date: '6am Friday, 19 July – 5.59am Thursday, 25 July 2024' },
              { number: 'Week 5', date: '6am Friday, 26 July – 5.59am Thursday, 1 August 2024' },
              { number: 'Week 6', date: '6am Friday, 2 August – 5.59am Thursday, 8 August 2024' },
              { number: 'Week 7', date: '6am Friday, 9 August – 5.59am Thursday, 15 August 2024' },
              { number: 'Week 8', date: '6am Friday, 16 August – 5.59am Thursday, 22 August 2024' },
              { number: 'Week 9', date: '6am Friday, 23 August – 5.59am Thursday, 29 August 2024' },
              { number: 'Week 10', date: '6am Friday, 30 August - 5.59am Thursday, 5 September 2024' },
            ].map((week, index) => (
              <div key={index} className={styles.weekContainer}>
                <div className={styles.weekNumber}>{week.number}</div>
                <div className={styles.weekDescription}>{week.date}</div>
              </div>
            ))}
          </div>
          <h3 className={styles.headingBottom}> Will you be a Crown Birthday Winner?</h3>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
