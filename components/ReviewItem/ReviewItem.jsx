import styles from "./ReviewItem.module.scss";
import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";

const ReviewItem = ({ imgUrl, authorName, authorText }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  return (
    <article className={styles.reviewItem}>
      <Box className={styles.imgBox}>
        {imgUrl ? (
          <Image
            src={imgUrl}
            fill
            sizes="(max-width: 768px) 50vw,
                      (max-width: 1200px) 33vw,
                      25vw"
            style={{
              objectFit: "cover",
            }}
            alt={`Review by ${authorName}`}
          />
        ) : (
          <p className={styles.placeholder}>{authorName[0]}</p>
        )}
      </Box>

      <Box className={styles.content}>
        {" "}
        <p className={styles.text}>{authorText}</p>
        <p className={styles.author}>{authorName}</p>
      </Box>
    </article>
  );
};

export default ReviewItem;
