import React from "react";
import styles from "./ContactMe.module.scss";
import HeadingBar from '../../components/HeadingBar';

const ContactMe = (props) => {
  const { header } = props;
  return (
    <>
      <div className={styles.header}>
        <HeadingBar header='Contact me' />
      </div>
      <div className={styles.contactPage}>

      </div>
    </>
  );
};

export default ContactMe;
