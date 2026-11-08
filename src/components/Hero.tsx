import { useLibraryContext } from "../contexts/LibraryContext";
import styles from "./Hero.module.css";

function Hero() {
  const { projects } = useLibraryContext();

  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>THE COMMUNITY PROJECT SHELF</p>
      <h1>
        Good ideas deserve
        <br />
        <span>a place to grow.</span>
      </h1>
      <p className={styles.subtitle}>
        Explore small projects built by curious developers. Find inspiration
        for what to build next.
      </p>
      <div className={styles.stats}>
        <div>
          <strong>{projects.length}</strong>
          <span>Projects</span>
        </div>
        <div>
          <strong>
            {projects.reduce((total, project) => total + project.stars, 0)}
          </strong>
          <span>Community stars</span>
        </div>
        <div>
          <strong>
            {projects.filter((project) => project.favorite).length}
          </strong>
          <span>Your favorites</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;