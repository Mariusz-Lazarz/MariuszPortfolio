import styles from "./About.module.css";
import profileImage from "./img/me.jpg";
import Skills from "./Skills";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.skillsTitle}>
        Discover my skills below, and for more, see my{" "}
        <a className="cv-button" href="/mariuszcv.pdf" download>
          resume.
        </a>
      </h1>
      <div className={styles.container}>
        <Parallax speed={-5}>
          <div className={styles.info}>
            <div className={styles.softCircle}></div>
            <p className={styles.about}>
              Technical Support Engineer with 2+ years of expertise in
              troubleshooting, process automation (Python/JavaScript), and
              building AI-powered tools. Proficient in backend development
              (Node.js, RESTful APIs) and cloud solutions (AWS, Azure).
              Passionate about solving complex problems through code, generative
              AI, and scalable systems. Open to roles in technical support or
              backend engineering, with a strong focus on innovation and skill
              expansion.
            </p>
          </div>
        </Parallax>
        <Parallax speed={10}>
          <div>
            <div className={styles.profileImgWrapper}>
              <img
                className={styles.profileImg}
                src={profileImage}
                alt="Profile"
              />
            </div>
          </div>
        </Parallax>
      </div>

      <Skills />
    </section>
  );
};

export default About;
