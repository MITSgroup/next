import styles from "./ContactUs.module.scss";
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ReviewItem from "../ReviewItem/ReviewItem";
import MainForm from "../Forms/MainForm";

const ContactUs = () => {
  return (
    <section className={styles.contuctUs}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={3}>
            <h2 className={styles.title}>CONTACT US</h2>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MainForm />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUs;
