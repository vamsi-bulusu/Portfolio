/* eslint-disable react/prop-types */
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

function Item({title, imageIcon, description, alt}){
    return (<li className={styles.aboutItem}>
        <img src={getImageUrl(imageIcon)} alt={alt}/>
        
        <div className={styles.aboutItemText}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        
    </li>);
}

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.heroImg} src={getImageUrl('about/heroImg.png')} alt='My picture'/>
            <ul className={styles.aboutItems}>
                    <Item title='Full Stack Developer' imageIcon='about/fullstack.png' description='Experienced professional passionate about front-end and back-end development.' alt='Full stack Icon'/>
                    <Item title='Architect' imageIcon='about/architect.png' description='Proficient in Algorithm design, Design patterns, Distributed systems, and API design.' alt='Architect Icon'/>
                    <Item title='Machine Learning Engineer' imageIcon='about/serverIcon.png' description='Skilled in Data Analysis, Predictive Modelling, Deep Learning, and Reinforcement Learning.' alt='Server Icon'/>
                    
            </ul>
        </div>
    </section>
  )
}
