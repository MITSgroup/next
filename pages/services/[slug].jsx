import { MainLayout } from "../../layouts/MainLayout";
import { useMediaQuery, Box, Grid, Container, Typography } from "@mui/material";
import { fetchAPI } from "../../lib/api";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import CompanyNumbers from "../../components/CompanyNumbers/CompanyNumbers";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Cta from "../../components/Cta/Cta";
import Reviews from "../../components/Reviews/Reviews";
import ProjectCta from "../../components/ProjectCta/ProjectCta";

const Service = ({ service, reviews }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");

  return (
    <MainLayout
      metaTitle={`MITS – ${service.attributes.name}`}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <ServicesHero
        title={service.attributes.name}
        image={service.attributes.thumbnail.data.attributes.url}
      />
      <Container>
        <Grid sx={{ paddingY: 8 }} container>
          <Grid item xs={12} lg={5}>
            <Typography
              sx={{ fontSize: matchesMd ? 24 : 18, lineHeight: "130%" }}
            >
              MITS. studio facilitates collaborative processes between clients,
              builders and suppliers, with the aim of provide the best
              solutions, based on aesthetics and creativity.
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={10}>
            <CompanyNumbers />

            <Grid container>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
        {service.attributes.gallery && (
          <ImageGallery images={service.attributes.gallery?.data} />
        )}

        {reviews && <Reviews reviews={reviews} />}
      </Container>

      <Box mb={20}>
        <Cta />
      </Box>

      <ProjectCta
        title={"TELL US ABOUT YOUR PROJECT"}
        description={
          "Gain up to 12% annualy or set up your fine-cut base in the heart of the most lively area in the most visited tourist destination of recent years."
        }
        label={false}
      />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const servicesRes = await fetchAPI("/services", { fields: ["slug"] });

  return {
    paths: servicesRes.data.map((page) => ({
      params: {
        slug: page.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [servicesRes, reviewsRes] = await Promise.all([
    fetchAPI("/services", {
      filters: {
        slug: params.slug,
      },
      populate: "*",
    }),
    fetchAPI("/reviews", { populate: "*" }),
  ]);

  return {
    props: {
      service: servicesRes.data[0],
      reviews: reviewsRes.data,
    },
    revalidate: 120,
  };
}

export default Service;
