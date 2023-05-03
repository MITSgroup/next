import styles from "./ProjectCta.module.scss";
import React from "react";

import { Container, Grid, Box } from "@mui/material";

import ProjectForm from "../Forms/ProjectForm";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectCta = ({ title, description, type, left, imageUrl, label, reachGoal }) => {
  const router = useRouter();
  return (
    <Box className={styles.projectCta} id={"form"}>
      {imageUrl && (
        <Box className={styles.image}>
          <Image
            alt={title}
            src={imageUrl}
            quality={80}
            fill
            priority
            sizes="50vw"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      <Container>
        <Grid container justifyContent={"flex-end"} position={"relative"}>
          <Grid item xs={12} md={6} lg={5}>
            <Box className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
              <ProjectForm reachGoal={reachGoal} />
            </Box>

            {label && (
              <Box className={styles.availability}>
                <p>
                  {left}
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
