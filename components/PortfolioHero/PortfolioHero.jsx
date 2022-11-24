import styles from "./PortfolioHero.module.scss";
import React from "react";

import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";

const PortfolioHero = ({ name, description, image }) => {
  return (
    <Box className={styles.portfolioHero}>
      <Box className={styles.backgroundImage}>
        <Image
          alt="Mountains"
          src={image}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
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
