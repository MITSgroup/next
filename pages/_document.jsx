import Document, {Html, Head, NextScript, Main} from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
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
            <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter = new Ya.Metrika({ id:92417784, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");`
            }} />
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
