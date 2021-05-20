import React from "react";
import projects from "../../data/projects";
import styles from "./Carousel.module.scss";

const Carousel = (props) => {
  return (
    <>
      <section className={styles.carousel}>
        <h2>{projects[0].strName}</h2>
        <div className={styles.image} >
          <img src={projects[0].strImg} alt="projects" />
        </div>
        <p>{projects[0].strBlurb}</p>
          <nav>
            <a className={styles.strCode} href={projects[0].strCode}>Code</a>
            <a className={styles.git} href={projects[0].strPages}>Github Pages</a>
          </nav>
      </section>
    </>
  );
};

export default Carousel;
