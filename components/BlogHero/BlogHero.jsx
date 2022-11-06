import styles from './BlogHero.module.scss';
import React from 'react';

import { Container, Grid, useMediaQuery, Box, Button } from '@mui/material';
import Image from 'next/image';
import MainNav from '../Nav/MainNav';
import Link from 'next/link';
import MainForm from '../Forms/MainForm';

const BlogHero = ({ title, image }) => {
  const matchesMd = useMediaQuery('(min-width: 768px)');
  const matchesLg = useMediaQuery('(min-width: 1200px)');

  return (
    <Box
      className={styles.pageHero}
      sx={{
        backgroundImage: image
          ? `url(http://localhost:1337${image})`
          : 'url(/images/hero/blog.jpg)',
      }}>
      <Box className={styles.content}>
        <Container>
          <Grid container justifyContent={'center'}>
            <Grid item xs={12} md={10} lg={8}>
              <h1 className={styles.title}>{title}</h1>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogHero;
