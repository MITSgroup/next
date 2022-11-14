import styles from "./Form.module.scss";
import React from "react";
import { Button, Box } from "@mui/material";

const SubscribeForm = () => {
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
      <button type="submit" className={styles.submit}>
        send
      </button>
    </form>
  );
};

export default SubscribeForm;
