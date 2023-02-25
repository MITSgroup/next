import Document, {Html, Head, NextScript, Main} from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
            {/* Google Tag Manager Script - Google Analytics */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TB5NSM6');
    `,
                }}
            />
            {/* Google Tag Manager Script - Google Analytics */}
            {/* Google Analytics Script */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-WPQXCQ95LV`}
            />
            <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WPQXCQ95LV', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            {/* Google Analytics Script */}
            {/* Yandex Metrika Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(92417784, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:false,
                  trackHash:true
                });
              `,
                }}
            />
            {/* Yandex Metrika Script */}
            <noscript>
                <div><img src="https://mc.yandex.ru/watch/92417784" style={{position: "absolute", left:'-9999px'}} alt="" />
                </div>
            </noscript>
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    );
  }
}
