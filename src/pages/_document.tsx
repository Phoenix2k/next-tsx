import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class NextDocument extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
