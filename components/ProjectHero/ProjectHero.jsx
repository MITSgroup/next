import styles from "./ProjectHero.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, Button } from "@mui/material";
import Image from "next/image";
import MainNav from "../Nav/MainNav";
import Link from "next/link";
import MainForm from "../Forms/MainForm";

const ProjectHero = ({ name, description, type, left, price, specs }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <Box className={styles.projectHero}>
      <Box className={styles.content}>
        <Container
          sx={{ height: "100%", padding: matchesMd ? "0 !important" : "" }}
        >
          <Box className={styles.inner}>
            <Box
              sx={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: matchesMd ? 5 : 0,
                paddingRight: matchesMd ? 8 : 0,
              }}
            >
              <h1 className={styles.title}>{name}</h1>
              <p className={styles.description}>{description}</p>
              {matchesMd && (
                <Box sx={{ paddingTop: 6 }}>
                  <MainForm />
                </Box>
              )}
            </Box>
            <Box
              sx={{
                paddingTop: matchesMd ? 0 : 4,
                paddingBottom: 4,
              }}
            >
              <Box className={styles.priceBlock}>
                <small>Starting from:</small>
                <p className={styles.price}>${price}</p>
                <ul className={styles.includesList}>
                  {specs &&
                    specs.map((item) => <li key={item.id}>{item.item}</li>)}
                </ul>
              </Box>
              <Box className={styles.availability}>
                <p>
                  ONLY {left} <br /> {type}S <br />
                  LEFT
                </p>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectHero;
