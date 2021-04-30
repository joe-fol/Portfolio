import React from "react";
import styles from "./Footer.module.scss";
import Button from '../Button';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Button />
      </div>
    </>
  );
};

export default Footer;
