import React from "react";
import styles from "./Navbar.module.scss";
import Button from '../Button';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Button className={styles.Button} />
      </div>
    </>
  );
};

export default Navbar;
