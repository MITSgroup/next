import { MainLayout } from "../../layouts/MainLayout";
import { useRouter } from "next/router";

import { useMediaQuery, Box, Grid } from "@mui/material";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ProjectLocation from "../../components/ProjectLocation/ProjectLocation";
import Cta from "../../components/Cta/Cta";
import ProjectAbout from "../../components/ProjectAbout/ProjectAbout";
import ProjectSpecs from "../../components/ProjectSpecs/ProjectSpecs";
import Reviews from "../../components/Reviews/Reviews";
import ProjectAdvantages from "../../components/ProjectAdvantages/ProjectAdvantages";
import ProjectModelling from "../../components/ProjectModelling/ProjectModelling";
import { fetchAPI } from "../../lib/api";
import ProjectApartments from "../../components/ProjectApartments/ProjectApartments";
import BlogHero from "../../components/BlogHero/BlogHero";

const Post = ({ post }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  console.log(post);

  return (
    <MainLayout
      metaTitle={`MITS – ${post.attributes.title}`}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <BlogHero title={post.attributes.title} />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const postsRes = await fetchAPI("/posts", { fields: ["slug"] });

  return {
    paths: postsRes.data.map((page) => ({
      params: {
        slug: page.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsRes = await fetchAPI("/posts", {
    filters: {
      slug: params.slug,
    },
    populate: "deep",
  });

  return {
    props: {
      post: postsRes.data[0],
    },
    revalidate: 10,
  };
}

export default Post;
