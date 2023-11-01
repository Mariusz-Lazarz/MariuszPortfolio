import styles from "./ResumeBtn.module.css";

const ResumeBtn = () => {
  return (
    <a href="src\cv\Mariusz CV-1.pdf" download className={styles.btnGradAnchor}>
      <button className={styles.btnGrad}>Get Resume</button>
    </a>
  );
};

export default ResumeBtn;
