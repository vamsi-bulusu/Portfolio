// import {useState} from 'react';

// import {getImageUrl} from '../../utils';

// import styles from './Navbar.module.css';

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.menu}>
//         <a className={styles.title} href="/">Portfolio</a>
//         <img className={styles.menuBtn} src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')} alt='menu-buton'
//         onClick={() => setMenuOpen(!menuOpen)}/>
//         <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
//             <li><a href="#about">About</a></li>
//             <li><a href="#experience">Experience</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div>

//     </nav>
//   );
// };

import { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <a className={styles.title} href="/Portfolio">Portfolio</a>
        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <img src={getImageUrl('nav/closeIcon.png')} alt='close-icon' /> : <img src={getImageUrl('nav/menuIcon.png')} alt='menu-icon' />}
        </button>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};



