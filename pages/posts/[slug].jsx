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

const Post = ({ post, global, social }) => {
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
        "https://admin.mits.group/api/posts?sort=createdAt:desc"
      );
      const data = await response.json();
      const slugs = getSlugs(data.data);
      const slug = getPrevNextSlugs(slugs, post.attributes.slug);
      setPrevSlug(slugs[slug - 1]);
      setNextSlug(slugs[slug + 1]);
    };

    fetchData().catch(console.error);
  }, [router.asPath]);

  return (
    <MainLayout
      metaTitle={`MITS – ${post.attributes.title}`}
      metaDescription={"MITS"}
      headerTransparent={true}
      global={global}
      social={social}
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

export async function getStaticPaths({ locales }) {
  const paths = []
  const postsRes = await fetchAPI("/posts", { fields: ["slug"], locale: "all" });

  locales.forEach((locale, i) => {
    postsRes.data.forEach((post, i) => {
      paths.push({ params: { slug: post.attributes.slug }, locale })
    });
  });

  return { paths, fallback: false }
}

export async function getStaticProps( params ) {
  let currentLocale = params.locale;
  const [postsRes, globalRes, socialRes] = await Promise.all([
    fetchAPI("/posts", {
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

  if (params.params.slug != postsRes.data[0]?.attributes.slug) {
    return {notFound: true}
  }

  return {
    props: {
      post: postsRes.data[0],
      global: globalRes.data,
      social: socialRes.data,
    },
    revalidate: 120,
  };
}

export default Post;
