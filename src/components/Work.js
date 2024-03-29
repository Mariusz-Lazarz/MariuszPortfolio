import styles from "./Work.module.css";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.webp";
import project4 from "../img/project4.jpg";
import buuksy from "../img/buuksy.png";
import { Parallax } from "react-scroll-parallax";

const WORK = [
  {
    title: "Buuksy",
    desc: "Buuksy is a streamlined appointment booking platform for beauty salons, allowing users to easily select a salon, choose services, pick a worker, and schedule their visit for a specific time and date. With a user-friendly interface, Buuksy offers a hassle-free way to manage beauty appointments, all in one convenient place.",
    img: buuksy,
    live: "https://buuksy.netlify.app/",
    code: "https://github.com/Mariusz-Lazarz/Buuksy_frontend",
    skills: [
      "REACT",
      "NODEJS",
      "MONGODB",
      "EXPRESS",
      "TAILWINDCSS",
      "NETLIFY",
      "JWT",
      "JEST",
    ],
  },
  {
    title: "Storly",
    desc: "Storly is a feature-rich e-commerce platform that brings a seamless shopping experience to both buyers and sellers. Explore a world of products at your fingertips, or set up your own storewith ease.",
    img: project1,
    live: "https://storly.netlify.app/",
    code: "https://github.com/Mariusz-Lazarz/Storly",
    skills: ["REACT", "REDUX", "FIREBASE", "TAILWINDCSS", "NETLIFY"],
  },
  {
    title: "API for SWAPI",
    desc: "A NodeJs API, designed for a StarWars-themed application, utilizes Express.js. Its primary function is to retrieve information from SWAPI, incorporating a 24-hour caching mechanism via MongoDB. Comprehensive documentation is provided through Swagger, and the entire application undergoes testing with JEST.",
    img: project3,
    code: "https://github.com/Mariusz-Lazarz/nodeapi",
    skills: ["NODEJS", "EXPRESSJS", "MONGODB", "JEST", "DOCKER"],
  },
  {
    title: "LolEsports Scraping Bot",
    desc: "A bot designed for scraping data regarding League of Legends matches. The entire application is hosted on an AWS S3 Bucket and makes use of Lambda functions for scheduling periodic data scraping tasks. After scraping, the data is stored in a Realtime database using Firebase.",
    img: project4,
    code: "https://github.com/Mariusz-Lazarz/LolScraping",
    skills: ["NODEJS", "PUPPETEER", "AWS S3", "AWS LAMBDA", "FIREBASE"],
  },
  {
    title: "Personal Website",
    desc: "A bot designed for scraping data regarding League of Legends matches. The entire application is hosted on an AWS S3 Bucket and makes use of Lambda functions for scheduling periodic data scraping tasks. After scraping, the data is stored in a Realtime database using Firebase.",
    img: project2,
    live: "https://mariusz-lazarz.github.io",
    code: "https://github.com/Mariusz-Lazarz/mariusz-lazarz.github.io",
    skills: ["JAVASCRIPT", "JQUERY", "SCSS"],
  },
];

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
      {WORK.map((item, index) => (
        <div
          className={
            index % 2 === 0
              ? `${styles.container}`
              : `${styles.containerReverse}`
          }
          key={index}
        >
          <Parallax speed={10}>
            <div className={styles.projectImage}>
              <img src={item.img} alt={item.title} className={styles.image} />
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div className={styles.projectDetails}>
              <div className={styles.softCircle}></div>
              <h1 className={styles.projectTitle}>{item.title}</h1>
              <p className={styles.projectDesc}>{item.desc}</p>
              <div className={styles.workSkills}>
                {item.skills.map((skill) => (
                  <button className={styles.glassButton}>{skill}</button>
                ))}
              </div>
              <div className={styles.workLinks}>
                {item?.live && (
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className={styles.liveBtn}>Live</button>
                  </a>
                )}
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <button className={styles.codeBtn}>Code</button>
                </a>
              </div>
            </div>
          </Parallax>
        </div>
      ))}
    </section>
  );
};

export default Work;
