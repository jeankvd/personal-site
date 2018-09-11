/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Head, Main, NextScript } from "next/document";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Catamaran:300,400,500,600,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css"
          />
          <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js">
            {" "}
          </script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/mo-js/0.288.2/mo.js"
            defer="defer"
          />
          <script src="https://rawgit.com/jeankvd/jeankvd.github.io/master/js/app.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
