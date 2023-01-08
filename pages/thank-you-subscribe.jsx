import { MainLayout } from "../layouts/MainLayout";
import { Box, Typography, Container } from "@mui/material";

import styles from "../styles/thankYou.module.scss";
import ContactsItem from "../components/ContactsItem/ContactsItem";
import { fetchAPI } from "../lib/api";
import React from "react";

const ThankYouSub = ({ global, social }) => {
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
            THANKS FOR YOUR SUBSCRIPTION!
          </Typography>
          <Typography mb={8} className={styles.subtitle}>
            Check your email for your first portion of content.
          </Typography>

          <Typography mb={8} className={styles.subtitle}>
            Give us a follow for more content like this:
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

export default ThankYouSub;
