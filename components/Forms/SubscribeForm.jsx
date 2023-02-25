import styles from "./Form.module.scss";
import React from "react";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "cookies-next";

const SubscribeForm = () => {
  const router = useRouter();
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
    register("utm_medium", { value: utm_medium });
    register("utm_source", { value: utm_source });
    register("utm_term", { value: utm_term });
    register("utm_content", { value: utm_content });
    register("utm_campaign", { value: utm_campaign });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) =>
    axios
        .post("https://hook.eu1.make.com/jcjz9wf8bjm8lqakt3cbqcefyhqdgdvh", data)
        .then(() => {
          reset();
          if (typeof window !== 'undefined') {
            window.gtag('event', 'sendForm', {
              'formName': 'subscribeForm',
              'formURL': window.location.href,
            });
            window['yaCounter92417784'].reachGoal('subscribeForm', {
              URL: window.location.href
            });
          }
          router.replace("/thank-you-subscribe");
        })
        .catch((error) => {
          console.log(error);
        });



  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
      id={"subscribeForm"}
      name={"subscribeForm"}
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

      <input type="hidden" value={"subscribe"} {...register("type")} />
      <Button variant={"text"} type={"submit"} className={styles.submit}>
        send
      </Button>
    </form>
  );
};

export default SubscribeForm;
