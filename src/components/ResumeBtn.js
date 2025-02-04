import styles from "./ResumeBtn.module.css";

const ResumeBtn = () => {
  return (
    <a
      href="/mariuszcv.pdf"
      download
      className={`${styles.btnGradAnchor} cv-button`}
    >
      <button className={`${styles.btnGrad} cv-button`}>Get Resume</button>
    </a>
  );
};

export default ResumeBtn;
