import styles from "./ProjectCard.module.scss";
import React from "react";

import {
  Container,
  IconButton,
  useMediaQuery,
  Box,
  Button,
} from "@mui/material";
import Image from "next/image";
import MainNav from "../Nav/MainNav";
import Link from "next/link";

const ProjectCard = ({
  url,
  image,
  title,
  locationName,
  locationUrl,
  description,
}) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  return (
    <Link href={url}>
      <a>
        <article className={styles.projectCard}>
          <Image src={image} layout={"fill"} />
          <Box className={styles.info}>
            <Box className={styles.content}>
              <h3 className={styles.title}>{title}</h3>
              <Box className={styles.location}>
                <Box className={styles.icon}>
                  <Image
                    src={"/images/icons/locationWhite.svg"}
                    width={15}
                    height={15}
                    alt={"location icon"}
                  />
                </Box>
                <span>{locationName}</span>
              </Box>
              <p className={styles.description}>{description}</p>
              <span className={styles.link}> find out more &#x3e;</span>
            </Box>

            <Box className={styles.label}>
              <span>
                ONLY 5 <br /> TOWNHOUSES <br /> LEFT
              </span>
            </Box>
          </Box>
        </article>
      </a>
    </Link>
  );
};

export default ProjectCard;
