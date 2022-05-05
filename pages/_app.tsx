import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext/Context";
import Head from "next/head";
import "../styles/globals.css";
import NavFooter from "../components/nav-footer";
import NavHeader from "../components/nav-header";
import { ExplorerProvider } from "../context/ExplorerContext/Context";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>GET Twin - Twins Ticket You Can Get</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Tingkatkan tiket Anda dengan mudah, NFT adalah bentuk teknologi revolusioner yang membuka peluang besar bagi penerbit tiket di seluruh dunia. Ya, juga untukmu."
                />
            </Head>
            <AuthProvider>
                <ExplorerProvider>
                    <div className="px-4 mx-auto max-w-75r wrap:px-0">
                        <Component {...pageProps} />
                    </div>
                </ExplorerProvider>
            </AuthProvider>
        </>
    );
}

export default MyApp;
