import { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const inputValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      text: "",
    });
  };

  return (
    <footer className={styles.footerContainer}>
      <h1 className={styles.footerTitle}>Let's stay in touch!</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={inputValueChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={inputValueChange}
            value={formData.email}
            required
          />
          <textarea
            id="text"
            name="text"
            placeholder="Enter your message..."
            onChange={inputValueChange}
            value={formData.text}
            rows="4"
            cols="50"
            required
          />
          <button type="submit" className={styles.submitBtn}>
            Send
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
