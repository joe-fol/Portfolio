import React from 'react';
import styles from './Projects.module.scss';
import HeadingBar from '../../components/HeadingBar';

const Projects = (props) => {
  const { header } = props;
  return (
    <>
      <div className={styles.header}>
        <HeadingBar header="Projects" />
      </div>
      <div className={styles.projectPage}>
        <article className={styles.work}></article>
      </div>
    </>
  );
};

export default Projects;
