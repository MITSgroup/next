import styles from "./PortfolioGallery.module.scss";
import React from "react";

import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";

const PortfolioGallery = ({ images }) => {
  return (
    <Box className={styles.portfolioGallery}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            <ul className={styles.grid}>
              {images &&
                images.map((item) => (
                  <li key={item.id} className={styles.gridItem}>
                    <Image
                      src={item.attributes.url}
                      fill
                      alt={
                        item.attributes.name
                          ? item.attributes.name
                          : "Mits - apartment"
                      }
                    />
                  </li>
                ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioGallery;
