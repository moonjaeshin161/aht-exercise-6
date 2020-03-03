import Head from 'next/head';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import Cookies from 'js-cookie';


const MyApp = ({ Component, pageProps }) => {
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    return (
        <>
            <Head>
                <title>Testing App</title>
                <meta charSet="utf-8" />
            </Head>
            <AppProvider i18n={enTranslations}>
                <Component {...pageProps} />
            </AppProvider>
        </>
    )
}

export default MyApp;