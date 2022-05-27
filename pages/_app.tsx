import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { ExplorerProvider } from "../context/ExplorerContext/Context";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>GET Twin - The Twin You Can Get.</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Tingkatkan tiket Kamu dengan mudah, NFT adalah bentuk teknologi revolusioner yang membuka peluang besar bagi penerbit tiket di seluruh dunia. Ya, juga untukmu."
                />
            </Head>
            <ExplorerProvider>
                <div className="px-4 mx-auto max-w-75r wrap:px-0">
                    <Component {...pageProps} />
                </div>
            </ExplorerProvider>
        </>
    );
}

export default MyApp;
