import styles from "./Title.module.css";

const Title = () => {
  return (
    <h1 className={`${styles.title} ${styles.bouncingLetters}`}>
      {Array.from("Hi !").map((char, index) =>
        char === " " ? (
          <span key={index} style={{ whiteSpace: "pre" }}>
            {char}
          </span>
        ) : (
          <span key={index}>{char}</span>
        )
      )}
      <br />
      {Array.from("I'm Mariusz").map((char, index) =>
        char === " " ? (
          <span key={index} style={{ whiteSpace: "pre" }}>
            {char}
          </span>
        ) : (
          <span key={index}>{char}</span>
        )
      )}
      <br />
      {Array.from("Software Developer").map((char, index) =>
        char === " " ? (
          <span key={index} style={{ whiteSpace: "pre" }}>
            {char}
          </span>
        ) : (
          <span key={index}>{char}</span>
        )
      )}
    </h1>
  );
};

export default Title;
