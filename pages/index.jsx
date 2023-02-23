import { MainLayout } from "../layouts/MainLayout";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import Reviews from "../components/Reviews/Reviews";
import Cta from "../components/Cta/Cta";
import Services from "../components/Services/Services";
import ContactUs from "../components/ContactUs/ContactUs";
import { fetchAPI } from "../lib/api";
import React from "react";

const Home = ({ projects, portfolios, reviews, services, global, social }) => {
  return (

    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={false}
      global={global}
      social={social}
    >
      <ProjectsGrid projects={projects} portfolio={portfolios} />
      <Reviews reviews={reviews} />
      <Cta />
      <Services services={services} />
      <ContactUs reachGoal={"Отправка формы footer"} />
    </MainLayout>
  );
};

export async function getStaticProps( locales ) {
  let currentLocale = locales.locale;
  const [
    projectsRes,
    portfoliosRes,
    reviewsRes,
    servicesRes,
    globalRes,
    socialRes,
  ] = await Promise.all([
    fetchAPI("/projects", { locale: {$eq:currentLocale},populate: "*" }),
    fetchAPI("/portfolios", { locale: currentLocale, populate: "*" }),
    fetchAPI("/reviews", { locale: currentLocale, populate: "*" }),
    fetchAPI("/services", { locale: currentLocale, populate: "*" }),
    fetchAPI("/global", {locale: currentLocale}),
    fetchAPI("/social", {locale: currentLocale}),
  ]);

  return {
    props: {
      projects: projectsRes.data,
      portfolios: portfoliosRes.data,
      reviews: reviewsRes.data,
      services: servicesRes.data,
      global: globalRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

export default Home;
