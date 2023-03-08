import Image from "next/image";
import { MainLayout } from "../layouts/MainLayout";
import ContactUs from "../components/ContactUs/ContactUs";
import styles from "../styles/about.module.scss";
import { Container, Grid, Box, useMediaQuery } from "@mui/material";
import { fetchAPI } from "../lib/api";
import { useRouter } from "next/router";

const About = ({ global, social }) => {
  const router = useRouter();
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAABAPH1++3z+wC+u7afZk6gak0AXVhB48Wy//vcACcjF6aek4mRgaNzFJBAf93eAAAAAElFTkSuQmCC";
  const placeholder2 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49vzVik3b3///P3/pPAZPSzVxBgY9FW4NBQYAxrMK7Iw5NV8AAAAASUVORK5CYII=";


  if(typeof window !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: window.location.href,
    });
  }


  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={false}
      global={global}
      social={social}
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
                <Image
                  src={"/images/about/1.jpg"}
                  alt={"about company"}
                  blurDataURL={placeholder2}
                  placeholder={"blur"}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
              <h1 className={styles.title}>{router.locale === "en" ? "ABOUT MITS.STUDIO" : "О MITS.STUDIO"}</h1>
              <p className={styles.subtitle}>
                {router.locale === "en" ? "Building for the living you deserve" : "НЕДВИЖИМОСТЬ ДЛЯ ЖИЗНИ, КОТОРОЙ ВЫ ДОСТОЙНЫ"}
              </p>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"center"}
            spacing={matchesMd ? 20 : 0}
          >
            {" "}
            <Grid item xs={12} md={8} lg={6}>
              <Box className={styles.item}>
                <h3>{router.locale === "en" ? "WHO WE ARE" : "О НАС"}</h3>
                <p>
                {router.locale === "en" ? "Founded in Bali in 2020, by multi-awards winning developers and architects, MITS is a collaborative team of creative individuals who bring a constructive, strategic and inclusive approach to design. We uncovering insights behind what users need and desire." : "MITS.STUDIO, основанная на Бали в 2020 году профессиональными девелоперами и архитекторами, получившими множество наград, это команда творческих людей, которые имеют не только конструктивный и стратегический, но и подход к дизайну. Мы всегда исходим из возможностей и пожеланий наших клиентов."}
                </p>
              </Box>
              <Box className={styles.item}>
                <h3>{router.locale === "en" ? "MISSION" : "НАШ ПОДХОД"}</h3>
                <p>
                  {router.locale === "en" ? "Our mission is to make positive impact through design and create a better everyday life for people and the planet. Our driving force is to create sustainable social architecture for lifestyle of communities and make projects profitable for our customers." : "Наша миссия – улучшать повседневную жизнь людей через призму уникальных дизайнерских решений. Наша движущая сила – создание социальной архитектуры для комфортной жизни и реализация прибыльных проектов для наших клиентов."}
                </p>
              </Box>
              <Box className={styles.item}>
                <h3>{router.locale === "en" ? "PROJECT APPROACH" : "НАША ИДЕОЛОГИЯ"}</h3>
                <p>
                  {router.locale === "en" ? "We work with an ever-growing network of forward-thinking specialists and creatives from around the world, specially selected for each project." : "Мы сотрудничаем с постоянно развивающимся комьюнити специалистов со всего мира, и индивидуально подбираем профессионалов для каждого нашего проекта."}
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box className={styles.aboutImages}>
          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/2.jpg"}
              blurDataURL={placeholder}
              placeholder={"blur"}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt={"about MITS"}
            />
          </Box>

          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/3.jpg"}
              blurDataURL={placeholder}
              placeholder={"blur"}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt={"about MITS"}
            />
          </Box>

          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/4.jpg"}
              blurDataURL={placeholder}
              placeholder={"blur"}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt={"about MITS"}
            />
          </Box>

          <Box className={styles.aboutImage}>
            <Image
              src={"/images/about/5.jpg"}
              blurDataURL={placeholder}
              placeholder={"blur"}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt={"about MITS"}
            />
          </Box>
        </Box>
      </section>
      <ContactUs reachGoal={'about'} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const [globalRes, socialRes] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/social"),
  ]);

  return {
    props: {
      global: globalRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

export default About;
