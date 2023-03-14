import "../styles/globals.scss";
import React, { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { Inter } from "@next/font/google";
import TagManager from "react-gtm-module";
import localFont from "@next/font/local";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
const Metropolis = localFont({ src: "fonts/Metropolis-Bold.woff2" });
const myFont = localFont({ src: 'fonts/Geometria.woff' })

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TS5WLMM" });
  }, []);

let metropolisFont = Metropolis.style.fontFamily;
let interFont = inter.style.fontFamily;
let geometriaFont = myFont.style.fontFamily + ",'Helvetica',  'sans-serif'";
let CurrentFont;
let CurrentFont2;
const router = useRouter();
console.log('0000000000', router.locale);
let defFont = '"__Metropolis_e5531d", "__Metropolis_Fallback_e5531d"';
if (router.locale == "en") {
  console.log('current en');
  CurrentFont = metropolisFont;
  CurrentFont2 = interFont;
} else {
  console.log('current ru');
  CurrentFont = geometriaFont;
  CurrentFont2 = geometriaFont;
  defFont = geometriaFont;
}



  return (
    <>
      <style jsx global>{`
       html {
          font-family: ${CurrentFont};
          font-family: ${CurrentFont2};
        }
       :root {
        --myfont: ${defFont};
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
