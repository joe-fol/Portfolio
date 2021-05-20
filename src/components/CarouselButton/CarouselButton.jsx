import React, { useState } from 'react';
import projects from '../../data/projects';
import styles from './CarouselButton.module.scss';

const CarouselButton = (props) => {
  
  return (
    <>
      <img
        key={projects.id}
        src={props.img}
        alt="project"
      />
    </>
  );
};

export default CarouselButton;
