import { MainLayout } from "../layouts/MainLayout";
import { Box, Typography, Container } from "@mui/material";
import Subscribe from "../components/Subscribe/Subscribe";
import styles from "../styles/thankYou.module.scss";
import ContactsItem from "../components/ContactsItem/ContactsItem";

const ThankYouForm = () => {
  return (
    <MainLayout
      metaTitle={"MITS – Thank You"}
      metaDescription={"MITS"}
      headerTransparent={false}
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
            <ContactsItem
              title={"Instagram"}
              icon={"instagram"}
              link={"https://instagram.com/mits.bali?igshid=YmMyMTA2M2Y="}
            />
          </Box>
        </Box>
      </Container>
      <Subscribe />
    </MainLayout>
  );
};

export default ThankYouForm;
