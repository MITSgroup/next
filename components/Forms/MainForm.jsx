import styles from "./Form.module.scss";
import React from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const MainForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Box className={`${styles.field} ${errors.name && styles.fieldError}`}>
        <input
          type={"text"}
          id={"name"}
          name={"name"}
          placeholder={"name:"}
          {...register("name", { required: true })}
        />
      </Box>
      <Box className={styles.field}>
        <input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"email:"}
          {...register("email")}
        />
      </Box>
      <input
        type="hidden"
        value={
          router.asPath === "/"
            ? "Home page"
            : router.asPath.split("/").slice(-1).join("")
        }
        {...register("page")}
      />
      <Box className={styles.field}>
        <textarea
          rows={4}
          name={"message"}
          id={"message"}
          placeholder={"message:"}
          {...register("message")}
        />
      </Box>
      <button type={"submit"} className={styles.submit}>
        send
      </button>
    </form>
  );
};

export default MainForm;
