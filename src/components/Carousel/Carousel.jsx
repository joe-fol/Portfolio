import React from "react";
import styles from "./Carousel.module.scss";

const Carousel = (props) => {
  return (
    <>
      <section className={styles.carousel}>
        <h2>{props.name}</h2>
        <div className={styles.image} >
          <img src={props.img} alt="projects" />
        </div>
        <p>{props.blurb}</p>
          <nav>
            <a className={styles.strCode} href={props.code}>Code</a>
            <a className={styles.git} href={props.ghPages}>Github Pages</a>
          </nav>
      </section>
    </>
  );
};

export default Carousel;
