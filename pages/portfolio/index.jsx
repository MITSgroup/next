import { MainLayout } from "../../layouts/MainLayout";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import { fetchAPI } from "../../lib/api";

const Portfolio = () => {
  return (
    <MainLayout metaTitle={"MITS"} metaDescription={"MITS"}>
      <ProjectsGrid projects={projects} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const [projectsRes, portfolioRes] = await Promise.all([
    fetchAPI("/projects", { populate: "*" }),
    fetchAPI("/portfolio", { populate: "*" }),
  ]);

  return {
    props: {
      projects: projectsRes.data,
      portfolio: portfolioRes.data,
    },
    revalidate: 120,
  };
}

export default Portfolio;
