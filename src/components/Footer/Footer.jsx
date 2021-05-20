import React from 'react';
import styles from './Footer.module.scss';
import FooterButtons from '../FooterButtons';
import cv from '../../files/joe-folkard-cv.pdf';

const Footer = (props) => {
  // const { label } = props;
  return (
    <>
      <footer>
        <div className={styles.footerButtons}>
          <p>© Joe Fokard Web Developer {new Date().getFullYear()}</p>
          <div className={styles.buttonWrapper}>
            <FooterButtons link='https://github.com/joe-fol' className={styles.git} label="Github" />
            <FooterButtons link='https://www.linkedin.com/in/joe-folkard/'label="Linkdin" />
            <FooterButtons link={cv} isDownloadable label="C.V" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
