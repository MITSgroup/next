import styles from "./ProjectCta.module.scss";
import React from "react";

import { Container, Grid, Box } from "@mui/material";

import ProjectForm from "../Forms/ProjectForm";

const ProjectCta = ({ title, description, type, left, imageUrl, label }) => {
  return (
    <Box className={styles.projectCta}>
      <Container>
        <Grid container justifyContent={"flex-end"} position={"relative"}>
          <Grid item xs={12} md={6} lg={5}>
            <Box className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
              <ProjectForm />
            </Box>

            {label && (
              <Box className={styles.availability}>
                <p>
                  ONLY {left} <br /> {type}S <br />
                  LEFT
                </p>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectCta;
