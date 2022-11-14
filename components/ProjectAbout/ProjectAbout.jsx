import styles from "./ProjectAbout.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box } from "@mui/material";

import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";

const ProjectAbout = ({
  title,
  titleFirstColumn,
  titleSecondColumn,
  paragraphFirstColumn,
  paragraphSecondColumn,
  imageFirstColumn,
  imageSecondColumn,
}) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <Box className={styles.projectAbout}>
      <Container>
        <Grid container justifyContent={"center"} spacing={5}>
          <Grid item xs={12} md={6} lg={5}>
            <Box className={styles.column}>
              <Box maxWidth={400} mb={5}>
                <h2 className={styles.title}>{title}</h2>

                <h4 className={styles.subtitle}>{titleFirstColumn}</h4>

                {paragraphFirstColumn &&
                  paragraphFirstColumn.map((p) => (
                    <p key={p.id} className={styles.paragraph}>
                      {p.text}
                    </p>
                  ))}
              </Box>
              {imageFirstColumn && (
                <Box width={"100%"} height={600} position={"relative"}>
                  <Image
                    src={`http://localhost:1337${imageFirstColumn}`}
                    layout={"fill"}
                    objectFit="cover"
                  />
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Box className={styles.column}>
              {imageSecondColumn && (
                <Box width={"100%"} mb={5} height={600} position={"relative"}>
                  <Image
                    src={`http://localhost:1337${imageSecondColumn}`}
                    layout={"fill"}
                    objectFit="cover"
                  />
                </Box>
              )}

              <Box maxWidth={400} mt={"auto"} ml={matchesLg ? "auto" : 0}>
                <h4 className={styles.subtitle}>{titleSecondColumn}</h4>

                {paragraphSecondColumn &&
                  paragraphSecondColumn.map((p) => (
                    <p key={p.id} className={styles.paragraph}>
                      {p.text}
                    </p>
                  ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectAbout;
