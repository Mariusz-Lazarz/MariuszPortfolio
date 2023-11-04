import styles from "./About.module.css";
import profileImage from "../img/me.jpg";
import Skills from "./Skills";

const About = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.skillsTitle}>
        Discover my skills below, and for more, see my{" "}
        <a href="public/mariuszcv.pdf" download>resume.</a>
      </h1>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.softCircle}></div>
          <p className={styles.about}>
            Proactive Technical Support Engineer boasting 1-2 years of handson
            experience in the technological domain. I bring to the table
            proficiency in JavaScript, API integration, and troubleshooting in
            web development environments. My skill set extends to web analytics,
            where I shine in deciphering and amplifying digital processes to
            enhance user experiences and drive operational efficiencies. Eager
            to pivot into a development role, I bring a reputation for rapid
            learning, potent communication, and a collaborative ethos that
            enhances team dynamics and project outcomes. With a steadfast
            commitment to technical excellence, I am poised to contribute
            effectively to web development teams and projects
          </p>
        </div>
        <div>
          <div className={styles.profileImgWrapper}>
            <img
              className={styles.profileImg}
              src={profileImage}
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
