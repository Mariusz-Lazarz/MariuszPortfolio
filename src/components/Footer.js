import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h1 className={styles.footerTitle}>Let's stay in touch!</h1>
      <form className={styles.form}>
        <div className={styles.formFields}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            id="text"
            name="text"
            placeholder="Enter your message..."
            rows="4"
            cols="50"
            required
          />
          <input type="submit" value="Submit" className={styles.submitBtn} />
        </div>
      </form>
    </footer>
  );
};

export default Footer;
