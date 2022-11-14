import styles from "./Form.module.scss";
import React from "react";
import { Button, Box } from "@mui/material";

const ProjectForm = () => {
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
        <label htmlFor="phone">Your phone number:</label>
        <input type={"phone"} id={"phone"} name={"phone"} />
      </Box>
      <button type="submit" className={styles.submit}>
        REQUEST A TOUR
      </button>
    </form>
  );
};

export default ProjectForm;
