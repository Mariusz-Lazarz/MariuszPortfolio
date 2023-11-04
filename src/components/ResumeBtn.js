import styles from "./ResumeBtn.module.css";

const ResumeBtn = () => {
  return (
    <a href="public/mariuszcv.pdf" download className={styles.btnGradAnchor}>
      <button className={styles.btnGrad}>Get Resume</button>
    </a>
  );
};

export default ResumeBtn;
