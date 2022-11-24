import styles from "./Header.module.scss";
import React from "react";
import logoSvg from "./img/logo.svg";
import logoWhiteSvg from "./img/logoWhite.svg";
import DragHandleIcon from "@mui/icons-material/DragHandle";
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

const Header = ({ transparent, openMenu }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");

  return (
    <header
      className={`${styles.header} ${transparent && styles.headerTransparent}`}
    >
      <Container>
        <Box className={styles.wrapper}>
          <Box className={styles.logo}>
            <Link href="/">
              {transparent ? (
                <Image
                  src={logoWhiteSvg}
                  width={matchesLg ? 80 : 80}
                  height={matchesLg ? 112 : 80}
                  alt={"logo"}
                />
              ) : (
                <Image
                  src={logoSvg}
                  width={matchesLg ? 80 : 80}
                  height={matchesLg ? 112 : 80}
                  alt={"logo"}
                />
              )}
            </Link>
          </Box>

          {matchesLg && <MainNav transparent={transparent} />}

          <Box sx={{ marginLeft: "auto" }}>
            {matchesLg && (
              <Button
                variant={"outlined"}
                style={{
                  color: transparent ? "#fff" : "primary.main",
                  borderColor: transparent ? "#fff" : "primary.main",
                }}
              >
                CONTACT US
              </Button>
            )}
          </Box>
          {!matchesLg && (
            <IconButton onClick={openMenu}>
              {" "}
              <DragHandleIcon
                sx={{
                  fontSize: 45,
                  color: transparent ? "white" : "primary.main",
                }}
              />
            </IconButton>
          )}
        </Box>
      </Container>
    </header>
  );
};

export default Header;
