import styles from "./BlogHero.module.scss";
import React from "react";
import { Container, Grid, Box } from "@mui/material";

const BlogHero = ({ title, image }) => {
  return (
    <Box
      className={styles.pageHero}
      sx={{
        backgroundImage: image ? `url(${image})` : "url(/images/hero/blog.jpg)",
      }}
    >
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
