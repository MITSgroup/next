import styles from "./Services.module.scss";
import React from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

import Item from "./Item";

const Services = ({ services }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const router = useRouter();

  return (
    <section className={styles.services}>
      <Container>
        <Grid container sx={{ marginBottom: matchesLg ? 12 : 8 }}>
          <Grid item xs={12} md={6} lg={5}>
            <h3 className={styles.title}>{router.locale === "en" ? "SERVICES" : "УСЛУГИ"}</h3>
            <p className={"text"}>
            {router.locale === "en" ? "MITS. studio facilitates collaborative processes between clients, builders and suppliers, with the aim of provide the best solutions, based on aesthetics and creativity." : "МИТС. studio облегчает процессы сотрудничества между клиентами, строителями и поставщиками с целью предоставления наилучших решения, основанные на эстетике и креативности."}
            </p>
          </Grid>
        </Grid>

        {services &&
          services.map((item) => (
            <Item
              key={item.attributes.slug}
              title={item.attributes.name}
              description={item.attributes?.description}
              slug={item.attributes.slug}
            />
          ))}
      </Container>
    </section>
  );
};

export default Services;
