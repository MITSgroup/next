import styles from "./PostsGrid.module.scss";
import React from "react";

import { Box } from "@mui/material";

import PostCard from "../PostCard/PostCard";

const PostsGrid = ({ posts }) => {
  return (
    <>
      <h2 className={styles.title}>
        LATEST <br /> ARTICLES
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
