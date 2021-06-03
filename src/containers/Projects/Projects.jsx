import React from 'react';
import styles from './Projects.module.scss';
import HeadingBar from '../../components/HeadingBar';
import projects from '../../data/projects';
import Carousel from '../../components/Carousel';
import CarouselButton from '../../components/CarouselButton';
import { useState } from 'react';

const Projects = () => {
  const [currentProject, setNewProject] = useState(projects[0]);
  
  const findProjectID = (id) => {
    const newProject = projects.find((project) => id === project.id);
    setNewProject(newProject);
  };
  

  const generateButtonJSX = projects.map((item) => {
    return (
      <CarouselButton
        key={item.id}
        img={item.strImg}
        handleClick={() => findProjectID(item.id)}
      />
    );
  });

  return (
    <>
      <div id="projects" className={styles.header}>
        <HeadingBar header="Projects" />
      </div>
      <div className={styles.projectPage}>
        <article className={styles.work}>
          <div className={styles.small}>{generateButtonJSX}</div>

          <div className={styles.big}>
            <Carousel
              key={currentProject.id}
              name={currentProject.strName}
              img={currentProject.strImg}
              blurb={currentProject.strBlurb}
              code={currentProject.strCode}
              ghPages={currentProject.strPages}
            />
          </div>
        </article>
      </div>
    </>
  );
};

export default Projects;
