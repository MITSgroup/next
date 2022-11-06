import Image from 'next/image';
import { MainLayout } from '../layouts/MainLayout';
import { Container } from '@mui/material';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';
import Reviews from '../components/Reviews/Reviews';
import Cta from '../components/Cta/Cta';
import Services from '../components/Services/Services';
import ContactUs from '../components/ContactUs/ContactUs';
import { fetchAPI } from '../lib/api';

const Home = ({ projects, portfolios }) => {
  return (
    <MainLayout metaTitle={'MITS'} metaDescription={'MITS'} headerTransparent={false}>
      <ProjectsGrid projects={projects} portfolio={portfolios} />
      <Reviews />
      <Cta />
      <Services />
      <ContactUs />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const [projectsRes, portfoliosRes] = await Promise.all([
    fetchAPI('/projects', { populate: '*' }),
    fetchAPI('/portfolios', { populate: '*' }),
  ]);

  return {
    props: {
      projects: projectsRes.data,
      portfolios: portfoliosRes.data,
    },
    revalidate: 10,
  };
}

export default Home;
