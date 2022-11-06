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
  Icon,
} from "@mui/material";
import Image from "next/image";
import MainNav from "../Nav/MainNav";
import Link from "next/link";

const Header = ({ transparent }) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  return (
    <header
      className={`${styles.header} ${transparent && styles.headerTransparent}`}
    >
      <Container>
        <Box className={styles.wrapper}>
          <Box className={styles.logo}>
            <Link href="/">
              <a>
                {transparent ? (
                  <Image
                    src={logoWhiteSvg}
                    width={matchesLg ? 160 : 80}
                    height={matchesLg ? 160 : 80}
                  />
                ) : (
                  <Image
                    src={logoSvg}
                    width={matchesLg ? 160 : 80}
                    height={matchesLg ? 160 : 80}
                  />
                )}
              </a>
            </Link>
          </Box>

          <MainNav transparent />
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
            <IconButton>
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
