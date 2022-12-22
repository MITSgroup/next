import { MainLayout } from "../../layouts/MainLayout";
import styles from "../../styles/post.module.scss";
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
    new Date(Date.parse(date)).toLocaleString("en-US", { month: "long" });
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
        "https://mits-cbd3l.ondigitalocean.app/api/posts?sort=createdAt:desc"
      );
      const data = await response.json();
      const slugs = getSlugs(data.data);
      const slug = getPrevNextSlugs(slugs, post.attributes.slug);
      setPrevSlug(slugs[slug - 1]);
      setNextSlug(slugs[slug + 1]);
    };

    fetchData().catch(console.error);
  }, [router.asPath]);

  console.log(post);

  return (
    <MainLayout
      metaTitle={`MITS – ${post.attributes.title}`}
      metaDescription={"MITS"}
      headerTransparent={true}
    >
      <BlogHero
        title={post.attributes.title}
        imagePath={post.attributes.image.data.attributes.url}
      />
      <Container>
        <Box sx={{ paddingTop: 7.5, paddingBottom: 4 }}>
          <Grid container>
            <Grid item xs={12} md={7} lg={5}>
              {" "}
              <p className={styles.date}>
                {month(post.attributes.createdAt)},{" "}
                {day(post.attributes.createdAt)}{" "}
                {year(post.attributes.createdAt)}
              </p>
              <p className={styles.description}>
                MITS. studio facilitates collaborative processes between
                clients, builders and suppliers, with the aim of provide the
                best solutions, based on aesthetics and creativity.
              </p>
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
    revalidate: 120,
  };
}

export default Post;
