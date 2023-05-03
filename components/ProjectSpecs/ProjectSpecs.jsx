import styles from "./ProjectSpecs.module.scss";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Grid, Box } from "@mui/material";

const ProjectSpecs = ({ layout, amenities }) => {
  const router = useRouter();

  return (
    <Box className={styles.projectSpecs}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            <Box className={styles.wrapper}>
              <Box mb={3}>
                <h4 className={styles.listTitle}>{router.locale === "en" ? "GENERAL LAYOUT SPECS:" : "ОСОБЕННОСТИ ПЛАНИРОВКИ:"}</h4>
                <ul className={styles.list}>
                  {layout &&
                    layout.map((item) => <li key={item.id}>{item.item}</li>)}
                </ul>
              </Box>
              <Box>
                <h4 className={styles.listTitle}>{router.locale === "en" ? "AMENITIES:" : "УСЛУГИ:"}</h4>
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
