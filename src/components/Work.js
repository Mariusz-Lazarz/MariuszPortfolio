import styles from "./Work.module.css";
// import project1 from "./img/project1.png";
// import project3 from "./img/project3.webp";
import project4 from "./img/project4.jpg";
import { Parallax } from "react-scroll-parallax";
import storlyv2mockup from "./img/storlymockup.png";
import chatwithmemockup from "./img/chatmockup.png";

const WORK = [
  {
    title: "Chat with me",
    desc: "Powered by AI, 'Chat with Me' is an innovative chat application that effortlessly bridges language gaps, enabling seamless communication in users' preferred languages. It offers a subscription-based model, with DIAMOND and GOLD tiers, through Stripe, unlocking premium features like unlimited translations and advanced customization. This application exemplifies technical excellence and a commitment to global inclusivity, making it the go-to tool for transcending linguistic barriers worldwide.",
    img: chatwithmemockup,
    live: "https://chat-with-me-sepia.vercel.app/",
    code: "https://github.com/Mariusz-Lazarz/chatWithMe",
    skills: [
      "TYPESCRIPT",
      "NEXTJS",
      "NEXTAUTH",
      "SHADCN",
      "STRIPE",
      "AI",
      "FIREBASE",
      "ZUSTAND",
    ],
  },
  {
    title: "Storlyv2",
    desc: "Storlyv2 is a comprehensive ecommerce platform featuring an impressive user interface and real-time data fetching from a database using URL-stored parameters. It includes Next.js authentication with JWT tokens to manage user roles and access paths. The application fully integrates Stripe for payment processing, supports discount coupons, and offers a bookmarking functionality for favorite products.",
    img: storlyv2mockup,
    live: "https://storlyv2.vercel.app/",
    code: "https://github.com/Mariusz-Lazarz/Storlyv2",
    skills: [
      "TYPESCRIPT",
      "NEXTJS",
      "NEXTAUTH",
      "SHADCN",
      "STRIPE",
      "PRISMA",
      "TAILWINDCSS",
      "VERCEL",
    ],
  },
  {
    title: "AI Knowledge Bot",
    desc: "Developed an AI-powered chatbot that provides real-time, context-aware assistance by leveraging publicly available knowledge from the Piwik PRO Help Center. The bot uses Qdrant for vector search, improving retrieval accuracy, and implements result reranking for relevance. It also maintains chat history for seamless interactions, making user support more efficient.",
    img: project4,
    code: "https://github.com/Mariusz-Lazarz/AI-Knowledge-BOT-PPHC",
    skills: ["PYTHON", "OPENAI", "BEAUTIFULSOUP", "QDRANT"],
  },
  // {
  //   title: "Storly",
  //   desc: "Storly is a feature-rich e-commerce platform that brings a seamless shopping experience to both buyers and sellers. Explore a world of products at your fingertips, or set up your own storewith ease.",
  //   img: project1,
  //   live: "https://storly.netlify.app/",
  //   code: "https://github.com/Mariusz-Lazarz/Storly",
  //   skills: ["REACT", "REDUX", "FIREBASE", "TAILWINDCSS", "NETLIFY"],
  // },
  // {
  //   title: "API for SWAPI",
  //   desc: "A NodeJs API, designed for a StarWars-themed application, utilizes Express.js. Its primary function is to retrieve information from SWAPI, incorporating a 24-hour caching mechanism via MongoDB. Comprehensive documentation is provided through Swagger, and the entire application undergoes testing with JEST.",
  //   img: project3,
  //   code: "https://github.com/Mariusz-Lazarz/nodeapi",
  //   skills: ["NODEJS", "EXPRESSJS", "MONGODB", "JEST", "DOCKER"],
  // },
];

const Work = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.workTitle}>
        Checkout my best projects, and for more visit my{" "}
        <a
          href="https://github.com/Mariusz-Lazarz"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          Github.
        </a>
      </h1>
      {WORK.map((item, index) => (
        <div
          className={
            index % 2 === 0
              ? `${styles.container}`
              : `${styles.containerReverse}`
          }
          key={index}
        >
          <Parallax speed={10}>
            <div className={styles.projectImage}>
              <img src={item.img} alt={item.title} className={styles.image} />
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div className={styles.projectDetails}>
              <div className={styles.softCircle}></div>
              <h1 className={styles.projectTitle}>{item.title}</h1>
              <p className={styles.projectDesc}>{item.desc}</p>
              <div className={styles.workSkills}>
                {item.skills.map((skill) => (
                  <button className={styles.glassButton}>{skill}</button>
                ))}
              </div>
              <div className={styles.workLinks}>
                {item?.live && (
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className={styles.liveBtn}>Live</button>
                  </a>
                )}
                <a href={item.code} target="_blank" rel="noopener noreferrer">
                  <button className={styles.codeBtn}>Code</button>
                </a>
              </div>
            </div>
          </Parallax>
        </div>
      ))}
    </section>
  );
};

export default Work;


