import styles from "./ProjectHero.module.scss";
import React from "react";

import { useMediaQuery, Box } from "@mui/material";

import ProjectForm from "../Forms/ProjectForm";
import Image from "next/image";

const ProjectHero = ({
  name,
  description,
  type,
  left,
  price,
  specs,
  imageUrl,
}) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49vzVik3b3///P3/pPAZPSzVxBgY9FW4NBQYAxrMK7Iw5NV8AAAAASUVORK5CYII=";

  return (
    <Box className={styles.projectHero}>
      <Box className={styles.backgroundImage}>
        <Image
          alt="Mountains"
          src={imageUrl}
          quality={100}
          fill
          blurDataURL={placeholder}
          placeholder={"blur"}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Box className={styles.content}>
        <Box className={styles.inner}>
          <Box
            sx={{
              paddingTop: matchesLg ? 10 : 4,
              paddingBottom: matchesLg ? 8 : 4,
              paddingLeft: 0,
              paddingRight: matchesMd ? 8 : 0,
            }}
          >
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>{description}</p>

            <Box
              sx={{
                paddingTop: matchesLg ? 8 : 6,
                paddingRight: matchesLg ? 10 : 0,
              }}
            >
              <ProjectForm />
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: matchesMd ? 0 : 4,
              paddingBottom: 4,
            }}
          >
            <Box className={styles.priceBlock}>
              <small>Starting from:</small>
              <p className={styles.price}>${price}</p>
              <ul className={styles.includesList}>
                {specs &&
                  specs.map((item) => <li key={item.id}>{item.item}</li>)}
              </ul>
            </Box>
            <Box className={styles.availability}>
              <p>
                ONLY {left} <br /> {type}S <br />
                LEFT
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectHero;
