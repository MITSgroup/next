import styles from "./ProjectApartments.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, Button } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

const ProjectApartments = ({ apartments }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box className={styles.projectApartments}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            <Box className={styles.tabs}>
              {apartments &&
                apartments.map((apartment, idx) => (
                  <Box
                    key={apartment.id}
                    className={`${styles.tabItem} ${
                      idx === activeTab ? styles.active : ""
                    }`}
                  >
                    <p className={styles.price}>${apartment.price}</p>
                    <p className={styles.bedrooms}>
                      FOR A {apartment.bedroomsCount}-BEDROOM UNIT
                    </p>

                    <ul className={styles.list}>
                      {apartment.advantages &&
                        apartment.advantages.map((obj) => (
                          <li key={obj.id}>{obj.item}</li>
                        ))}
                    </ul>
                  </Box>
                ))}
            </Box>
            <Box sx={{ paddingY: 8 }}>
              {" "}
              {apartments &&
                apartments.map((apartment, idx) =>
                  idx === activeTab ? (
                    <Box key={apartment.id} className={styles.tabContent}>
                      <Grid container spacing={6}>
                        <Grid item xs={10} md={6} lg={5}>
                          <h4 className={styles.subtitle}>LAYOUT</h4>

                          <Image
                            src={`http://localhost:1337${apartment.layout.data.attributes.url}`}
                            width={500}
                            objectFit="cover"
                            height={600}
                          />
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                          <h4 className={styles.subtitle}>Specs</h4>
                          <small className={styles.small}>Sq. m.</small>
                          <ul className={styles.specs}>
                            {apartment.specs &&
                              apartment.specs.map((item, idx) => (
                                <li key={item.id}>
                                  <p className={styles.count}>{idx + 1}</p>
                                  <p className={styles.name}>{item.name}</p>
                                  <p className={styles.value}>{item.value}</p>
                                </li>
                              ))}
                            <li>
                              <p className={styles.total}>Total — </p>
                            </li>
                          </ul>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : null
                )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectApartments;
