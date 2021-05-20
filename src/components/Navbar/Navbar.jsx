import React from 'react';
import styles from './Navbar.module.scss';
import Button from '../Button';


const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}></div>
      <div className={styles.buttonWrapper}>
        <Button link="projects" label="Projects" />
        <Button link ='about' label="about me..." />
        <Button link ='contact' label="Contact me" />
      </div>
    </div>
  );
};

export default Navbar;
