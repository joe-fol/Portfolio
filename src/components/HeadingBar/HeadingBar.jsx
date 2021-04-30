import React from "react";
import styles from "./HeadingBar.module.scss";

const HeadingBar = (props) => {
  return (
    <>
      <div className={styles.headingBar}>
        <h2>{props.header}</h2>
      </div>
    </>
  );
};

export default HeadingBar;
