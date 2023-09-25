import styles from "./ProjectModelling.module.scss";
import React from "react";
import { Container, Grid, Box, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const numberOfCount = (count, apartmentsLength) =>
  count > apartmentsLength ? apartmentsLength : count;

const ProjectModelling = ({ apartments }) => {
  const router = useRouter();
  let soldLabel;
  if(router.locale === "en") {
    soldLabel = "SOLD OUT"
  } else {
    soldLabel = "ПРОДАНО"
  }
  
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

  console.log('Modeling', slidesCount, apartments.length);
  return (
    <Box className={styles.projectModelling}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={10}>
            <h2 className={styles.title}>
               {router.locale === "en" ? "RETURN ON" : "ПРИБЫЛЬ ОТ"} <br /> {router.locale === "en" ? "INVESTMENT" : "ИНВЕСТИИЦИОННОЙ"} <br />{router.locale === "en" ? "MODELLING" : "ДЕЯТЕЛЬНОСТИ"} 
            </h2>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} position={"relative"}>
          <Grid item xs={10} lg={10}>
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
                        key={apartment.id}
                        className={`${styles.tabItem} ${
                          idx === activeTab ? styles.active : ""
                        }`}
                        tabIndex={idx}
                        onClick={(event) => handleTabClick(event)}
                      >
                        <Box className={apartment.sold == true ? styles.sold : "notsold"}>
                          <p className={styles.name}>{apartment.sold == true ? soldLabel : apartment.apartmentName}</p>
                          <p className={styles.price}>
                            ${apartment.apartmentPrice}
                          </p>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Box>

            <Box className={styles.table}>
              {apartments[activeTab] &&
                apartments[activeTab].rows.map((item) => (
                  <Box key={item.id} className={styles.row}>
                    <p>{item.name}</p>
                    <p>{item.firstValue}</p>
                    <p>{item.secondValue}</p>
                    <p>{item.thirdValue}</p>
                  </Box>
                ))}
            </Box>
          </Grid>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectModelling;
