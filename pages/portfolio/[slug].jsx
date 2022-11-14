import { MainLayout } from "../../layouts/MainLayout";
import { useRouter } from "next/router";

import { useMediaQuery, Box, Grid } from "@mui/material";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import PortfolioHero from "../../components/PortfolioHero/PortfolioHero";
import { fetchAPI } from "../../lib/api";
import PortfolioGallery from "../../components/PortfolioGallery/PortfolioGallery";
import ContactUs from "../../components/ContactUs/ContactUs";

const PortfolioSingle = ({ portfolio }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const router = useRouter();

  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <PortfolioHero
        name={portfolio.attributes.name}
        description={portfolio.attributes.description}
        image={portfolio.attributes?.thumbnail.data.attributes.url}
      />
      {portfolio.attributes.intro && (
        <ProjectIntro
          title={portfolio.attributes.intro.title}
          locationName={portfolio.attributes.locationName}
          locationUrl={portfolio.attributes.locationUrl}
          textFirstColumn={portfolio.attributes.intro.textFirstColumn}
          textSecondColumn={portfolio.attributes.intro.textSecondColumn}
        />
      )}

      {portfolio.attributes.gallery && (
        <PortfolioGallery images={portfolio.attributes.gallery.data} />
      )}
      <ContactUs />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const portfolioRes = await fetchAPI("/portfolios", { fields: ["slug"] });

  return {
    paths: portfolioRes.data.map((page) => ({
      params: {
        slug: page.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolioRes = await fetchAPI("/portfolios", {
    filters: {
      slug: params.slug,
    },
    populate: "deep",
  });

  return {
    props: {
      portfolio: portfolioRes.data[0],
    },
    revalidate: 1,
  };
}

export default PortfolioSingle;
