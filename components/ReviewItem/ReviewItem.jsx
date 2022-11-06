import styles from "./ReviewItem.module.scss";
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";

const ReviewItem = ({ imgUrl, authorName, authorText }) => {
  return (
    <article className={styles.reviewItem}>
      <Box className={styles.imgBox}>
        {" "}
        <Image src={imgUrl} width={150} height={150} />
      </Box>

      <Box>
        <p className={styles.text}>{authorText}</p>
        <p className={styles.author}>{authorName}</p>
      </Box>
    </article>
  );
};

export default ReviewItem;
