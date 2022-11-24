import { MainLayout } from "../../layouts/MainLayout";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import { fetchAPI } from "../../lib/api";

const Portfolio = ({ projects, portfolios }) => {
  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={false}
    >
      <ProjectsGrid projects={projects} portfolio={portfolios} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const [projectsRes, portfoliosRes] = await Promise.all([
    fetchAPI("/projects", { populate: "*" }),
    fetchAPI("/portfolios", { populate: "*" }),
  ]);

  return {
    props: {
      projects: projectsRes.data,
      portfolios: portfoliosRes.data,
    },
    revalidate: 120,
  };
}

export default Portfolio;
