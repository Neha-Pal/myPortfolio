import React from "react";
import email from '../../assets/email.png';
import github from '../../assets/github.png';
import linkedIn from '../../assets/linkedIn.png';



import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img src={email} alt="" className='email'/>
          <p>palneha1779@gmail.com</p>
        </li>
        <li className={styles.link}>
        <img src={linkedIn} alt="" className='linkedIn'/>
          <a href="https://www.linkedin.com/in/neha-pal-978560222/">linkedin.com/NehaPal</a>
        </li>
        <li className={styles.link}>
        <img src={github} alt="" className='github'/>
          <a href="https://github.com/Neha-Pal">github.com/NehaPal</a>
        </li>
      </ul>
    </footer>
  );
};