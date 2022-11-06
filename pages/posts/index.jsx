import { MainLayout } from "../../layouts/MainLayout";
import { useMediaQuery, Box, Typography, Container } from "@mui/material";
import axios from "axios";
import BlogHero from "../../components/BlogHero/BlogHero";
import PostsGrid from "../../components/PostsGrid/PostsGrid";
import { fetchAPI } from "../../lib/api";

const Posts = ({ posts }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <MainLayout
      metaTitle={"MITS – Journal"}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <BlogHero title={"MITS JOURNAL"} />

      <Container>
        <Box pt={matchesMd ? 12 : 8} pb={matchesMd ? 14 : 8}>
          <PostsGrid posts={posts} />
        </Box>
      </Container>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/posts?sort=createdAt:desc"
  );

  const postsRes = await response.json();

  return {
    props: {
      posts: postsRes.data,
    },
    revalidate: 10,
  };
}

export default Posts;
