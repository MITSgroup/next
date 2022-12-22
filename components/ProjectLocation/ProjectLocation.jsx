import styles from "./ProjectLocation.module.scss";
import React from "react";
import GoogleMapReact from "google-map-react";
import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ProjectLocation = ({ title, description, advantages }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box className={styles.projectLocation}>
      <Container>
        <Grid container justifyContent={"flex-end"}>
          <Grid item xs={12} md={6} lg={6}>
            <Box paddingTop={6} maxWidth={390} mb={8}>
              <i className={styles.icon}>
                {" "}
                <svg
                  width="17"
                  height="22"
                  viewBox="0 0 17 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50034 11.074C10.0935 11.074 11.385 9.77209 11.385 8.16605C11.385 6.56001 10.0935 5.25806 8.50034 5.25806C6.90721 5.25806 5.61572 6.56001 5.61572 8.16605C5.61572 9.77209 6.90721 11.074 8.50034 11.074Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.8034 15.6856L9.82562 20.2163C9.47405 20.6163 8.99742 20.841 8.50047 20.841C8.00352 20.841 7.52689 20.6163 7.17531 20.2163L3.19657 15.6856C2.14771 14.4909 1.43344 12.9687 1.14409 11.3117C0.854728 9.6546 1.00328 7.93701 1.57094 6.3761C2.13861 4.81519 3.09991 3.48106 4.33327 2.54242C5.56663 1.60378 7.01666 1.10278 8.5 1.10278C9.98334 1.10278 11.4334 1.60378 12.6667 2.54242C13.9001 3.48106 14.8614 4.81519 15.4291 6.3761C15.9967 7.93701 16.1453 9.6546 15.8559 11.3117C15.5666 12.9687 14.8523 14.4909 13.8034 15.6856V15.6856Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
              <ul className={styles.advantagesList}>
                {advantages &&
                  advantages.map((item) => <li key={item.id}>{item.item}</li>)}
              </ul>
            </Box>

            <Box className={styles.images}>
              <Image src={image1} width={180} height={138} alt={"Bali"} />
              <Image src={image2} width={180} height={138} alt={"Bali"} />
              <Image src={image3} width={180} height={138} alt={"Bali"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Box className={styles.map}>
              <iframe
                src="https://snazzymaps.com/embed/448329"
                width="100%"
                height="600px"
                style={{ border: "none" }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectLocation;
