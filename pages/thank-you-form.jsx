import { MainLayout } from "../layouts/MainLayout";
import { Box, Typography, Container } from "@mui/material";
import Subscribe from "../components/Subscribe/Subscribe";
import styles from "../styles/thankYou.module.scss";
import ContactsItem from "../components/ContactsItem/ContactsItem";
import { fetchAPI } from "../lib/api";
import React from "react";

const ThankYouForm = ({ global, social }) => {

  if(typeof window !== 'undefined') {
    window['yaCounter92417784'].hit(window.location.href);
  }

  return (
    <MainLayout
      metaTitle={"MITS – Thank You"}
      metaDescription={"MITS"}
      headerTransparent={false}
      global={global}
      social={social}
    >
      <Container>
        <Box className={styles.thankYou}>
          <Typography mb={3} component={"h1"} className={styles.title}>
            THANK YOU FOR REACHING US!
          </Typography>
          <Typography mb={8} className={styles.subtitle}>
            Our team will contact you soon.
          </Typography>

          <Typography mb={8} className={styles.subtitle}>
            Give us a follow:
          </Typography>

          <Box className={styles.socials}>
            {social?.attributes.instagramLink && (
              <ContactsItem
                title={"instagram"}
                icon={"instagram"}
                link={social.attributes.instagramLink}
              />
            )}

            {social?.attributes.facebookLink && (
              <ContactsItem
                title={"facebook"}
                icon={"facebook"}
                link={social.attributes.facebookLink}
              />
            )}

            {social?.attributes.linkedinLink && (
              <ContactsItem
                title={"linkedin"}
                icon={"linkedin"}
                link={social.attributes.linkedinLink}
              />
            )}
          </Box>
        </Box>
      </Container>
      <Subscribe />
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

export default ThankYouForm;
