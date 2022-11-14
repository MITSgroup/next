import styles from "./ServicesAccordion.module.scss";
import React from "react";
import arrowSvg from "./img/arrow.svg";
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const ServicesAccordion = () => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  const materialStyles = {
    head: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };

  return (
    <Box className={styles.servicesAccordion}>
      <Box className={styles.item}>
        <Box sx={materialStyles.head}>
          <Box maxWidth={300}>
            <Typography component={"h3"} className={styles.title}>
              DEVELOPMENT
            </Typography>
            <Typography className={styles.text}>
              We are experts in developing villas, resorts, restaurants and
              apartments{" "}
            </Typography>
          </Box>

          <IconButton>
            <Image src={arrowSvg} width={20} height={13} />
          </IconButton>
        </Box>
      </Box>
      <Box className={styles.item}>
        <Box sx={materialStyles.head}>
          <Box maxWidth={300}>
            <Typography component={"h3"} className={styles.title}>
              MANAGEMENT
            </Typography>
            <Typography className={styles.text}>
              We offer a complete range of property management services
            </Typography>
          </Box>

          <IconButton>
            <Image src={arrowSvg} width={20} height={13} />
          </IconButton>
        </Box>
      </Box>
      <Box className={styles.item}>
        <Box sx={materialStyles.head}>
          <Box maxWidth={300}>
            <Typography component={"h3"} className={styles.title}>
              MARKETING
            </Typography>
            <Typography className={styles.text}>
              We implement for you the full range of marketing tasks for a
              successful sale or operation for your real-estate business
            </Typography>
          </Box>

          <IconButton>
            <Image src={arrowSvg} width={20} height={13} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesAccordion;
