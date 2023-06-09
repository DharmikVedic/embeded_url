import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Script id="show-banner" strategy="lazyOnload">
          {`
                  if (localStorage.theme === 'dark') {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
              `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
