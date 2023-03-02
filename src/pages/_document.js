import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="pastel" lang="en" className="h-full">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretty-print-json@1.4/dist/css/pretty-print-json.css"
        ></link>
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
