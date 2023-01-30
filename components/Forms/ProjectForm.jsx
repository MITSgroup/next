import styles from "./Form.module.scss";
import React from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const ProjectForm = () => {
  const router = useRouter();
  const page = router.query.slug;
  const utm_medium = getCookie("utm_medium");
  const utm_source = getCookie("utm_source");
  const utm_term = getCookie("utm_term");
  const utm_content = getCookie("utm_content");
  const utm_campaign = getCookie("utm_campaign");

  const handleChange = () => {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ event: "lead" });
  };

  React.useEffect(() => {
    if (router.isReady) {
      register("utm_medium", { value: utm_medium });
      register("utm_source", { value: utm_source });
      register("utm_term", { value: utm_term });
      register("utm_content", { value: utm_content });
      register("utm_campaign", { value: utm_campaign });
      register("page", { value: !page ? "home" : page });
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) =>
    axios
      .post("https://hook.eu1.make.com/jcjz9wf8bjm8lqakt3cbqcefyhqdgdvh", data)
      .then(() => {
        reset();
        router.replace("/thank-you-form");
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
    >
      <Box className={`${styles.field} ${errors.name && styles.fieldError}`}>
        <input
          type={"text"}
          id={"name"}
          name={"name"}
          placeholder={"name:"}
          {...register("name", { required: true })}
        />
      </Box>
      <Box className={`${styles.field} ${errors.name && styles.fieldError}`}>
        <input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"email:"}
          {...register("email", { required: true })}
        />
      </Box>
      <Box className={`${styles.field} ${errors.name && styles.fieldError}`}>
        <input
          type={"tel"}
          id={"phone"}
          name={"phone"}
          placeholder={"phone number:"}
          {...register("phone", { required: true })}
        />
      </Box>

      <Button variant={"text"} type={"submit"} className={styles.submit}>
        REQUEST A TOUR
      </Button>
    </form>
  );
};

export default ProjectForm;
