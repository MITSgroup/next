import styles from "./Subscribe.module.scss";
import React from "react";
import { Container, Grid } from "@mui/material";
import SubscribeForm from "../Forms/SubscribeForm";
import { useRouter } from "next/router";

const Subscribe = () => {
  const router = useRouter();

  return (
    <section className={styles.subscribe} id={"form"}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={3}>
            <h2 className={styles.title}>
              {router.locale === "en" ? "SUBSCRIBE TO" : "ПОДПИШИТЕСЬ НА"} <br />
              {router.locale === "en" ? "MITS JOURNAL" : "MITS БЛОГ"}
            </h2>

            <ul className={styles.list}>
              <li>{router.locale === "en" ? "Weekly updates" : "Еженедельные обновления"}</li>
              <li>{router.locale === "en" ? "Architecture content" : "Контент об архитектуре"}</li>
              <li>{router.locale === "en" ? "Case studies" : "Тематические исследования"}</li>
              <li>{router.locale === "en" ? "New announcements" : "Новые объявления"}</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <SubscribeForm />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Subscribe;
