import React, { Suspense } from "react";

import { MainLayout } from "../../layouts/MainLayout";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Cta from "../../components/Cta/Cta";
import ProjectAbout from "../../components/ProjectAbout/ProjectAbout";
import ProjectSpecs from "../../components/ProjectSpecs/ProjectSpecs";
import Reviews from "../../components/Reviews/Reviews";
import ProjectAdvantages from "../../components/ProjectAdvantages/ProjectAdvantages";
import ProjectModels from "../../components/ProjectModels/ProjectModels";
import ProjectModelling from "../../components/ProjectModelling/ProjectModelling";
import { fetchAPI } from "../../lib/api";
import ProjectApartments from "../../components/ProjectApartments/ProjectApartments";
import ProjectCta from "../../components/ProjectCta/ProjectCta";
import ProjectLocation from "../../components/ProjectLocation/ProjectLocation";

const Project = ({ project, reviews, global, social }) => {
  // function checkThumb(project){
  //   let myproject = project.attributes.thumbnail.data.attributes.url;
  //   console.log('Проверка:' + myproject.includes("to"));
  //   if (myproject.includes("to")) {
  //     console.log('yes');
  //   } else {
  //     myproject = 'https://' + project.attributes.thumbnail.data.attributes.url;
  //     console.log(myproject);
  //   }
  // }
  // checkThumb(project);

  console.log(project);
  return (
    <MainLayout
      metaTitle={`MITS – ${project.attributes.name}`}
      metaDescription={"MITS"}
      headerTransparent={true}
      global={global}
      social={social}
    >
      <ProjectHero
        name={project.attributes.name}
        description={project.attributes.hero.description}
        type={project.attributes.hero.projectType}
        left={project.attributes.hero.projectLeft}
        price={project.attributes.hero.startingPrice}
        specs={project.attributes.hero.specs}
        imageUrl={project.attributes.thumbnail.data.attributes.url}
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
      {project.attributes.gallery && (
        <ImageGallery images={project.attributes.gallery?.data} />
      )}

      {project.attributes?.apartment && (
        <ProjectApartments apartments={project.attributes?.apartment} />
      )}

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

      {reviews && <Reviews reviews={reviews} />}
      {project.attributes.advantages && (
        <ProjectAdvantages items={project.attributes?.advantages.advantage} />
      )}
      {project.attributes.returnOnInvestment && (
        <ProjectModelling apartments={project.attributes.returnOnInvestment} />
      )}

      {project.attributes.models && (
        <ProjectModels image={project.attributes.models.model} items={project.attributes?.models.model} />
      )} 

      {project.attributes.location && (
        <ProjectLocation
          title={project.attributes.location?.title}
          description={project.attributes.location?.description}
          advantages={project.attributes.location?.advantages}
          url={project.attributes?.locationLink}
        />
      )}

      <ProjectCta
        title={"EARLY BIRD SPECIAL OFFER"}
        description={
          "Gain up to 12% annually or set up your fine-cut base in the heart of the most lively area in the most visited tourist destination of recent years."
        }
        label
        imageUrl={project.attributes?.formImage?.data?.attributes?.url}
        type={project.attributes.hero.projectType}
        left={project.attributes.hero.projectLeft}
      />
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
  const [projectsRes, reviewsRes, globalRes, socialRes] = await Promise.all([
    fetchAPI("/projects", {
      filters: {
        slug: params.slug,
      },
      populate: "deep",
    }),
    fetchAPI("/reviews", { populate: "*" }),
    fetchAPI("/global"),
    fetchAPI("/social"),
  ]);

  return {
    props: {
      project: projectsRes.data[0],
      reviews: reviewsRes.data,
      global: globalRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

export default Project;
