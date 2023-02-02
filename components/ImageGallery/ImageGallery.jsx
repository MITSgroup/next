import styles from "./ImageGallery.module.scss";
import React from "react";
import Fancybox from "../Fancybox/Fancybox";

import { Container, Grid, useMediaQuery, Box, IconButton } from "@mui/material";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper";

const ImageGallery = ({ images }) => {
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49vzVik3b3///P3/pPAZPSzVxBgY9FW4NBQYAxrMK7Iw5NV8AAAAASUVORK5CYII=";
  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);
  const matchesMd = useMediaQuery("(min-width: 768px)");

  return (
    <Box className={styles.imageGallery}>
      <Container sx={{ position: "relative" }}>
        <Box className={styles.container}>
          <Fancybox options={{ infinite: false }}>
            <Swiper
              navigation={{
                prevEl: arrowPrev.current,
                nextEl: arrowNext.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = arrowPrev.current;
                swiper.params.navigation.nextEl = arrowNext.current;
              }}
              slidesPerView={"auto"}
              modules={[FreeMode, Navigation]}
              spaceBetween={matchesMd ? 20 : 10}
              freeMode={!matchesMd}
              loop={false}
              className={styles.gallerySwiper}
            >
              {images &&
                images.map((image, idx) => (
                  <SwiperSlide
                    key={image.id}
                    className={styles.slide}
                    data-fancybox="gallery"
                    data-src={image.attributes.url}
                  >
                    <Image
                      src={image.attributes.url}
                      width={image.attributes.width}
                      height={image.attributes.height}
                      blurDataURL={placeholder}
                      placeholder={"blur"}
                      className={styles.image}
                      alt={
                        image.attributes.caption
                          ? image.attributes.caption
                          : "Mits Apartment"
                      }
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
          </Fancybox>
        </Box>
      </Container>
    </Box>
  );
};

export default ImageGallery;
