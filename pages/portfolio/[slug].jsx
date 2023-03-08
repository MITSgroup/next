import { MainLayout } from "../../layouts/MainLayout";

import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import PortfolioHero from "../../components/PortfolioHero/PortfolioHero";
import { fetchAPI } from "../../lib/api";
import PortfolioGallery from "../../components/PortfolioGallery/PortfolioGallery";
import ContactUs from "../../components/ContactUs/ContactUs";

const PortfolioSingle = ({ portfolio, global, social }) => {
  return (
    <MainLayout
      metaTitle={"MITS"}
      metaDescription={"MITS"}
      headerTransparent={true}
      global={global}
      social={social}
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

export async function getStaticPaths({ locales }) {
  const paths = []
  const portfolioRes = await fetchAPI("/portfolios", { fields: ["slug"], locale: "all" });
  console.log('123333333331233333333312333333333123333333331233333333312333333333123333333331233333333312333333333123333333331233333333312333333333')
  console.log(portfolioRes);
  locales.forEach((locale, i) => {
    portfolioRes.data.forEach((post, i) => {
      console.log(post.attributes.slug);
      paths.push({ params: { slug: post.attributes.slug }, locale })
    });
  });
  console.log(paths);
  return { paths, fallback: false }
}

export async function getStaticProps(params) {
  // console.log('123333333331233333333312333333333123333333331233333333312333333333123333333331233333333312333333333123333333331233333333312333333333')
  // console.log(params);
  let currentLocale = params.locale;
  const [portfolioRes, globalRes, socialRes] = await Promise.all([
    fetchAPI("/portfolios", {
      filters: {
        slug: {$eq: params.params.slug},
        locale: {$eq:currentLocale},
      },
      locale: currentLocale,
      populate: "deep",
    }),
    fetchAPI("/global", { locale: currentLocale }),
    fetchAPI("/social", { locale: currentLocale }),
  ]);

  if (params.params.slug != portfolioRes.data[0]?.attributes.slug) {
    return {notFound: true}
  }

  return {
    props: {
      portfolio: portfolioRes.data[0],
      global: globalRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

export default PortfolioSingle;
