import styles from "./ContactUs.module.scss";
import React from "react";
import { Container, Grid } from "@mui/material";

import MainForm from "../Forms/MainForm";

const ContactUs = ({ pageName }) => {
  return (
    <section className={styles.contactUs} id={"form"}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={3}>
            <h2 className={styles.title}>CONTACT US</h2>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MainForm pageName={pageName} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUs;
