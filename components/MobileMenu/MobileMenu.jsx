import styles from "./MobileMenu.module.scss";
import React from "react";
import logoSvg from "./img/logo.svg";
import { Dialog, useMediaQuery, Box, Slide, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const MobileMenu = ({ onClickClose, open, categories, info }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const materialStyles = {
    menu: {
      width: "100%",
      height: "100%",
    },
  };

  return (
    <Dialog
      fullScreen
      open={open}
      sx={materialStyles.menu}
      onClose={onClickClose}
    >
      <Box className={styles.mobileMenu}>
        <Box className={styles.header}>
          <Image src={logoSvg} width={80} height={80} />
          <IconButton onClick={onClickClose}>
            <CloseIcon sx={{ color: "#fff", fontSize: 30 }} />
          </IconButton>
        </Box>
        <Box mb={3}> </Box>
      </Box>
    </Dialog>
  );
};

export default MobileMenu;
