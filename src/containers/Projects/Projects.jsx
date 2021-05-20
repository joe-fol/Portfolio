import React from 'react';
import styles from './Projects.module.scss';
import HeadingBar from '../../components/HeadingBar';
import projects from '../../data/projects';
import Carousel from '../../components/Carousel';
import CarouselButton from '../../components/CarouselButton';
import { useState } from 'react/cjs/react.development';


const Projects = (props) => {
  const generateButtonJSX = projects.map((item) => {
    return <CarouselButton key={item.id} img={item.strImg} />
  })

  

  
  return (
    <>
      <div id='projects'className={styles.header}>
        <HeadingBar header="Projects" />
      </div>
      <div className={styles.projectPage}>
        <article className={styles.work}>
          <div className={styles.small}>
            {generateButtonJSX}
          </div>

          <div className={styles.big}>
            <Carousel key={projects.id} name={projects.strName} img={projects.strImg} blurb={projects.strBlurb} code={projects.strCode} ghPages={projects.strPages} />

          </div>
        </article>
      </div>
    </>
  );
};

export default Projects;
