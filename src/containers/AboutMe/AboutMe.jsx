import React from 'react';
import styles from './AboutMe.module.scss';
import HeadingBar from '../../components/HeadingBar/HeadingBar';
import {
  faUbuntu,
  faHtml5,
  faSass,
  faJsSquare,
  faReact,
  faGit,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutMe = () => {

  return (
    <>
      <HeadingBar className={styles.aboutMe} header="About me..." />
      <div id='about' className={styles.aboutPage}>
        <div className={styles.aboutContentContainer}>
          <div className={styles.aboutPhoto}></div>
          <div className={styles.aboutText}>
            <p>
              My Name is Joe Folkard, 32 and I live in Bristol. I’m Currently
              studying Web development and looking to make the transition to
              full time developer.
            </p>
            <p>
              {' '}
              I have been working as a Scaffolder since I left school so i know
              a thing or two about technicality, working in teams and hitting
              deadlines.
            </p>{' '}
            <p>
              I’m a proud father, enjoy cycle touring/travelling, photography
              and all things bike.
            </p>
          </div>
          <div className={styles.aboutStack}>
            <p>
              I have recently finished the nology boot camp and have learned a
              wide variety of tech to get me ready for a exciting career in
              tech.
            </p>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faUbuntu} />
              <FontAwesomeIcon className={styles.icon} icon={faHtml5} />
              <FontAwesomeIcon className={styles.icon} icon={faSass} />
              <FontAwesomeIcon className={styles.icon} icon={faJsSquare} />
              <FontAwesomeIcon className={styles.icon} icon={faReact} />
              <FontAwesomeIcon className={styles.icon} icon={faGit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
