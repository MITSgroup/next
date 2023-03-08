import { MainLayout } from "../layouts/MainLayout";
import { useMediaQuery, Box, Container, Grid } from "@mui/material";
import styles from "../styles/contacts.module.scss";
import BlogHero from "../components/BlogHero/BlogHero";
import GoogleMapReact from "google-map-react";
import ContactsItem from "../components/ContactsItem/ContactsItem";
import { fetchAPI } from "../lib/api";
import React from "react";
import { useRouter } from "next/router";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacts = ({ global, social }) => {
  const router = useRouter();
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  console.log(global);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <MainLayout
      metaTitle={"MITS – Journal"}
      metaDescription={"MITS"}
      headerTransparent={true}
      global={global}
      social={social}
    >
      <BlogHero title={router.locale === "en" ? "CONTACT US" : "КОНТАКТЫ"} imagePath={"/images/hero/contacts.jpg"} />

      <section className={styles.contacts}>
        <Container>
          <Grid mb={5} container spacing={4} justifyContent={"center"}>
            {global?.attributes.address && (
              <Grid item xs={12} md={3} lg={3}>
                <ContactsItem
                  title={router.locale === "en" ? "Visit us" : "Посетите нас"}
                  icon={"location"}
                  link={global?.attributes?.addressLink}
                  textLink={global.attributes.address}
                />
              </Grid>
            )}

            {global?.attributes.phoneLInk && (
              <Grid item xs={12} md={3} lg={3}>
                <ContactsItem
                  title={router.locale === "en" ? "Call us" : "Позвоните нам"}
                  icon={"phone"}
                  link={global.attributes.phoneLInk}
                  textLink={global.attributes.phone}
                />
              </Grid>
            )}

            {global?.attributes.email && (
              <Grid item xs={12} md={3} lg={3}>
                <ContactsItem
                  title={router.locale === "en" ? "Email us" : "Напишите нам"}
                  icon={"email"}
                  link={`mailto:${global.attributes.email}`}
                  textLink={global.attributes.email}
                />
              </Grid>
            )}

            {social?.attributes.instagramLink && (
              <Grid item xs={12} md={3} lg={3}>
                <ContactsItem
                  title={"instagram"}
                  icon={"instagram"}
                  link={social.attributes.instagramLink}
                />
              </Grid>
            )}

            {social?.attributes.facebookLink && (
              <Grid item xs={12} md={3} lg={3}>
                <ContactsItem
                  title={"facebook"}
                  icon={"facebook"}
                  link={social.attributes.facebookLink}
                />
              </Grid>
            )}

            {social?.attributes.linkedinLink && (
              <Grid item xs={12} md={3} lg={3}>
                <ContactsItem
                  title={"linkedin"}
                  icon={"linkedin"}
                  link={social.attributes.linkedinLink}
                />
              </Grid>
            )}
          </Grid>

          <Grid container spacing={4} justifyContent={"center"}>
            {/*<Grid item xs={4} md={4} lg={3}>*/}
            {/*  <ContactsItem title={"Linkedin"} icon={"linkedin"} link={"#"} />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={4} md={4} lg={3}>*/}
            {/*  <ContactsItem title={"Facebook"} icon={"facebook"} link={"#"} />*/}
            {/*</Grid>*/}
          </Grid>
        </Container>
      </section>

      <Box sx={{ width: "100%", height: matchesLg ? 550 : 350 }}>
        <iframe
          src={"https://snazzymaps.com/embed/457352"}
          width="100%"
          height="600px"
          style={{ border: "none" }}
        ></iframe>
      </Box>
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

export default Contacts;
