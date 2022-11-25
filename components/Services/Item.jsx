import styles from "./Services.module.scss";
import React from "react";
import arrowSvg from "./img/arrow.svg";
import {
  Box,
  Collapse,
  Button,
  IconButton,
  useMediaQuery,
  Grid,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ServicesItem = ({ title, description, slug }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const materialStyles = {
    head: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    link: {
      padding: 0,
      borderRadius: 1,
      whiteSpace: "nowrap",
    },
  };

  return (
    <Collapse collapsedSize={140} in={isOpen} className={styles.item}>
      <Box onClick={() => setIsOpen(!isOpen)} className={styles.header}>
        <Box maxWidth={280}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </Box>

        <IconButton
          sx={{
            transform: isOpen ? "rotate(180deg)" : "",
            transition: "transform .2s ease-in-out",
          }}
        >
          <Image src={arrowSvg} width={20} height={13} alt={"arrow"} />
        </IconButton>
      </Box>

      <Box className={styles.body}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Box className={styles.links}>
              <Link href={"/projects"}>
                <Button variant={"text"} sx={materialStyles.link}>
                  Projects
                </Button>
              </Link>
            </Box>
          </Grid>

          {!matchesLg && (
            <Grid item xs={12} md={6}>
              <Swiper pagination={true} modules={[Pagination]}>
                <SwiperSlide>
                  <Box className={styles.imageBox}>
                    <Image
                      src={"/images/services/1.jpg"}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                      alt={title}
                    />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className={styles.imageBox}>
                    <Image
                      src={"/images/services/2.jpg"}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                      alt={title}
                    />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className={styles.imageBox}>
                    <Image
                      src={"/images/services/3.jpg"}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                      alt={title}
                    />
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Grid>
          )}

          {matchesLg && (
            <Grid item xs={12} md={6} lg={3}>
              {" "}
              <Box className={styles.imageBox}>
                <Image
                  src={"/images/services/1.jpg"}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt={title}
                />
              </Box>
            </Grid>
          )}
          {matchesLg && (
            <Grid item xs={12} md={6} lg={3}>
              {" "}
              <Box className={styles.imageBox}>
                <Image
                  src={"/images/services/2.jpg"}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt={title}
                />
              </Box>
            </Grid>
          )}
          {matchesLg && (
            <Grid item xs={12} md={6} lg={3}>
              {" "}
              <Box className={styles.imageBox}>
                <Image
                  src={"/images/services/3.jpg"}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt={title}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Collapse>
  );
};

export default ServicesItem;
