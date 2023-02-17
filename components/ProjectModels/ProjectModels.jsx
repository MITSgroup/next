import styles from "./ProjectModels.module.scss";
import React from "react";

import { Container, Grid, Box } from "@mui/material";

const ProjectModels = ({ items }) => {
  return (
    <Box className={styles.projectModels}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            <h2 className={styles.title}>
              BEST IN CLASS <br /> INVESTMENT <br /> OPPORTUNITY
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

export default ProjectModels;
