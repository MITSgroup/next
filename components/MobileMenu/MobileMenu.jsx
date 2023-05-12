import styles from "./MobileMenu.module.scss";
import React from "react";
import logoSvg from "./img/logo.svg";
import { Dialog, Box, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MainNav from "../Nav/MainNav";
import ContactsItem from "../ContactsItem/ContactsItem";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileMenu = ({ closeMenu, open, social }) => {
  const router = useRouter();

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
          <Image src={logoSvg} width={80} height={80} alt={"logo"} />
          <IconButton onClick={closeMenu}>
            <CloseIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </Box>

        <Box mb={8}>
          <MainNav transparent={false} />
        </Box>

        <Box mb={8} className={styles.linkContactsMB}>
          <Link
            className={styles.linkContactsM}
            href="/ru"
            locale='ru'
          >{router.locale === "en" ? "RU" : "RU"}
          </Link>
          &nbsp;|&nbsp;
          <Link
            className={styles.linkContactsM}
            href="/"
            locale='en'
          >{router.locale === "en" ? "EN" : "EN"}
          </Link>
        </Box>

        <Box className={styles.socials}>
          {social?.attributes.instagramLink && (
            <ContactsItem
              title={"instagram"}
              icon={"instagram"}
              link={social.attributes.instagramLink}
            />
          )}

          {social?.attributes.facebookLink && (
            <ContactsItem
              title={"facebook"}
              icon={"facebook"}
              link={social.attributes.facebookLink}
            />
          )}

          {social?.attributes.linkedinLink && (
            <ContactsItem
              title={"linkedin"}
              icon={"linkedin"}
              link={social.attributes.linkedinLink}
            />
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default MobileMenu;
