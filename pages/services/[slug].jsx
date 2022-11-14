import { MainLayout } from "../../layouts/MainLayout";
import { useRouter } from "next/router";

import { useMediaQuery, Box, Grid } from "@mui/material";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ProjectLocation from "../../components/ProjectLocation/ProjectLocation";
import Cta from "../../components/Cta/Cta";
import ProjectAbout from "../../components/ProjectAbout/ProjectAbout";
import ProjectSpecs from "../../components/ProjectSpecs/ProjectSpecs";
import Reviews from "../../components/Reviews/Reviews";
import ProjectAdvantages from "../../components/ProjectAdvantages/ProjectAdvantages";
import ProjectModelling from "../../components/ProjectModelling/ProjectModelling";
import { fetchAPI } from "../../lib/api";
import ProjectApartments from "../../components/ProjectApartments/ProjectApartments";
import ProjectCta from "../../components/ProjectCta/ProjectCta";

const Project = ({ service }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const router = useRouter();

  return (
    <MainLayout
      metaTitle={`MITS – ${project.attributes.name}`}
      metaDescription={"MITS"}
      headerTransparent={true}
    ></MainLayout>
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
  const servicesRes = await fetchAPI("/services", {
    filters: {
      slug: params.slug,
    },
    populate: "deep",
  });

  return {
    props: {
      service: servicesRes.data[0],
    },
    revalidate: 10,
  };
}

export default Project;
