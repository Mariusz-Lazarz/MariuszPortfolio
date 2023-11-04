import styles from "./ResumeBtn.module.css";

const ResumeBtn = () => {
  return (
    <a href="/build/mariuszcv.pdf" download className={styles.btnGradAnchor}>
      <button className={styles.btnGrad}>Get Resume</button>
    </a>
  );
};

export default ResumeBtn;
