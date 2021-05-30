import projects from '../../data/projects';
import styles from './CarouselButton.module.scss';

const CarouselButton = (props) => {
  
  return (
    <>
      <img
        className={styles.button}
        key={projects.id}
        src={props.img}
        alt="project"
        onClick={props.handleClick}
        
      />
    </>
  );
};

export default CarouselButton;
