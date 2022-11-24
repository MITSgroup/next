import styles from "./ReviewItem.module.scss";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const ReviewItem = ({ imgUrl, authorName, authorText }) => {
  return (
    <article className={styles.reviewItem}>
      <Box className={styles.imgBox}>
        {imgUrl ? (
          <Image
            src={imgUrl}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt={`Review by ${authorName}`}
          />
        ) : (
          <p className={styles.placeholder}>{authorName[0]}</p>
        )}
      </Box>

      <Box>
        <p className={styles.text}>{authorText}</p>
        <p className={styles.author}>{authorName}</p>
      </Box>
    </article>
  );
};

export default ReviewItem;
