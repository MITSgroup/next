import { MainLayout } from "../../layouts/MainLayout";
import { useMediaQuery, Box, Container } from "@mui/material";

import BlogHero from "../../components/BlogHero/BlogHero";
import PostsGrid from "../../components/PostsGrid/PostsGrid";
import Subscribe from "../../components/Subscribe/Subscribe";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

const Posts = ({ posts, global, social }) => {
  const router = useRouter();
  const matchesMd = useMediaQuery("(min-width: 768px)");

  return (
    <MainLayout
      metaTitle={"MITS – Journal"}
      metaDescription={"MITS"}
      headerTransparent={true}
      global={global}
      social={social}
    >
      <BlogHero title={router.locale === "en" ? "MITS JOURNAL" : "MITS БЛОГ"} imagePath={"/images/hero/blog.jpg"} />

      <Container>
        <Box pt={matchesMd ? 12 : 8} pb={matchesMd ? 14 : 8}>
          <PostsGrid posts={posts} />
        </Box>
      </Container>
      <Subscribe />
    </MainLayout>
  );
};

export async function getStaticProps(locales) {
  let currentLocale = locales.locale;
  const response = await fetch(
    `${process.env.API_URL}/posts?sort=createdAt:desc&locale=` + currentLocale
  );
  const postsRes = await response.json();
  const globalRes = await fetchAPI("/global", {locale: currentLocale});
  const socialRes = await fetchAPI("/social", {locale: currentLocale} );

  return {
    props: {
      posts: postsRes.data,
      global: globalRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

export default Posts;
