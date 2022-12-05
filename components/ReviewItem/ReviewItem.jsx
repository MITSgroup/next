import styles from "./ReviewItem.module.scss";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const ReviewItem = ({ imgUrl, authorName, authorText }) => {
  return (
    <article className={styles.reviewItem}>
      <Grid container justifyContent={"end"} alignItems={"center"}>
        <Grid item xs={12} md={4} lg={2}>
          {" "}
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
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Box className={styles.content}>
            {" "}
            <p className={styles.text}>{authorText}</p>
            <p className={styles.author}>{authorName}</p>
          </Box>
        </Grid>
      </Grid>
    </article>
  );
};

export default ReviewItem;
