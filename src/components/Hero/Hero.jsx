/* eslint-disable react/no-unescaped-entities */
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>

        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Vamsi</h1>
            <p className={styles.description}>
                A Software Engineer with 2 years of experience building reliable and scalable solutions.
            </p>
            <div className={styles.contacts}>
            <a href="mailto:bulusu.vk08@gmail.com" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">Contact Me</a>
            <a href="https://drive.google.com/uc?export=download&id=1CatXjfX7nXYOIcvkdXqT1-BEfFjyPEuN" className={styles.contactBtn} download>Resume</a>
            </div>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="Hero Image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
};
