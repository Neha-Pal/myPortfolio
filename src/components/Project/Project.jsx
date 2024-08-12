import React from "react";
import weather from '../../assets/weather.png';
import recipe from '../../assets/recipe.png';
import dating from '../../assets/dating.png';
import flappy_bird from '../../assets/flappy_bird.png';
import weatherpy from '../../assets/weatherpy.png';
import rps from '../../assets/rps.png';
import works_ml from '../../assets/works_ml.png';
import movie from '../../assets/movie.png';

import styles from "./Project.module.css";


export const Project = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul className={styles.Items}>
          <li className={styles.Item}>
          <img src={weather} alt="weather" className={styles.weather_img}/>
            <div className={styles.ItemText}>
              <h3>An weather Application using HTML CSS and JS</h3>
              <p>
                <a href="https://github.com/Neha-Pal/Weather_Application">Source Code</a>
              </p>
            </div>
          </li>
          <li className={styles.Item}>
          <img src={recipe} alt="recipe" className={styles.recipe_img}/>
            <div className={styles.ItemText}>
              <h3>A Recipe Application using HTML CSS and JS</h3>
              <p>
              <a href="https://github.com/Neha-Pal/Recipe_Application">Source Code</a>
              </p>
            </div>
          </li>
          <li className={styles.Item}>
          <img src={works_ml} alt="works_ml" className={styles.works_ml_img}/>
            <div className={styles.ItemText}>
              <h3>My works on Machine Learning</h3>
              <p>
              <a href="https://github.com/Neha-Pal/Machine_Learning-using-Python">Source Code</a>
              </p>
            </div>
          </li>
          <li className={styles.Item}>
          <img src={dating} alt="dating" className={styles.dating_img}/>
            <div className={styles.ItemText}>
              <h3>Cuddle...</h3>
              <p>
              <a href="https://github.com/Neha-Pal/Dating">Source Code</a>
              </p>
            </div>
          </li>
          <li className={styles.Item}>
          <img src={flappy_bird} alt="Bird Game" className={styles.flappy_bird_img}/>
            <div className={styles.ItemText}>
              <h3>A game Application</h3>
              <p>
              <a href="https://github.com/Neha-Pal/BirdGame">Source Code</a>
              </p>
            </div>
          </li>
          <li className={styles.Item}>
          <img src={movie} alt="movie" className={styles.movie_img}/>
            <div className={styles.ItemText}>
              <h3>Movie Recommendation System</h3>
              <p>
              <a href="https://github.com/Neha-Pal/Movie-Recommendation-System">Source Code</a>
              </p>
            </div>
          </li>
          <li className={styles.Item}>
          <img src={weatherpy} alt="weatherpy" className={styles.weatherpy_img}/>
            <div className={styles.ItemText}>
              <h3>An weather Application using python</h3>
              <p>
              <a href="https://github.com/Neha-Pal/Weather_using_Python">Source Code</a>
              </p>
            </div>
          </li>
          <li className={styles.Item}>
          <img src={rps} alt="rps" className={styles.rps_img}/>
            <div className={styles.ItemText}>
              <h3>Rock Paper Scissor</h3>
              <p>
              <a href="https://github.com/Neha-Pal/Rock-Paper-Scissor">Source Code</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};