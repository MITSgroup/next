import styles from "./Form.module.scss";
import React from "react";
import { Box } from "@mui/material";

const ProjectForm = () => {
  return (
    <form className={styles.form}>
      <Box className={styles.field}>
        <input type={"text"} id={"name"} name={"name"} placeholder={"name:"} />
      </Box>
      <Box className={styles.field}>
        <input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"email:"}
        />
      </Box>
      <Box className={styles.field}>
        <input
          type={"phone"}
          id={"phone"}
          name={"phone"}
          placeholder={"phone number:"}
        />
      </Box>
      <button type="submit" className={styles.submit}>
        REQUEST A TOUR
      </button>
    </form>
  );
};

export default ProjectForm;
