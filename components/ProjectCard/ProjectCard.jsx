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
  return (
    <Link href={url}>
      <article className={styles.projectCard}>
        <Image
          src={image}
          alt={title}
          fill
          placeholder={"blur"}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <Box className={styles.info}>
          <Box className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <Box className={styles.location}>
              <Box className={styles.icon}>
                <Image
                  src={"/images/icons/locationWhite.svg"}
                  width={15}
                  height={15}
                  priority
                  alt={"location icon"}
                />
              </Box>
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
      </article>
    </Link>
  );
};

export default ProjectCard;
