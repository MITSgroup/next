import Image from "next/image";
import { MainLayout } from "../layouts/MainLayout";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import Reviews from "../components/Reviews/Reviews";
import Cta from "../components/Cta/Cta";
import Services from "../components/Services/Services";
import ContactUs from "../components/ContactUs/ContactUs";
import { fetchAPI } from "../lib/api";
import React from "react";

const Home = ({ projects, portfolios, reviews }) => {
  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={false}
    >
      <ProjectsGrid projects={projects} portfolio={portfolios} />
      <Reviews reviews={reviews} />
      <Cta />
      <Services />
      <ContactUs />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const [projectsRes, portfoliosRes, reviewsRes] = await Promise.all([
    fetchAPI("/projects", { populate: "*" }),
    fetchAPI("/portfolios", { populate: "*" }),
    fetchAPI("/reviews", { populate: "*" }),
  ]);

  return {
    props: {
      projects: projectsRes.data,
      portfolios: portfoliosRes.data,
      reviews: reviewsRes.data,
    },
    revalidate: 10,
  };
}

export default Home;
