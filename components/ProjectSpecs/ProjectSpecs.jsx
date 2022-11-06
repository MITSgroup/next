import styles from "./ProjectSpecs.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, Button } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

const ProjectSpecs = ({ layout, amenities }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

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
