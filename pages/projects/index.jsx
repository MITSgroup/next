import { MainLayout } from "../../layouts/MainLayout";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import React from "react";
import { fetchAPI } from "../../lib/api";

const Projects = ({ projects, portfolios, global, social }) => {
  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={false}
      global={global}
      social={social}
    >
      <ProjectsGrid projects={projects} portfolio={portfolios} />
    </MainLayout>
  );
};

export async function getStaticProps( locales ) {
  console.log(locales);
  const [projectsRes, portfoliosRes, globalRes, socialRes] = await Promise.all([
    fetchAPI("/projects", { locale: {$eq:currentLocale}, populate: "*" }),
    fetchAPI("/portfolios", { populate: "*" }),
    fetchAPI("/global"),
    fetchAPI("/social"),
  ]);

  return {
    props: {
      projects: projectsRes.data,
      portfolios: portfoliosRes.data,
      global: globalRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

export default Projects;
