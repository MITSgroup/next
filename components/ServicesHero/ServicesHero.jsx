import styles from "./ServicesHero.module.scss";
import React from "react";
import { Container, Grid, Box, Button } from "@mui/material";

const ServicesHero = ({ title, image }) => {
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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  href={"#form"}
                  variant={"contained"}
                  sx={{ color: "white", border: "1px solid white" }}
                >
                  TELL US ABOUT YOUR PROJECT
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesHero;
