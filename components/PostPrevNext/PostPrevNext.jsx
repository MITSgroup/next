import styles from "./PostPrevNext.module.scss";
import React from "react";
import logoSvg from "./img/logo.svg";

import { Container, Grid, Box, Button } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

const PostPrevNext = ({ prevPostSlug, nextPostSlug }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Box className={styles.postPrevNext}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box onClick={() => handleClick} className={styles.logo}>
              <Image src={logoSvg} width={120} height={180} alt={"logo"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <p className={styles.text}>
            MITS. studio facilitates collaborative processes between clients, 
            builders and suppliers, with the aim of provide the best solutions, 
            based on aesthetics and creativity.
              <br /> <br />
              Be the first to know when newest articles go live!
            </p>
            <Box className={styles.buttons}>
              <Button
                disabled={prevPostSlug === undefined}
                variant={"text"}
                sx={{ paddingX: 3 }}
              >
                <Link href={`https://www.mits.group/posts/${prevPostSlug}`}>
                  PREVIOUS ARTICLE
                </Link>
              </Button>

              <Button
                variant={"text"}
                onClick={() => handleClick}
                sx={{ paddingX: 3 }}
                disabled={nextPostSlug === undefined}
              >
                <Link href={`https://www.mits.group/posts/${nextPostSlug}`}>
                  NEXT ARTICLE
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PostPrevNext;
