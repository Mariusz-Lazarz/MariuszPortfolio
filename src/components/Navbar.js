import styles from "./Navbar.module.css";

const Navbar = ({ activeSection }) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a
            href="#home"
            className={activeSection === "home" ? styles.active : ""}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? styles.active : ""}
          >
            About
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
