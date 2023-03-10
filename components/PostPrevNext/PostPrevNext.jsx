import styles from "./PostPrevNext.module.scss";
import React from "react";
import logoSvg from "./img/logo.svg";
import { useRouter } from "next/router";
import { Container, Grid, Box, Button } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

const PostPrevNext = ({ prevPostSlug, nextPostSlug }) => {
  const router = useRouter();
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
            {router.locale === "en" ? "MITS. studio facilitates collaborative processes between clients, builders and suppliers, with the aim of provide the best solutions, based on aesthetics and creativity." : "MITS. Studio способствует взаимодействию клиентов, строителей и поставщиков с целью предоставления лучших решений, основанных на эстетике и творчестве."}
              <br /> <br />
              {router.locale === "en" ? "Be the first to know when newest articles go live!" : "Узнайте первыми о выходе новых статей!"}
            </p>
            <Box className={styles.buttons}>
              <Button
                disabled={prevPostSlug === undefined}
                variant={"text"}
                sx={{ paddingX: 3 }}
              >
                <Link href={`https://www.mits.group/posts/${prevPostSlug}`}>
                  {router.locale === "en" ? "PREVIOUS ARTICLE" : "ПРЕДЫДУЩАЯ СТАТЬЯ"}
                </Link>
              </Button>

              <Button
                variant={"text"}
                onClick={() => handleClick}
                sx={{ paddingX: 3 }}
                disabled={nextPostSlug === undefined}
              >
                <Link href={`https://www.mits.group/posts/${nextPostSlug}`}>
                  {router.locale === "en" ? "NEXT ARTICLE" : "СЛЕДУЮЩАЯ СТАТЬЯ"}
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
