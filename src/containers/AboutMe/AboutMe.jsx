import React from "react";
import styles from "./AboutMe.module.scss";
import HeadingBar from "../../components/HeadingBar/HeadingBar";

const AboutMe = () => {
  return (
    <>
      <HeadingBar />
      <div className={styles.aboutPage}>
        <div className={styles.aboutContentContainer}>
          <div className={styles.aboutPhoto}></div>
          <div className={styles.aboutText}>
            <p>
              My Name is Joe Folkard, 32 and I live in Bristol. I’m Currently
              studying Web development and looking to make the transition to
              full time developer.
            </p>
            <p>
              {" "}
              I have been working as a Scaffolder since I left school so i know
              a thing or two about technicality, working in teams and hitting
              deadlines.
            </p>{" "}
            <p>
              I’m a proud father, enjoy cycle touring/travelling, photography
              and all things bike.
            </p>
          </div>
          <div className={styles.aboutStack}>
            <h2>Im here!!!</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
