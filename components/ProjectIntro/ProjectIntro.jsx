import styles from "./ProjectIntro.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, Button } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

const ProjectIntro = ({
  title,
  locationName,
  locationUrl,
  textFirstColumn,
  textSecondColumn,
}) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <Box className={styles.projectIntro}>
      <Container>
        <Box sx={{ paddingY: matchesMd ? 12 : 8 }}>
          <Grid container>
            <Grid item xs={12} md={6} lg={4}>
              <h2 className={styles.title}>{title}</h2>
              <Box mb={3} sx={{ display: "flex", alignItems: "center" }}>
                <i className={styles.icon}>
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.99998 8.0453C7.06207 8.0453 7.92306 7.17733 7.92306 6.10663C7.92306 5.03594 7.06207 4.16797 5.99998 4.16797C4.9379 4.16797 4.0769 5.03594 4.0769 6.10663C4.0769 7.17733 4.9379 8.0453 5.99998 8.0453Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.53562 11.1196L6.88375 14.14C6.64937 14.4067 6.33161 14.5565 6.00031 14.5565C5.66901 14.5565 5.35126 14.4067 5.11688 14.14L2.46438 11.1196C1.76514 10.3231 1.28896 9.30834 1.09606 8.20363C0.903152 7.09891 1.00218 5.95386 1.38063 4.91325C1.75907 3.87264 2.39994 2.98322 3.22218 2.35746C4.04442 1.7317 5.0111 1.39771 6 1.39771C6.9889 1.39771 7.95558 1.7317 8.77782 2.35746C9.60006 2.98322 10.2409 3.87264 10.6194 4.91325C10.9978 5.95386 11.0968 7.09891 10.9039 8.20363C10.711 9.30834 10.2349 10.3231 9.53562 11.1196V11.1196Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <p className={styles.location}>{locationName}</p>
              </Box>
              <p className={styles.description}>{textFirstColumn}</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectIntro;
