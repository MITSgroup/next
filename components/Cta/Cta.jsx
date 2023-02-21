import styles from "./Cta.module.scss";
import React from "react";
import { Container, Grid, Button } from "@mui/material";
import Link from "next/link";

const Cta = () => {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ event: "wa_click" });
  };

  return (
    <section className={styles.cta}>
      <Container>
        <Grid container alignItems={"center"} spacing={4}>
          <Grid item xs={12} md={4}>
            <p className={styles.text}>FIND OUT WHAT’S BEST FOR YOU.</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <p className={styles.text}>CHAT WITH A LIVE PROPERTY EXPERT.</p>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
            <Link
              href={"https://wa.me/6281935583329"}
              target={"_blank"}
              className={styles.button}
              onClick={handleClick}
            >
              GO TO WHATSAPP &#x3e;
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Cta;
