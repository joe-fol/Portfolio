import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const style =
    props.label === 'Projects' || props.label === 'Github'
      ? styles.projects
      : '';
    

  return (
    <>
      <button className={style}>
          <a href={`#${props.link}`}>{props.label}</a>
      </button>
    </>
  );
};

export default Button;
