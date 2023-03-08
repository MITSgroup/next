import styles from "./PostsGrid.module.scss";
import React from "react";

import { Box } from "@mui/material";
import { useRouter } from "next/router";
import PostCard from "../PostCard/PostCard";

const PostsGrid = ({ posts }) => {
  const router = useRouter();
  return (
    <>
      <h2 className={styles.title}>
        {router.locale === "en" ? "LATEST" : "ПОСЛЕДНИЕ"} <br /> {router.locale === "en" ? "ARTICLES" : "СТАТЬИ"}
      </h2>
      <Box className={styles.postsGrid}>
        {posts &&
          posts.map((post) => (
            <PostCard
              key={post.id}
              url={post.attributes.slug}
              title={post.attributes.title}
              date={post.attributes.createdAt}
            />
          ))}
      </Box>
    </>
  );
};

export default PostsGrid;
