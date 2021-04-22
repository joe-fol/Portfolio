import React from "react";
import styles from "./Button.module.scss";

const Button = () => {
  return (
    <>
      <div className={styles.navButtonWrapper} >
        <button className={styles.buttonNavBar}>Contact me</button>
        <button className={styles.buttonNavBar}>Projects</button>
        <button className={styles.buttonNavBar}>About me...</button>
      </div>
    </>
  );
};

export default Button;
