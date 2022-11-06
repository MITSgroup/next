import styles from "./Reviews.module.scss";
import React from "react";
import { Container, Grid } from "@mui/material";
import ReviewItem from "../ReviewItem/ReviewItem";

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <Container>
        <h1 className={styles.title}>WHAT OUR CLIENTS SAY:</h1>
        <ReviewItem
          imgUrl={"/images/reviews/1.jpg"}
          authorName={"Marcela B., customer"}
          authorText={
            "“I’m a picky person when it comes to location as we all know what it feels like to live in a crowded popular area. But when I found out about the solitude that guys created in Vesna it was a true revelation. Hands down the best value for money in Berawa!“"
          }
        />
      </Container>
    </section>
  );
};

export default Reviews;
