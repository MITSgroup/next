import styles from "./Services.module.scss";
import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";

import Item from "./Item";

const Services = ({ services }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <section className={styles.services}>
      <Container>
        <Grid container sx={{ marginBottom: matchesLg ? 12 : 8 }}>
          <Grid item xs={12} md={6} lg={5}>
            <Typography mb={4} component={"h3"} className={styles.title}>
              SERVICES
            </Typography>
            <p className={styles.text}>
              MITS. studio facilitates collaborative processes between clients,
              builders and suppliers, with the aim of provide the best
              solutions, based on aesthetics and creativity.
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
