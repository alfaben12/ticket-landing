/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import CallToAction from "../components/call-to-action";
import EverythingYouExpect from "../components/everything-you-expect";
import JumboHero from "../components/jumbo-hero";
import ProductClients from "../components/product-clients";
import ProductFeaturesList from "../components/product-features-list";
import SetForFuture from "../components/set-for-future";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <><JumboHero /><Image
            src="https://pirsch.io/static/img/dashboard-dark.svg"
            width={1200}
            height={768}
            layout="responsive" /><SetForFuture /><EverythingYouExpect /><ProductFeaturesList /><ProductClients /><CallToAction /></>
    )
};

export default Home;
