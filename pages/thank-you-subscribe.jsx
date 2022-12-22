import { MainLayout } from "../layouts/MainLayout";
import { Box, Typography, Container } from "@mui/material";

import styles from "../styles/thankYou.module.scss";
import ContactsItem from "../components/ContactsItem/ContactsItem";

const ThankYouSub = () => {
  return (
    <MainLayout
      metaTitle={"MITS – Thank You"}
      metaDescription={"MITS"}
      headerTransparent={false}
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
            <ContactsItem
              title={"Instagram"}
              icon={"instagram"}
              link={"https://instagram.com/mits.bali?igshid=YmMyMTA2M2Y="}
            />
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default ThankYouSub;
