import styles from "./BlogHero.module.scss";
import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";

const BlogHero = ({ title, imagePath }) => {
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49vzVik3b3///P3/pPAZPSzVxBgY9FW4NBQYAxrMK7Iw5NV8AAAAASUVORK5CYII=";

  return (
    <Box className={styles.pageHero}>
      <Box className={styles.backgroundImage}>
        <Image
          alt="Mountains"
          src={imagePath}
          quality={80}
          fill
          priority
          blurDataURL={placeholder}
          placeholder={"blur"}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "left top",
          }}
        />
      </Box>
      <Box className={styles.content}>
        <Container>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={10} lg={8}>
              <h1 className={styles.title}>{title}</h1>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogHero;
