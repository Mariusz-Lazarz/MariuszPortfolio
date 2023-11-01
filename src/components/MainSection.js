import styles from "./MainSection.module.css";

const MainSection = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.softCircle}></div>
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
        </div>
      </section>
    </>
  );
};

export default MainSection;
