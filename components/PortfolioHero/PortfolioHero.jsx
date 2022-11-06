import styles from "./PortfolioHero.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, Button } from "@mui/material";
import Image from "next/image";
import MainNav from "../Nav/MainNav";
import Link from "next/link";
import MainForm from "../Forms/MainForm";

const PortfolioHero = ({ name, description, image }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  console.log(image);

  return (
    <Box
      className={styles.portfolioHero}
      sx={{ backgroundImage: `url(http://localhost:1337${image})` }}
    >
      <Box className={styles.content}>
        <Container>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={10} lg={8}>
              <h1 className={styles.title}>{name}</h1>
              <p className={styles.description}>{description}</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default PortfolioHero;
