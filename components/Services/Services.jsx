import styles from "./Services.module.scss";
import React from "react";
import { Container, Grid, Typography, useMediaQuery, Box } from "@mui/material";
import Image from "next/image";
import ServicesAccordion from "../ServicesAccordion/ServicesAccordion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Services = () => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <section className={styles.services}>
      <Container>
        <Grid container sx={{ marginBottom: matchesLg ? 12 : 8 }}>
          <Grid item xs={12} md={6} lg={5}>
            <Typography mb={4} component={"h3"} className={styles.title}>
              SERVICES
            </Typography>
            <p className={styles.text}>
              MITS. studio facilitates collaborative processes between clients,
              builders and suppliers, with the aim of provide the best
              solutions, based on aesthetics and creativity.
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography mb={1} component={"h3"} className={styles.title}>
              ARCHITECTURE
            </Typography>
            <p className={styles.smallText}>
              We create vision from the initial sketch up to full concept and
              supervise all the construction process.
            </p>
          </Grid>

          {!matchesLg && (
            <Grid item xs={12} md={6} lg={3} position={"relative"}>
              <Swiper pagination={true} modules={[Pagination]}>
                <SwiperSlide>
                  <Image
                    src={"/images/services/1.jpg"}
                    width={560}
                    height={900}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={"/images/services/2.jpg"}
                    width={560}
                    height={900}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={"/images/services/3.jpg"}
                    width={560}
                    height={900}
                  />
                </SwiperSlide>
              </Swiper>
            </Grid>
          )}

          {matchesLg && (
            <Grid item xs={12} md={6} lg={3} position={"relative"}>
              <Image src={"/images/services/1.jpg"} width={560} height={900} />
            </Grid>
          )}

          {matchesLg && (
            <Grid item xs={12} md={6} lg={3} position={"relative"}>
              <Image src={"/images/services/2.jpg"} width={560} height={900} />
            </Grid>
          )}

          {matchesLg && (
            <Grid item xs={12} md={6} lg={3} position={"relative"}>
              <Image src={"/images/services/3.jpg"} width={560} height={900} />
            </Grid>
          )}
        </Grid>
        <ServicesAccordion />
      </Container>
    </section>
  );
};

export default Services;
