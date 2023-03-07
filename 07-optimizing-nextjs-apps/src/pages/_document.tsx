import Document, { Html, Head, Main, NextScript } from "next/document";

// You may need to add _document file if you want to edit html doc or add html tag outside of rendering range of next js
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
