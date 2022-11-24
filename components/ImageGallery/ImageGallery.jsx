import styles from "./ImageGallery.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, IconButton } from "@mui/material";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const ImageGallery = ({ images }) => {
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);
  const matchesMd = useMediaQuery("(min-width: 768px)");

  return (
    <Box className={styles.imageGallery}>
      <Container sx={{ position: "relative" }}>
        <Grid container justifyContent={"center"} position={"relative"}>
          <Grid item xs={10}>
            <Swiper
              navigation={{
                prevEl: arrowPrev.current,
                nextEl: arrowNext.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = arrowPrev.current;
                swiper.params.navigation.nextEl = arrowNext.current;
              }}
              slidesPerView={matchesMd ? 2 : 1}
              modules={[Navigation]}
              spaceBetween={20}
              loop={true}
              className={styles.gallerySwiper}
            >
              {images &&
                images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <Box
                      sx={{ width: "100%", height: 400, position: "relative" }}
                    >
                      <Image
                        src={image.attributes.url}
                        fill
                        placeholder={"blur"}
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                        }}
                        alt={
                          image.attributes.caption
                            ? image.attributes.caption
                            : "Mits Apartment"
                        }
                      />
                    </Box>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ImageGallery;
