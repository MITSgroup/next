import { MainLayout } from "../../layouts/MainLayout";
import { Container } from "@mui/material";

import BlogHero from "../../components/BlogHero/BlogHero";

import React from "react";

const Services = () => {
  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <BlogHero title={"Services"} />
      <Container></Container>
    </MainLayout>
  );
};

export default Services;
