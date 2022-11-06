import styles from "./ProjectModelling.module.scss";
import React from "react";
import { Container, Grid, useMediaQuery, Box, Button } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

const ProjectModelling = ({ apartments }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box className={styles.projectModelling}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            <h2 className={styles.title}>
              RETURN ON <br /> INVESTMENT <br /> MODELLING
            </h2>

            <Box className={styles.tabs}>
              {apartments &&
                apartments.map((apartment, idx) => (
                  <Box
                    key={apartment.id}
                    className={`${styles.tabItem} ${
                      idx === activeTab ? styles.active : ""
                    }`}
                  >
                    <p className={styles.name}>{apartment.apartmentName}</p>
                    <p className={styles.price}>${apartment.apartmentPrice}</p>
                  </Box>
                ))}
            </Box>

            <Box className={styles.table}>
              {apartments[activeTab] &&
                apartments[activeTab].rows.map((item) => (
                  <Box key={item.id} className={styles.row}>
                    <p>{item.name}</p>
                    <p>{item.firstValue}</p>
                    <p>{item.secondValue}</p>
                    <p>{item.thirdValue}</p>
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectModelling;
