import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext/Context";
import Head from "next/head";
import "../styles/globals.css";
import NavFooter from "../components/nav-footer";
import NavHeader from "../components/nav-header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Get Twin - Twins Ticket You Can Get</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <AuthProvider>
                <div className="px-4 mx-auto max-w-75r wrap:px-0">
                    <NavHeader />
                    <Component {...pageProps} />
                    <NavFooter />
                </div>
            </AuthProvider>
        </>
    );
}

export default MyApp;
