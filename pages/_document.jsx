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
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            counter = 92417784
  token = '8622:7e6597c4bf47530d4d38564ecd2d2a61'

  console.log('start')

  ym(counter, 'getClientID', function(clientID) {

  console.log('counter loaded')
     document.querySelectorAll("#main button[type='submit']").forEach(function(button){

      console.log('main button')

     button.addEventListener("click", function() {

          console.log('button main click')

            form = button.closest('form')

            console.log(form)

            data = new FormData()
            data.append('metrika_client_id', clientID)
            data.append('token', token)
            data.append('name', form.querySelector('#name').value)
            data.append('email', form.querySelector('#email').value)
            data.append('phone', '')
            data.append('comment', form.querySelector('#message').value)
            data.append('url', document.location.href)

            xhr = new XMLHttpRequest()
            xhr.open('POST', '//crm.wbooster.ru/index.php?controller=seolead')
            xhr.onload = function(e){
                ym(counter, 'params', {wbooster: xhr.response});
            }
            console.log(xhr)
            xhr.send(data)
     })
     })
     document.querySelectorAll("#projectForm button[type='submit']").forEach(function(button){

      console.log('project button')

      button.addEventListener("click", function() {

          console.log('button click')


            form = button.closest('form')

            console.log(form)

            data = new FormData()
            data.append('metrika_client_id', clientID)
            data.append('token', token)
            data.append('name', form.querySelector('#name').value)
            data.append('email', form.querySelector('#email').value)
            data.append('phone', form.querySelector('#phone').value)
            data.append('url', document.location.href)

            xhr = new XMLHttpRequest()
            xhr.open('POST', '//crm.wbooster.ru/index.php?controller=seolead')
            xhr.onload = function(e){
                ym(counter, 'params', {wbooster: xhr.response});
            }
            console.log(xhr)
            xhr.send(data)
      })
      })
})`,}}
            />
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
