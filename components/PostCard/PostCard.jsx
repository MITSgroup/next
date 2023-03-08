import styles from "./PostCard.module.scss";
import React from "react";

import { useMediaQuery, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

const PostCard = ({ url, title, date }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const year = (date) => new Date(Date.parse(date)).getFullYear();
  const month = (date) =>
    new Date(Date.parse(date)).toLocaleString("en-US", { month: "long" });
  const day = (date) => new Date(Date.parse(date)).getDate();

  return (
    <Link href={`posts/${url}`}>
      <article className={styles.postCard}>
        <Grid container alignItems={"center"} spacing={3}>
          <Grid item xs={12} md={2} lg={3}>
            <p className={styles.date}>
              {month(date)}, {day(date)} <br /> {year(date)}
            </p>
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <h3 className={styles.title}>{title}</h3>
          </Grid>
          <Grid item xs={12} md={2} lg={5} textAlign={matchesMd ? "right" : ""}>
            <span className={styles.more}>{router.locale === "en" ? "FIND OUT MORE" : "УЗНАТЬ БОЛЬШЕ"} &gt;</span>
          </Grid>
        </Grid>
      </article>
    </Link>
  );
};

export default PostCard;
