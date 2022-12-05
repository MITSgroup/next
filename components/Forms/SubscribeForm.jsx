import styles from "./Form.module.scss";
import React from "react";
import { Box } from "@mui/material";

const SubscribeForm = () => {
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
      <button type="submit" className={styles.submit}>
        send
      </button>
    </form>
  );
};

export default SubscribeForm;
