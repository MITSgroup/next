import styles from "./PortfolioGallery.module.scss";
import React from "react";

import {
  Container,
  Grid,
  useMediaQuery,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";

const PortfolioGallery = ({ images }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

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
                      src={`http://localhost:1337${item.attributes.url}`}
                      objectFit={"cover"}
                      layout={"fill"}
                      alt={item.attributes.name}
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
