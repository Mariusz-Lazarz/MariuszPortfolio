import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("div[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
          <a
            href="#work"
            className={activeSection === "work" ? styles.active : ""}
          >
            Work
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
