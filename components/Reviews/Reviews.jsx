import styles from "./Reviews.module.scss";
import React from "react";
import { Container, IconButton, Grid } from "@mui/material";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Reviews = ({ reviews }) => {
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  return (
    <section className={styles.reviews}>
      <Container>
        <h1 className={styles.title}>WHAT OUR CLIENTS SAY:</h1>

        <Swiper
          navigation={{
            prevEl: arrowPrev.current,
            nextEl: arrowNext.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = arrowPrev.current;
            swiper.params.navigation.nextEl = arrowNext.current;
          }}
          modules={[Navigation]}
          className={styles.reviewsSlider}
          loop={true}
        >
          {reviews &&
            reviews.map((obj) => (
              <SwiperSlide key={obj.id}>
                <ReviewItem
                  imgUrl={obj.attributes?.authorImage?.data?.attributes.url}
                  authorName={obj.attributes.authorName}
                  authorText={obj.attributes.authorText}
                />
              </SwiperSlide>
            ))}

          <IconButton className={styles.arrowPrev} ref={arrowPrev}>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_129_20)">
                <path
                  d="M10.5 1.42859L1.5 10L10.5 18.5714"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_129_20">
                  <rect
                    width="20"
                    height="12"
                    fill="white"
                    transform="translate(12) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
          <IconButton className={styles.arrowNext} ref={arrowNext}>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_129_18)">
                <path
                  d="M1.5 18.5714L10.5 9.99998L1.5 1.42856"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_129_18">
                  <rect
                    width="20"
                    height="12"
                    fill="white"
                    transform="translate(0 20) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
        </Swiper>
      </Container>
    </section>
  );
};

export default Reviews;
