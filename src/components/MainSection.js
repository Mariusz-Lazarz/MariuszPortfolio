import styles from "./MainSection.module.css";
import Title from "./Title";
import ResumeBtn from "./ResumeBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const MainSection = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.softCircle}></div>
          <Title />
          <div className={styles.btnContainer}>
            <ResumeBtn />
            <a
              href="https://github.com/Mariusz-Lazarz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faGithub} size="2xl" color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/mariusz-%C5%82azarz-447299217/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2xl" color="white" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
