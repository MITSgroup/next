import "../styles/globals.scss";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { Inter } from "@next/font/google";
import TagManager from "react-gtm-module";
import localFont from "@next/font/local";
const inter = Inter({ subsets: ["latin"] });
const Metropolis = localFont({ src: "fonts/Metropolis-Bold.woff2" });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TS5WLMM" });
  }, []);

  return <Component {...pageProps} />;
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${Metropolis.style.fontFamily};
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <NextNProgress
        color="#000"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
