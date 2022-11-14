import { MainLayout } from "../layouts/MainLayout";
import { useMediaQuery, Box, Typography, Container, Grid } from "@mui/material";
import Subscribe from "../components/Subscribe/Subscribe";
import styles from "../styles/thankYou.module.scss";
import ContactsItem from "../components/ContactsItem/ContactsItem";

const Contacts = () => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

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
            <ContactsItem title={"instagram"} icon={"instagram"} link={""} />
            <ContactsItem title={"LINKEDIN"} icon={"linkedin"} link={""} />
            <ContactsItem title={"facebook"} icon={"facebook"} link={""} />
          </Box>
        </Box>
      </Container>
      <Subscribe />
    </MainLayout>
  );
};

// export async function getStaticProps() {
//   const response = await fetch(
//     "http://127.0.0.1:1337/api/posts?sort=createdAt:desc"
//   );
//
//   const postsRes = await response.json();
//
//   return {
//     props: {
//       posts: postsRes.data,
//     },
//     revalidate: 10,
//   };
// }

export default Contacts;
