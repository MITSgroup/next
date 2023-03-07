import styles from "./ProjectAdvantages.module.scss";
import React from "react";
import { useRouter } from "next/router";
import { Container, Grid, Box } from "@mui/material";

const ProjectAdvantages = ({ items }) => {
  const router = useRouter();
  return (
    <Box className={styles.projectAdvantages}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            <h2 className={styles.title}>
            {router.locale === "en" ? "BEST IN CLASS" : "ЛУЧШЕЕ"}<br /> {router.locale === "en" ? "INVESTMENT" : "ИНВЕСТИЦИОННОЕ"} <br /> {router.locale === "en" ? "OPPORTUNITY" : "ПРЕДЛОЖЕНИЕ"}
            </h2>

            <Grid container spacing={3}>
              {items &&
                items.map((item) => (
                  <Grid key={item.id} item xs={12} md={4} lg={3}>
                    <Box className={styles.item}>
                      <h3 className={styles.value}>{item.value}</h3>
                      <p className={styles.description}>{item.description}</p>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectAdvantages;
