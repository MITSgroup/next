import styles from "./ProjectCard.module.scss";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  url,
  image,
  title,
  locationName,
  description,
  label,
  type,
  left,
}) => {
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49vzVik3b3///P3/pPAZPSzVxBgY9FW4NBQYAxrMK7Iw5NV8AAAAASUVORK5CYII=";
  return (
    <Link href={url}>
      <article className={styles.projectCard}>
        <Image
          src={image}
          alt={title}
          fill
          blurDataURL={placeholder}
          placeholder={"blur"}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: "cover",
          }}
        />
        <Box className={styles.info}>
          <Box className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <Box className={styles.location}>
              {/*<Box className={styles.icon}>*/}
              {/*  <Image*/}
              {/*    src={"/images/icons/locationWhite.svg"}*/}
              {/*    width={15}*/}
              {/*    height={15}*/}
              {/*    priority*/}
              {/*    alt={"location icon"}*/}
              {/*  />*/}
              {/*</Box>*/}
              <span>{locationName}</span>
            </Box>
            <p className={styles.description}>{description}</p>
            <span className={styles.link}> find out more &#x3e;</span>
          </Box>
          {label && (
            <Box className={styles.label}>
              <span>
                ONLY {left}
                <br /> {type} <br /> LEFT
              </span>
            </Box>
          )}
        </Box>

        {label && (
          <Box className={`${styles.label} ${styles.onSaleLabel}`}>
            <span>ON SALE</span>
          </Box>
        )}
      </article>
    </Link>
  );
};

export default ProjectCard;
