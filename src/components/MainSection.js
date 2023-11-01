import styles from "./MainSection.module.css";
import Title from "./Title";
import ResumeBtn from "./ResumeBtn";

const MainSection = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.softCircle}></div>
          <Title />
          <div className={styles.btnContainer}>
            <ResumeBtn />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
