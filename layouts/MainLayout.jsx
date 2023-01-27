import Head from "next/head";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
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
  global,
  social,
}) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const router = useRouter();
  const path = router.asPath;

  React.useEffect(() => {
    sessionStorage.setItem("test", 1);

    const searchParams = router.asPath.indexOf("?")
      ? router.asPath.split("?").slice(1).join("")
      : null;
    // setCookie("urlParams", searchParams);
    if (searchParams) {
      router.push(path + "?" + searchParams, undefined, { shallow: true });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content="/img/head/meta.jpg" />
      </Head>
      <Header
        transparent={headerTransparent}
        openMenu={() => setMenuIsOpen(true)}
      />

      <div className="main">{children}</div>
      <Footer social={social} global={global} />

      <MobileMenu
        social={social}
        open={menuIsOpen}
        closeMenu={() => setMenuIsOpen(false)}
      />
    </ThemeProvider>
  );
};
