import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';

export const Contact = () => {
  return (
   <footer className={styles.container}id="contact">
    
        <div className={styles.text}> 
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon"/>
                <a href="mailto:bulusu.vk08@gmail.com">bulusu.vk08@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin icon"/>
                <a href="https://linkedin.com/in/vamsi-bulusu">linkedin.com/in/vamsi-bulusu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon"/>
                <a href="https://github.com/vamsi-bulusu">github.com/vamsi-bulusu</a>
            </li>
        </ul>
   </footer>
  )
}
