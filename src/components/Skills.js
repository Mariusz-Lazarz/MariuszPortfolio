import React, { useEffect, useState, useRef, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGithub,
  faDocker,
  faLinux,
  faJenkins,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Skills.module.css";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsContainerRef = useRef(null);

  const skills = useMemo(
    () => [
      { icon: faJs, name: "JavaScript" },
      { icon: faNodeJs, name: "NodeJs" },
      { icon: faReact, name: "React" },
      { icon: faHtml5, name: "HTML" },
      { icon: faCss3Alt, name: "CSS" },
      { icon: faAws, name: "AWS" },
      { icon: faBootstrap, name: "Bootstrap" },
      { icon: faGithub, name: "Github" },
      { icon: faNpm, name: "NPM" },
      { icon: faDocker, name: "Docker" },
      { icon: faLinux, name: "Linux" },
      { icon: faJenkins, name: "Jenkins" },
    ],
    []
  );

  useEffect(() => {
    let observer;
    let timeouts = [];

    if (skillsContainerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              timeouts = skills.map((_, index) =>
                setTimeout(() => {
                  setVisibleSkills((currentVisible) => [
                    ...currentVisible,
                    index,
                  ]);
                }, 300 * (index + 1))
              );

              observer.disconnect();
            }
          });
        },
        { threshold: 0.65 }
      );

      observer.observe(skillsContainerRef.current);
    }

    return () => {
      timeouts.forEach(clearTimeout);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [skillsContainerRef, skills]);

  return (
    <div ref={skillsContainerRef} className={styles.skillsContainer}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`${styles.skill} ${
            visibleSkills.includes(index) ? styles.visible : ""
          }`}
        >
          <FontAwesomeIcon icon={skill.icon} size="2x" />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
