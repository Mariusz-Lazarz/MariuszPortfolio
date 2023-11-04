import styles from "./ResumeBtn.module.css";

const ResumeBtn = () => {
  return (
    <a href="public\MariuszCV.pdf" download className={styles.btnGradAnchor}>
      <button className={styles.btnGrad}>Get Resume</button>
    </a>
  );
};

export default ResumeBtn;
