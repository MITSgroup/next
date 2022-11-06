import { MainLayout } from "../../layouts/MainLayout";
import { useMediaQuery, Box } from "@mui/material";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";

const Projects = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <ProjectsGrid />
    </MainLayout>
  );
};

export default Projects;
