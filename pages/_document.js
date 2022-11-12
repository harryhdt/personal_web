import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body className="font-inter">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
