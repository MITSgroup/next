import { MainLayout } from "../../layouts/MainLayout";
import { useMediaQuery, Box, Grid, Typography, Container } from "@mui/material";
import { fetchAPI } from "../../lib/api";
import BlogHero from "../../components/BlogHero/BlogHero";
import React from "react";
import PostIntro from "../../components/PostIntro/PostIntro";
import PostContent from "../../components/PostContent/PostContent";
import PostPrevNext from "../../components/PostPrevNext/PostPrevNext";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const [prevSlug, setPrevSlug] = React.useState();
  const [nextSlug, setNextSlug] = React.useState();

  const year = (date) => new Date(Date.parse(date)).getFullYear();
  const month = (date) =>
    new Date(Date.parse(date)).toLocaleString("default", { month: "long" });
  const day = (date) => new Date(Date.parse(date)).getDate();

  const getSlugs = (data) => {
    const slugs = [];

    data.map((obj) => {
      slugs.push(obj.attributes.slug);
    });

    return slugs;
  };

  const getPrevNextSlugs = (allSlugs, currentSlug) =>
    allSlugs.indexOf(currentSlug);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:1337/api/posts?sort=createdAt:desc"
      );
      const data = await response.json();
      const slugs = getSlugs(data.data);
      const slug = getPrevNextSlugs(slugs, post.attributes.slug);
      setPrevSlug(slugs[slug - 1]);
      setNextSlug(slugs[slug + 1]);
    };

    console.log("render");
    fetchData().catch(console.error);
  }, [router.asPath]);

  const styles = {
    date: {
      fontsize: 12,
      fontFamily: `"Metropolis", Helvetica, sans-serif`,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    description: {
      fontsize: matchesMd ? 24 : 18,
      lineHeight: "130%",
    },
  };

  return (
    <MainLayout
      metaTitle={`MITS – ${post.attributes.title}`}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <BlogHero title={post.attributes.title} />
      <Container>
        <Box sx={{ paddingTop: 7.5, paddingBottom: 15 }}>
          <Grid container>
            <Grid item xs={12} md={7} lg={5}>
              {" "}
              <Typography sx={styles.date} mb={6}>
                {month(post.attributes.createdAt)},{" "}
                {day(post.attributes.createdAt)}{" "}
                {year(post.attributes.createdAt)}
              </Typography>
              <Typography sx={styles.description}>
                MITS. studio facilitates collaborative processes between
                clients, builders and suppliers, with the aim of provide the
                best solutions, based on aesthetics and creativity.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {post.attributes.intro && (
        <PostIntro
          title={post.attributes?.intro.title}
          textFirstColumn={post.attributes?.intro.textFirstColumn}
          textSecondColumn={post.attributes?.intro.textSecondColumn}
        />
      )}

      {post.attributes.content && (
        <PostContent content={post.attributes.content} />
      )}

      <PostPrevNext prevPostSlug={prevSlug} nextPostSlug={nextSlug} />
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
  console.log(postsRes);
  return {
    props: {
      post: postsRes.data[0],
    },
    revalidate: 10,
  };
}

export default Post;
