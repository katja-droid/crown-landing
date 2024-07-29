import React from 'react';
import Header from './Header';
import styles from './TermsAndConditions.module.css';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headingBirthday}>TERMS OF USE</h1>
          <img className={styles.line} src="home-line.png" alt="line"></img>
          <p className={styles.firstText}>Your use of any information, images, and text contained on the Network (together the ‘Material’) is governed by these Terms of Use and the Privacy Policy. You acknowledge and accept that your use of the Network indicates your acceptance of these Terms of Use and the Privacy Policy.</p>

<h2>1. Variation of Terms of Use</h2>
<p className={styles.text}>These are the current Terms of Use and replace any previous Terms of Use. The Network may at any time vary the Terms of Use by publishing varied Terms of Use on the Network. You acknowledge that by doing this, The Network has provided you with sufficient notice of the variation of the Terms of Use and that you will comply with the Terms of Use, as varied from time to time and at any time. Since you are bound by these Terms of Use, you should periodically refer to them.</p>

<h2>2. Information on the Network</h2>
<p className={styles.text}> The Network has made reasonable efforts to ensure that the Material is free from error. The Network, however, does not warrant the accuracy, adequacy, or completeness of Material. The Network is intended to provide general information only. Information contained in the Network does not constitute or contain professional or other advice and may contain information that is outdated or incorrect.</p>

<h2>3. Communication Facilities</h2>
<p className={styles.text}>3.1 It is a condition of your use of any Communication Facility and your access to the Network that you DO NOT do any of the following:</p>
<ul>
    <li>Post or transmit any unlawful, threatening, abusive, defamatory, obscene, vulgar, pornographic, profane, or indecent information, image, text, or other material of any kind whatsoever, including without limitation any transmissions that would constitute a criminal offence, give rise to civil liability, or otherwise violate any applicable law;</li>
    <li>Post or transmit any information, image, text, or other material of any kind whatsoever which violates or infringes upon the rights of any other person, without first obtaining permission from the owner or relevant right holder;</li>
    <li>Post or transmit any Material of any kind which contains a virus or other harmful component;</li>
    <li>Post, transmit, or in any way exploit any Material of any kind for commercial purposes, or which contains any promotional material or advertising;</li>
</ul>

<p className={styles.text}>3.3 The Network may from time to time monitor or review the contents of its Communication Facilities and reserves its right to edit, refuse to post, or to remove any Materials (in whole or in part) that in The Network's sole discretion is in any way objectionable or in violation of any applicable law or these Terms of Use. The Network has no obligation whatsoever to monitor any Communication Facility or to edit, delete, or refuse to post such contents, nor is The Network responsible for any contents in any Communication Facilities. You expressly acknowledge and agree that the Communication Facilities provide a means of public and not private communications.</p>

<p className={styles.text}>3.4 The Network reserves the right to cooperate fully with any law enforcement authority in any jurisdiction in respect of any lawful direction or request to disclose the identity or other information in respect of anyone posting any materials which violate any applicable or relevant law.</p>

<h2>4. Linked Websites</h2>
<p className={styles.text}>The Network may contain links to other websites operated by third parties (Third Party Websites). The Network does not endorse or approve of the operators of Third Party Websites.</p>
</div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
