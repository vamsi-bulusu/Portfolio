/* eslint-disable react/prop-types */

import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ id, project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.container} key={id}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill} key={id}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && <a className={styles.link} href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
        <a className={styles.link} href={source} target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};

