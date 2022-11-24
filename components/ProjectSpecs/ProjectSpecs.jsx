import styles from "./ProjectSpecs.module.scss";
import React from "react";

import { Container, Grid, Box } from "@mui/material";

const ProjectSpecs = ({ layout, amenities }) => {
  return (
    <Box className={styles.projectSpecs}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            <Box className={styles.wrapper}>
              <Box mb={3}>
                <h4 className={styles.listTitle}>GENERAL LAYOUT SPECS: </h4>
                <ul className={styles.list}>
                  {layout &&
                    layout.map((item) => <li key={item.id}>{item.item}</li>)}
                </ul>
              </Box>
              <Box>
                <h4 className={styles.listTitle}>AMENITIES: </h4>
                <ul className={styles.list}>
                  {amenities &&
                    amenities.map((item) => <li key={item.id}>{item.item}</li>)}
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectSpecs;
