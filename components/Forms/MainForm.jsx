import styles from "./Form.module.scss";
import React from "react";
import { Box } from "@mui/material";

const MainForm = () => {
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
        <textarea
          rows={4}
          name={"message"}
          id={"message"}
          placeholder={"message:"}
        />
      </Box>
      <button type="submit" className={styles.submit}>
        send
      </button>
    </form>
  );
};

export default MainForm;
