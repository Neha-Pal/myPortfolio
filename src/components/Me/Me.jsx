import React from "react";
import portfolio_1 from '../../assets/portfolio_1.png';
import styles from "./Me.module.css";

export const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Neha</h1>
        <p className={styles.description}>
            I am a dedicated frontend developer and a problem solver.I love to train models using Machine Learning Algorithms.I have a good expertise in C,Python,HTML,CSS,JavaScript and ReactJS. 
        <br />
        <br />
          Please feel free to contact.....</p>
        <a href="https://www.linkedin.com/in/neha-pal-978560222/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={portfolio_1} alt="Portfolio" className={styles.my_img}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
