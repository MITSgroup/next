import styles from "./ProjectIntro.module.scss";
import React from "react";
import Link from "next/link";
import { Container, Grid, useMediaQuery, Box } from "@mui/material";

const ProjectIntro = ({
  title,
  locationName,
  textFirstColumn,
  textSecondColumn,
}) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");

  return (
    <Box className={styles.projectIntro}>
      <Container>
        <Box sx={{ paddingTop: matchesMd ? 12 : 8 }}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} lg={10}>
              <Grid container>
                <Grid item xs={12} md={6} lg={5}>
                  <h2 className={styles.title}>{title}</h2>
                  <Box mb={3}>
                    <p className={styles.location}>{locationName}</p>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={6}>
                  {" "}
                  <p className={styles.description}>{textFirstColumn}</p>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  {" "}
                  <p className={styles.description}>{textSecondColumn}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectIntro;
