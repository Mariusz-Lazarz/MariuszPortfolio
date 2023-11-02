import styles from "./Work.module.css";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";

const Work = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.workTitle}>
        Checkout my best projects, and for more visit my{" "}
        <a
          href="https://github.com/Mariusz-Lazarz"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          Github.
        </a>
      </h1>
      <div className={styles.container}>
        <div className={styles.projectImage}>
          <img src={project1} alt="Storly" className={styles.image} />
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.softCircle}></div>
          <h1 className={styles.projectTitle}>Storly</h1>
          <p className={styles.projectDesc}>
            Storly is a feature-rich e-commerce platform that brings a seamless
            shopping experience to both buyers and sellers. Explore a world of
            products at your fingertips, or set up your own store with ease.
          </p>
          <div className={styles.workSkills}>
            <button className={styles.glassButton}>React</button>
            <button className={styles.glassButton}>Redux</button>
            <button className={styles.glassButton}>Fiebase</button>
            <button className={styles.glassButton}>Netlify</button>
          </div>
          <div className={styles.workLinks}>
            <a
              href="https://storly.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.liveBtn}>Live</button>
            </a>
            <a
              href="https://github.com/Mariusz-Lazarz/Storly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.codeBtn}>Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.reverse}`}>
        <div className={styles.projectDetails}>
          <div className={styles.softCircle}></div>
          <h1 className={styles.projectTitle}>Personal Website</h1>
          <p className={styles.projectDesc}>
            This is my initial personal website, featuring a sleek design and
            attractive animations. It's a highly responsive site that
            efficiently manages a contact form.
          </p>
          <div className={styles.workSkills}>
            <button className={styles.glassButton}>JavaScript</button>
            <button className={styles.glassButton}>JQuery</button>
            <button className={styles.glassButton}>SCSS</button>
          </div>
          <div className={styles.workLinks}>
            <a
              href="https://mariusz-lazarz.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.liveBtn}>Live</button>
            </a>
            <a
              href="https://github.com/Mariusz-Lazarz/mariusz-lazarz.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.codeBtn}>Code</button>
            </a>
          </div>
        </div>
        <div className={styles.projectImage}>
          <img src={project2} alt="Storly" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Work;
