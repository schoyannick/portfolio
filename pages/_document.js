/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const styledComponentsSheet = new ServerStyleSheet();
        const materialSheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
            });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {styledComponentsSheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render() {
        return (
            <Html
                lang="en"
            >
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="Yannick Scho - Web developer portfolio" />
                    <link rel="manifest" href="/manifest.json"/>
                    <meta name="theme-color" content="#eff1f5" />
                    <link rel="apple-touch-icon" href="/logo_96x96.png" />
                    <meta name="apple-mobile-web-app-status-bar" content="#eff1f5" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}