// Skills.jsx
import React from "react";
import styles from "./Skills.module.css";
import skills from "../../Data/skills.json";


// Import images
import html_icon from "../../assets/html_icon.png";
import css_icon from "../../assets/css_icon.png";
import JS_icon from "../../assets/JS_icon.png";
import react_icon from "../../assets/react_icon.png";
import c_icon from "../../assets/C_icon.png";
import tenserflow_icon from "../../assets/tenserflow_icon.png";
import colab_icon from "../../assets/colab_icon.png";
import python_icon from "../../assets/python_icon.png";
import DBMS_icon from "../../assets/DBMS_icon.png";
import ml_icon from "../../assets/ml_icon.png";
import neural_icon from "../../assets/neural_icon.png";
import dsa_icon from "../../assets/dsa_icon.png";


// Create an image map
const imageMap = {
  "assets/html_icon.png": html_icon,
  "assets/css_icon.png": css_icon,
  "assets/JS_icon.png": JS_icon,
  "assets/react_icon.png": react_icon,
  "assets/C_icon.png": c_icon,
  "assets/tenserflow_icon.png": tenserflow_icon,
  "assets/colab_icon.png": colab_icon,
  "assets/python_icon.png": python_icon,
  "assets/DBMS_icon.png": DBMS_icon,
  "assets/ml_icon.png": ml_icon,
  "assets/neural_icon.png": neural_icon,
  "assets/dsa_icon.png": dsa_icon
};

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={imageMap[skill.imageSrc]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
