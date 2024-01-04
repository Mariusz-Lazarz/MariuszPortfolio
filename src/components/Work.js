import styles from "./Work.module.css";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.webp";
import project4 from "../img/project4.jpg";

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
            <button className={styles.glassButton}>TailwindCSS</button>
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
          <h1 className={styles.projectTitle}>API for SWAPI</h1>
          <p className={styles.projectDesc}>
            A NodeJs API, designed for a StarWars-themed application, utilizes
            Express.js. Its primary function is to retrieve information from
            SWAPI, incorporating a 24-hour caching mechanism via MongoDB.
            Comprehensive documentation is provided through Swagger, and the
            entire application undergoes testing with JEST.
          </p>
          <div className={styles.workSkills}>
            <button className={styles.glassButton}>NodeJS</button>
            <button className={styles.glassButton}>ExpresJS</button>
            <button className={styles.glassButton}>MongoDB</button>
            <button className={styles.glassButton}>JEST</button>
            <button className={styles.glassButton}>Docker</button>
          </div>
          <div className={styles.workLinks}>
            {/* <a
              href="https://mariusz-lazarz.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.liveBtn}>Live</button>
            </a> */}
            <a
              href="https://github.com/Mariusz-Lazarz/nodeapi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.codeBtn}>Code</button>
            </a>
          </div>
        </div>
        <div className={styles.projectImage}>
          <img src={project3} alt="API for SWAPI" className={styles.image} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.projectImage}>
          <img
            src={project4}
            alt="LolEsports Scraping Bot"
            className={styles.image}
          />
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.softCircle}></div>
          <h1 className={styles.projectTitle}>LolEsports Scraping Bot</h1>
          <p className={styles.projectDesc}>
            A bot designed for scraping data regarding League of Legends
            matches. The entire application is hosted on an AWS S3 Bucket and
            makes use of Lambda functions for scheduling periodic data scraping
            tasks. After scraping, the data is stored in a Realtime database
            using Firebase.
          </p>
          <div className={styles.workSkills}>
            <button className={styles.glassButton}>NodeJS</button>
            <button className={styles.glassButton}>Puppeteer</button>
            <button className={styles.glassButton}>AWS S3</button>
            <button className={styles.glassButton}>AWS Lambda</button>
            <button className={styles.glassButton}>Fiebase</button>
          </div>
          <div className={styles.workLinks}>
            {/* <a
              href="https://storly.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.liveBtn}>Live</button>
            </a> */}
            <a
              href="https://github.com/Mariusz-Lazarz/LolScraping"
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
