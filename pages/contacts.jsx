import { MainLayout } from "../layouts/MainLayout";
import { useMediaQuery, Box, Container, Grid } from "@mui/material";
import styles from "../styles/contacts.module.scss";
import BlogHero from "../components/BlogHero/BlogHero";
import GoogleMapReact from "google-map-react";
import ContactsItem from "../components/ContactsItem/ContactsItem";
import { fetchAPI } from "../lib/api";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacts = ({ global, social }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");

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
      <BlogHero title={"CONTACT US"} />

      <section className={styles.contacts}>
        <Container>
          <Grid mb={5} container spacing={4} justifyContent={"center"}>
            <Grid item xs={12} md={3} lg={3}>
              <ContactsItem
                title={"Visit us"}
                icon={"location"}
                link={"https://goo.gl/maps/wKZqCnDqFgZgjCap8"}
                textLink={
                  "jalan Dukuh Indah Gang Suli N°5 x2, Kerobokan Kelod, Kuta Utara, kerobokan, Bali 80361"
                }
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <ContactsItem
                title={"Call us"}
                icon={"phone"}
                link={"https://wa.me/6282144576669"}
                textLink={"+62 82144576669 (WhatsApp)"}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <ContactsItem
                title={"Email us"}
                icon={"email"}
                link={"mailto:anna.mits.bali@gmail.com"}
                textLink={"anna.mits.bali@gmail.com"}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <ContactsItem
                title={"Instagram"}
                icon={"instagram"}
                link={"https://instagram.com/mits.bali?igshid=YmMyMTA2M2Y="}
              />
            </Grid>
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
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
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
