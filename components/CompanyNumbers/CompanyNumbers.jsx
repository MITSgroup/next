import styles from "./CompanyNumbers.module.scss";
import React from "react";

import { Grid, Box, useMediaQuery, Typography } from "@mui/material";

const CompanyNumbers = () => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  return (
    <Box className={styles.companyNumbers}>
      <Grid container spacing={matchesLg ? 15 : 4}>
        <Grid item xs={12} md={6} lg={5}>
          <p className={styles.numLarge}>40</p>
          <Typography
            component={"h4"}
            textAlign={"center"}
            className={styles.title}
          >
            PROJECTS COMPLETED
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={3}>
            <Grid mb={2.8} item xs={6}>
              <p className={styles.num}>15</p>
              <Typography className={styles.title}>
                YEARS IN THE INDUSTRY
              </Typography>
            </Grid>
            <Grid mb={2.8} item xs={6}>
              <p className={styles.num}>18</p>
              <Typography className={styles.title}>
                INTERNATIONAL AWARDS
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <p className={styles.num}>9</p>
              <Typography className={styles.title}>OWNED PROJECTS</Typography>
            </Grid>
            <Grid item xs={6}>
              <p className={styles.num}>80%</p>
              <Typography className={styles.title}>
                AVERAGE OCCUPANCY
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyNumbers;
