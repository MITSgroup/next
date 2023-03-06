import styles from "./ProjectApartments.module.scss";
import React from "react";

import { Container, Grid, useMediaQuery, Box, IconButton } from "@mui/material";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useRouter } from "next/router";

const numberOfCount = (count, apartmentsLength) =>
  count > apartmentsLength ? apartmentsLength : count;
  
const ProjectApartments = ({ apartments }) => {
  const router = useRouter();
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMklEQVR4nB3BQREAQAgCQKJcDjP4NQQhSEIgYnkz7oLkOyRhu6ok7S5ybCeBpO4GMDMfM6oWVFzQoEYAAAAASUVORK5CYII=";
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const [activeTab, setActiveTab] = React.useState(0);
  const [slidesCount, setSlidesCount] = React.useState(1);

  const arrowPrev = React.useRef(null);
  const arrowNext = React.useRef(null);

  const handleWindowResize = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      setSlidesCount(5);
    } else if (width > 768) {
      setSlidesCount(4);
    } else if (width > 410) {
      setSlidesCount(2);
    } else {
      setSlidesCount(1);
    }
  };
  console.log('Aparts', slidesCount, apartments.length);
  const handleTabClick = (event) => {
    const item = event.currentTarget.tabIndex;
    setActiveTab(item);
  };

  React.useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Box className={styles.projectApartments}>
      <Container>
        <Grid container justifyContent={"center"} position={"relative"}>
          <Grid item xs={12}>
            <Box className={styles.tabs}>
              <Swiper
                navigation={{
                  prevEl: arrowPrev.current,
                  nextEl: arrowNext.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = arrowPrev.current;
                  swiper.params.navigation.nextEl = arrowNext.current;
                }}
                slidesPerView={numberOfCount(slidesCount, apartments.length)}
                modules={[Navigation]}
                className={styles.apartmentsSlider}
                loop={false}
              >
                {apartments &&
                  apartments.map((apartment, idx) => (
                    <SwiperSlide key={apartment.id} className={styles.slide}>
                      <Box
                        className={`${styles.tabItem} ${
                          idx === activeTab ? styles.active : ""
                        }`}
                        tabIndex={idx}
                        onClick={(event) => handleTabClick(event)}
                      >
                        <Box>
                          <p className={styles.price}>${apartment.price}</p>
                          <p className={styles.bedrooms}>
                            FOR A {apartment.bedroomsCount}-BEDROOM UNIT
                          </p>
                          <ul className={styles.list}>
                            {apartment.advantages &&
                              apartment.advantages.map((obj) => (
                                <li key={obj.id}>{obj.item}</li>
                              ))}
                          </ul>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                <IconButton
                  disabled={activeTab === 0}
                  onClick={() => setActiveTab(activeTab - 1)}
                  className={styles.arrowPrev}
                  ref={arrowPrev}
                >
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
                <IconButton
                  disabled={activeTab === apartments.length - 1}
                  onClick={() => setActiveTab(activeTab + 1)}
                  className={styles.arrowNext}
                  ref={arrowNext}
                >
                  <svg
                    width="12"
                    Image="20"
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
            </Box>
          </Grid>

          <Grid item xs={12} md={10}>
            <Box sx={{ paddingY: 8 }}>
              {apartments &&
                apartments.map((apartment, idx) =>
                  idx === activeTab ? (
                    <Box key={apartment.id} className={styles.tabContent}>
                      <Grid
                        container
                        spacing={matchesLg ? 8 : 6}
                        justifyContent={"space-between"}
                      >
                        <Grid item xs={12} md={8} lg={8}>
                          <h4 className={styles.subtitle}>LAYOUT</h4>

                          <Image
                            src={apartment.layout.data?.attributes.url}
                            width={500}
                            height={750}
                            sizes="100vw"
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                            alt={"Apartment"}
                          />
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                          <h4 className={styles.subtitle}>Specs</h4>
                          <ul className={styles.specs}>
                            {apartment.specs &&
                              apartment.specs.map((item, idx) => (
                                <li key={item.id}>
                                  <p className={styles.name}>{item.name}</p>
                                  <p className={styles.value}>{item.value}</p>
                                </li>
                              ))}
                            <li>
                              <p className={styles.name}>Total</p>
                              <p className={styles.value}>
                                {apartment.specsTotal}
                              </p>
                            </li>
                          </ul>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : null
                )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectApartments;
