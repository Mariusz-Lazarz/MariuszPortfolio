import styles from "./Title.module.css";

const Title = () => {
  return (
    <h1 className={styles.title}>
      <span>
        <span className={styles.bouncingLetters}>
          {Array.from("Hi").map((char, index) => (
            <span
              key={index}
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </span>
        <span className={styles.waveIcon}>👋</span>
      </span>
      <div className={styles.bouncingLetters}>
        {Array.from("I'm Mariusz").map((char, index) => (
          <span
            key={index}
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </span>
        ))}
        <br />
        {Array.from("Software Developer").map((char, index) => (
          <span
            key={index}
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </span>
        ))}
      </div>
    </h1>
  );
};

export default Title;
