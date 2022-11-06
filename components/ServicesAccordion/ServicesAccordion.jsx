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
  const [checked, setChecked] = React.useState("");

  const materialStyles = {
    head: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };

  return (
    <Box className={styles.servicesAccordion}>
      <Collapse
        in={checked === "development"}
        className={styles.item}
        collapsedSize={150}
        onClick={() => setChecked("development")}
      >
        <Box sx={materialStyles.head} mb={10}>
          <Box maxWidth={300}>
            <Typography component={"h3"} className={styles.title}>
              DEVELOPMENT
            </Typography>
            <Typography className={styles.text}>
              We are experts in developing villas, resorts, restaurants and
              apartments{" "}
            </Typography>
          </Box>

          <IconButton className={checked ? styles.iconRotate : ""}>
            <Image src={arrowSvg} width={20} height={13} />
          </IconButton>
        </Box>
        <Box className={styles.content}>
          <p>
            MITS. studio facilitates collaborative processes between clients,
            builders and suppliers, with the aim of provide the best solutions,
            based on aesthetics and creativity.
          </p>
        </Box>
      </Collapse>
      <Collapse
        in={checked === "management"}
        className={styles.item}
        collapsedSize={150}
        onClick={() => setChecked("management")}
      >
        <Box sx={materialStyles.head} mb={10}>
          <Box maxWidth={300}>
            <Typography component={"h3"} className={styles.title}>
              MANAGEMENT
            </Typography>
            <Typography className={styles.text}>
              We offer a complete range of property management services
            </Typography>
          </Box>

          <IconButton className={checked ? styles.iconRotate : ""}>
            <Image src={arrowSvg} width={20} height={13} />
          </IconButton>
        </Box>
        <Box className={styles.content}>
          <p>
            MITS. studio facilitates collaborative processes between clients,
            builders and suppliers, with the aim of provide the best solutions,
            based on aesthetics and creativity.
          </p>
        </Box>
      </Collapse>
      <Collapse
        in={checked === "marketing"}
        className={styles.item}
        collapsedSize={150}
        onClick={() => setChecked("marketing")}
      >
        <Box sx={materialStyles.head} mb={10}>
          <Box maxWidth={300}>
            <Typography component={"h3"} className={styles.title}>
              MARKETING
            </Typography>
            <Typography className={styles.text}>
              We implement for you the full range of marketing tasks for a
              successful sale or operation for your real-estate business
            </Typography>
          </Box>

          <IconButton className={checked ? styles.iconRotate : ""}>
            <Image src={arrowSvg} width={20} height={13} />
          </IconButton>
        </Box>
        <Box className={styles.content}>
          <p>
            MITS. studio facilitates collaborative processes between clients,
            builders and suppliers, with the aim of provide the best solutions,
            based on aesthetics and creativity.
          </p>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ServicesAccordion;
