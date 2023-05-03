import styles from "./Cta.module.scss";
import React from "react";
import { Container, Grid, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Cta = () => {
  const handleClick = () => {

    if (typeof window !== 'undefined') {
      window.gtag('event', 'wa_click', {
        'formName': 'whatsapp',
        'formURL': window.location.href,
      });
      window['yaCounter92417784'].reachGoal('whatsapp', {
        URL: window.location.href,
      });
    }
  };

  const router = useRouter();

  return (
    <section className={styles.cta}>
      <Container>
        <Grid container alignItems={"center"} spacing={4}>
          <Grid item xs={12} md={4}>
            <p className={styles.text}>{router.locale === "en" ? "FIND OUT WHAT’S BEST FOR YOU." : ""}</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{textTransform: 'uppercase'}} className={styles.text}>{router.locale === "en" ? "CHAT WITH A LIVE PROPERTY EXPERT." : "Получить консультацию и узнать о действующих предложениях"}</p>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
            <Link
              href={"https://wa.me/6281935583329"}
              target={"_blank"}
              className={styles.button}
              onClick={handleClick}
            >
              {router.locale === "en" ? "GO TO WHATSAPP" : "ПЕРЕЙТИ В WHATSAPP"} &#x3e;
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Cta;
