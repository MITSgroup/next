import styles from "./ProjectAbout.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box } from "@mui/material";
import Image from "next/image";

const ProjectAbout = ({
  title,
  titleFirstColumn,
  titleSecondColumn,
  paragraphFirstColumn,
  paragraphSecondColumn,
  imageFirstColumn,
  imageSecondColumn,
}) => {
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAABAPH1++3z+wC+u7afZk6gak0AXVhB48Wy//vcACcjF6aek4mRgaNzFJBAf93eAAAAAElFTkSuQmCC";
  const matchesMd = useMediaQuery("(min-width: 768px)");
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
                    src={imageFirstColumn}
                    fill
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            50vw"
                    blurDataURL={placeholder}
                    placeholder={"blur"}
                    style={{
                      objectFit: "cover",
                    }}
                    alt={title}
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
                    src={imageSecondColumn}
                    fill
                    sizes="100vw"
                    blurDataURL={placeholder}
                    placeholder={"blur"}
                    style={{
                      objectFit: "cover",
                    }}
                    alt={title}
                  />
                </Box>
              )}

              <Box
                maxWidth={400}
                mt={"auto"}
                ml={matchesMd ? "auto" : 0}
                textAlign={matchesMd ? "right" : "left"}
              >
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
