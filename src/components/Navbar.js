import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
