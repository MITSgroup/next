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

const Project = ({ project }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const router = useRouter();

  return (
    <MainLayout
      metaTitle={`MITS – ${project.attributes.name}`}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <ProjectHero
        name={project.attributes.name}
        description={project.attributes.hero.description}
        type={project.attributes.hero.projectType}
        left={project.attributes.hero.projectLeft}
        price={project.attributes.hero.startingPrice}
        specs={project.attributes.hero.specs}
      />

      {project.attributes.intro && (
        <ProjectIntro
          title={project.attributes.intro.title}
          locationName={project.attributes.locationName}
          locationUrl={project.attributes.locationUrl}
          textFirstColumn={project.attributes.intro.textFirstColumn}
          textSecondColumn={project.attributes.intro.textSecondColumn}
        />
      )}

      <ImageGallery images={project.attributes.gallery?.data} />
      <ProjectApartments apartments={project.attributes?.apartment} />
      <ProjectLocation
        title={project.attributes.location?.title}
        description={project.attributes.location?.description}
        advantages={project.attributes.location?.advantages}
      />
      <Cta />
      {project.attributes.about && (
        <ProjectAbout
          title={project.attributes.about?.title}
          titleFirstColumn={project.attributes.about?.titleFirstColumn}
          titleSecondColumn={project.attributes.about?.titleSecondColumn}
          paragraphFirstColumn={project.attributes.about?.paragraphFirstColumn}
          paragraphSecondColumn={
            project.attributes.about?.paragraphSecondColumn
          }
          imageFirstColumn={
            project.attributes.about?.imageFirstColumn?.data?.attributes.url
          }
          imageSecondColumn={
            project.attributes.about?.imageSecondColumn?.data?.attributes?.url
          }
        />
      )}

      {project.attributes.specs && (
        <ProjectSpecs
          layout={project.attributes.specs?.generalLayout}
          amenities={project.attributes.specs?.amenities}
        />
      )}

      <Reviews />

      {project.attributes.advantages && (
        <ProjectAdvantages items={project.attributes?.advantages.advantage} />
      )}

      {project.attributes.returnOnInvestment && (
        <ProjectModelling apartments={project.attributes.returnOnInvestment} />
      )}
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const projectsRes = await fetchAPI("/projects", { fields: ["slug"] });

  return {
    paths: projectsRes.data.map((page) => ({
      params: {
        slug: page.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectsRes = await fetchAPI("/projects", {
    filters: {
      slug: params.slug,
    },
    populate: "deep",
  });

  return {
    props: {
      project: projectsRes.data[0],
    },
    revalidate: 1,
  };
}

export default Project;
