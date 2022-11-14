import { MainLayout } from "../../layouts/MainLayout";
import { useMediaQuery, Box, Container } from "@mui/material";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import BlogHero from "../../components/BlogHero/BlogHero";
import ServicesAccordion from "../../components/ServicesAccordion/ServicesAccordion";
import React from "react";

const Projects = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <BlogHero title={"Services"} />
      <Container>
        {" "}
        <ServicesAccordion />
      </Container>
    </MainLayout>
  );
};

export default Projects;
