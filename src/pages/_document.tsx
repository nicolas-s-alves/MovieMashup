import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class AppDocument extends Document<{
  browserTimingHeader: string;
}> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: this.props.browserTimingHeader }}
          />
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
