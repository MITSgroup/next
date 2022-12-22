import styles from "./PortfolioGallery.module.scss";
import React from "react";
import PhotoAlbum from "react-photo-album";
import GalleryImage from "./GalleryImage";
import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";

const PortfolioGallery = ({ images }) => {
  const photos = (images) => {
    const newArr = [];

    images.map((image) => {
      newArr.push({
        src: image.attributes.url,
        size: "100vw",
        width: image.attributes.width,
        height: image.attributes.height,
        title: image.attributes.caption,
        alt: image.attributes.caption,
      });
    });

    return newArr;
  };

  return (
    <Box className={styles.portfolioGallery}>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} lg={10}>
            {/*<ul className={styles.grid}>*/}
            {/*  {images &&*/}
            {/*    images.map((item) => (*/}
            {/*      <li key={item.id} className={styles.gridItem}>*/}
            {/*        <Image*/}
            {/*          src={item.attributes.url}*/}
            {/*          fill*/}
            {/*          blurDataURL={placeholder}*/}
            {/*          placeholder={"blur"}*/}
            {/*          sizes="100vw"*/}
            {/*          style={{*/}
            {/*            objectFit: "cover",*/}
            {/*          }}*/}
            {/*          alt={*/}
            {/*            item.attributes.name*/}
            {/*              ? item.attributes.name*/}
            {/*              : "Mits - apartment"*/}
            {/*          }*/}
            {/*        />*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            <PhotoAlbum
              layout="columns"
              photos={photos(images)}
              columns={2}
              renderPhoto={GalleryImage}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioGallery;
