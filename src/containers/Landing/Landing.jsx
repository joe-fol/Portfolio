import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <>
      <div className={styles.landing}>
        <h2 className={styles.name}>Joe Folkard</h2>
        <h2 className={styles.dev}>Software Developer</h2>
      </div>
    </>
  );
};

export default Landing;
