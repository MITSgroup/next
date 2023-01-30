import Head from "next/head";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { theme } from "../theme";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { setCookie, getCookie } from "cookies-next";

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
  const { utm_medium, utm_source, utm_term, utm_content, utm_campaign } =
    router.query;
  const cookieUtmMedium = getCookie("utm_medium");
  const cookieUtmSource = getCookie("utm_source");
  const cookieUtmTerm = getCookie("utm_term");
  const cookieUtmContent = getCookie("utm_content");
  const cookieUtmCampaign = getCookie("utm_campaign");

  React.useEffect(() => {
    if (utm_medium || cookieUtmMedium === utm_medium) {
      setCookie("utm_medium", utm_medium);
    }
    if (utm_source || cookieUtmSource === utm_source) {
      setCookie("utm_source", utm_source);
    }
    if (utm_term || cookieUtmTerm === utm_term) {
      setCookie("utm_term", utm_term);
    }
    if (utm_content || cookieUtmContent === utm_content) {
      setCookie("utm_content", utm_content);
    }
    if (utm_campaign || cookieUtmCampaign === utm_source) {
      setCookie("utm_campaign", utm_campaign);
    }
  }, [utm_medium, utm_source, utm_term, utm_content, utm_campaign]);

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
