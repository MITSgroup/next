import styles from "./Form.module.scss";
import React from "react";
import { Box } from "@mui/material";

const MainForm = () => {
  return (
    <form className={styles.form}>
      <Box className={styles.field}>
        <label htmlFor="name">Your name:</label>
        <input type={"text"} id={"name"} name={"name"} />
      </Box>
      <Box className={styles.field}>
        <label htmlFor="email">Your email:</label>
        <input type={"email"} id={"email"} name={"email"} />
      </Box>
      <Box className={styles.field}>
        <label htmlFor="message">Your message:</label>
        <textarea rows={4} name={"message"} id={"message"} />
      </Box>
      <button type="submit" className={styles.submit}>
        send
      </button>
    </form>
  );
};

export default MainForm;
