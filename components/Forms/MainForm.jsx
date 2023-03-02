import styles from "./Form.module.scss";
import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "cookies-next";
import querystring from "querystring";

const MainForm = ({reachGoal}) => {
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
    register("utm_medium", { value: utm_medium });
    register("utm_source", { value: utm_source });
    register("utm_term", { value: utm_term });
    register("utm_content", { value: utm_content });
    register("utm_campaign", { value: utm_campaign });
    register("page", { value: !page ? "home" : page });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    axios
        .post("https://hook.eu1.make.com/jcjz9wf8bjm8lqakt3cbqcefyhqdgdvh", data)
        .then(() => {
          reset();
          if (typeof window !== 'undefined') {
            window.gtag('event', 'sendForm', {
              'formName': reachGoal,
              'formURL': window.location.href,
            });
            window['yaCounter92417784'].reachGoal(reachGoal, {URL: window.location.href});
          }

          router.replace("/thank-you-form");
        })
        .catch((error) => {
          console.log(error);
        });

    console.log(data);

    delete data.utm_campaign;
    delete data.utm_content;
    delete data.utm_medium;
    delete data.utm_source;
    delete data.utm_term;

    const dataForCrm = {
      metrica_client_id: '92417784',
      token:'8622:7e6597c4bf47530d4d38564ecd2d2a61',
      url: window.location.href,
      phone:'',
      ...data,
    }

    const params = querystring.stringify(dataForCrm);

    fetch('https://crm.wbooster.ru/index.php?controller=seolead', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    })
        .then(response => response.text())
        .then(responseText => {
          window['yaCounter92417784'].params({wbooster: responseText});
        })
        .catch((error) => {
          console.log(error);
        });
  }


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
      id={"mainForm"}
      name={"main"}
      reachGoal={reachGoal}
    >
      <Box className={`${styles.field} ${errors.name && styles.fieldError}`}>
        <input
          type={"text"}
          id={"name"}
          name={"name"}
          placeholder={router.locale === "en" ? "name:" : "ИМЯ"}
          {...register("name", { required: true })}
        />
      </Box>
      <Box className={`${styles.field} ${errors.name && styles.fieldError}`}>
        <input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={router.locale === "en" ? "email:" : "ЭЛЕКТРОННАЯ ПОЧТА"}
          {...register("email", { required: true })}
        />
      </Box>
      <Box className={styles.field}>
        <textarea
          rows={4}
          name={"message"}
          id={"message"}
          placeholder={router.locale === "en" ? "message:" : "СООБЩЕНИЕ"}
          {...register("message")}
        />
      </Box>
      <Button variant={"text"} type={"submit"} className={styles.submit}>
        {router.locale === "en" ? "send" : "отправить"}
      </Button>
    </form>
  );
};

export default MainForm;
