import Image from "next/image";
import { MainLayout } from "../layouts/MainLayout";
import ContactUs from "../components/ContactUs/ContactUs";
import styles from "../styles/about.module.scss";
import { Container, Grid, Box, Typography, useMediaQuery } from "@mui/material";

const About = () => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={false}
    >
      <section className={styles.about}>
        <Container>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={10} lg={6}>
              <Box
                sx={{
                  position: "relative",
                  height: 200,
                  marginBottom: matchesMd ? 15 : 8,
                }}
              >
                {" "}
                <Image
                  src={"/images/about/1.jpg"}
                  alt={"about company"}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </Box>
              <h1 className={styles.title}>ABOUT MITS.STUDIO</h1>
              <p className={styles.subtitle}>
                Building for the living you deserve.
              </p>
            </Grid>
            <Grid item xs={12} md={10} lg={8}>
              <Box className={styles.item}>
                <h3>WHO WE ARE</h3>
                <p>
                  Founded in Bali in 2020, by multi-awards winning developers
                  and architects, MITS is a collaborative team of creative
                  individuals who bring a constructive, strategic and inclusive
                  approach to design. We uncovering insights behind what users
                  need and desire.
                </p>
              </Box>
              <Box className={styles.item}>
                <h3>MISSION</h3>
                <p>
                  Our mission is to make positive impact through design and
                  create a better everyday life for people and the planet. Our
                  driving force is to create sustainable social architecture for
                  lifestyle of communities and make projects profitable for our
                  customers.
                </p>
              </Box>
              <Box className={styles.item}>
                <h3>PROJECT APPROACH</h3>
                <p>
                  We work with an ever-growing network of forward-thinking
                  specialists and creatives from around the world, specially
                  selected for each project.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box className={styles.aboutImages}>
          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/2.jpg"}
              layout={"fill"}
              objectFit={"cover"}
            />
          </Box>

          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/3.jpg"}
              layout={"fill"}
              objectFit={"cover"}
            />
          </Box>

          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/4.jpg"}
              layout={"fill"}
              objectFit={"cover"}
            />
          </Box>

          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/5.jpg"}
              layout={"fill"}
              objectFit={"cover"}
            />
          </Box>
        </Box>
      </section>
      <ContactUs />
    </MainLayout>
  );
};

export default About;
