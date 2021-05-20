import React from 'react';
import styles from './FooterButtons.module.scss';

const FooterButtons = (props) => {
  const style =
    props.label === 'Github'
      ? styles.github
      : '';
    

  return (
    <>
      <button className={style}>
          <a href={`${props.link}`} target="_blank" rel="noopener noreferrer" {...props.isDownloadable ? 'download' : ''}>{props.label}</a>
      </button>
    </>
  );
};

export default FooterButtons;