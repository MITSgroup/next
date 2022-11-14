import Head from "next/head";
import React from "react";
import { ThemeProvider } from "@mui/material";

import { theme } from "../theme";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/MobileMenu/MobileMenu";

export const MainLayout = ({
  children,
  metaTitle,
  metaDescription,
  keywords,
  headerTransparent,
}) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content="/img/head/meta.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Metropolis-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Metropolis-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Metropolis-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/fonts/style.css" />
      </Head>
      <Header
        transparent={headerTransparent}
        openMenu={() => setMenuIsOpen(true)}
      />

      <div className="main">{children}</div>
      <Footer />

      <MobileMenu open={menuIsOpen} closeMenu={() => setMenuIsOpen(false)} />
    </ThemeProvider>
  );
};
