import styles from "./Subscribe.module.scss";
import React from "react";
import { Container, Grid } from "@mui/material";
import SubscribeForm from "../Forms/SubscribeForm";

const Subscribe = () => {
  return (
    <section className={styles.subscribe} id={"form"}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={3}>
            <h2 className={styles.title}>
              SUBSCRIBE TO <br />
              MITS JOURNAL
            </h2>

            <ul className={styles.list}>
              <li>Weekly updates</li>
              <li>Architecture content</li>
              <li>Case studies</li>
              <li>New announcements</li>
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
