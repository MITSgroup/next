import styles from "./Footer.module.scss";
import logoSvg from "./img/logo.svg";

import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import FooterNav from "../Nav/FooterNav";

const Footer = ({ global, social }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} lg={2}>
              <Box>
                <Image
                  src={logoSvg}
                  width={matchesMd ? 140 : 100}
                  height={matchesMd ? 140 : 100}
                  alt={"logo"}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
              <FooterNav social={social} />
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: matchesMd ? "column" : "row",
                  gap: 3,
                }}
              >
                <ul className={styles.contacts}>
                  {global?.attributes.address && (
                    <li>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://goo.gl/maps/wKZqCnDqFgZgjCap8"
                      >
                        {global.attributes.address}
                      </a>
                    </li>
                  )}

                  {global?.attributes.phoneLink && (
                    <li>
                      <a
                        target={"_blank"}
                        href={global.attributes.phoneLink}
                        rel="noreferrer"
                      >
                        {global.attributes.phone}
                      </a>
                    </li>
                  )}

                  {global?.attributes.email && (
                    <li>
                      <a
                        target={"_blank"}
                        href={`mailto:${global.attributes.email}`}
                        rel="noreferrer"
                      >
                        {global.attributes.email}
                      </a>
                    </li>
                  )}
                </ul>
                {/*<ul className={styles.social}>*/}
                {/*  <li>*/}
                {/*    <a href="#">FACEBOOK</a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="#">LINKEDIN</a>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </Box>
            </Grid>

            <Grid item xs={12} lg={3}>
              <p className={styles.copy}>MITS Development © 2022</p>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
