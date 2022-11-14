import styles from "./MobileMenu.module.scss";
import React from "react";
import logoSvg from "./img/logo.svg";
import { Dialog, useMediaQuery, Box, Slide, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MainNav from "../Nav/MainNav";
import ContactsItem from "../ContactsItem/ContactsItem";

const MobileMenu = ({ closeMenu, open }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const materialStyles = {
    menu: {
      width: "100%",
      height: "100%",
    },
  };

  return (
    <Dialog fullScreen open={open} sx={materialStyles.menu} onClose={closeMenu}>
      <Box className={styles.mobileMenu}>
        <Box className={styles.header}>
          <Image src={logoSvg} width={80} height={80} />
          <IconButton onClick={closeMenu}>
            <CloseIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </Box>

        <Box mb={8}>
          <MainNav transparent={false} />
        </Box>
        <Box className={styles.socials}>
          <ContactsItem title={"instagram"} icon={"instagram"} link={""} />
          <ContactsItem title={"LINKEDIN"} icon={"linkedin"} link={""} />
          <ContactsItem title={"facebook"} icon={"facebook"} link={""} />
        </Box>
      </Box>
    </Dialog>
  );
};

export default MobileMenu;
