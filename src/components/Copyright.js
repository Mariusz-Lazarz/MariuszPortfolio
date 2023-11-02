import styles from "./Copyright.module.css";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.copyright}>
      &copy; {currentYear} Mariusz Łazarz. All rights reserved.
    </div>
  );
};

export default Copyright;
