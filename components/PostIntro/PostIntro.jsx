import styles from "./PostIntro.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, Button } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

const PostIntro = ({ title, textFirstColumn, textSecondColumn }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <Box className={styles.postIntro}>
      <Container>
        <Box sx={{ paddingY: matchesMd ? 12 : 8 }}>
          <h2 className={styles.title}>{title}</h2>
          <Grid container spacing={matchesMd ? 15 : 6}>
            <Grid item xs={12} md={6} lg={4}>
              <p className={styles.description}>{textFirstColumn}</p>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <p className={styles.description}>{textSecondColumn}</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PostIntro;
