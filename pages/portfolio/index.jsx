import { MainLayout } from '../../layouts/MainLayout';
import { useMediaQuery, Box } from '@mui/material';
import ProjectsGrid from '../../components/ProjectsGrid/ProjectsGrid';
import { fetchAPI } from '../../lib/api';

const Portfolio = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const matchesLg = useMediaQuery('(min-width: 1200px)');

  return (
    <MainLayout metaTitle={'MITS'} metaDescription={'MITS'}>
      <ProjectsGrid projects={projects} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const [projectsRes, portfolioRes] = await Promise.all([
    fetchAPI('/projects', { populate: '*' }),
    fetchAPI('/portfolio', { populate: '*' }),
  ]);

  return {
    props: {
      projects: projectsRes.data,
      portfolio: portfolioRes.data,
    },
    revalidate: 10,
  };
}

export default Portfolio;
