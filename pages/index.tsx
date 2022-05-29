/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import CallToAction from "../components/call-to-action";
import EverythingYouExpect from "../components/everything-you-expect";
import JumboHero from "../components/jumbo-hero";
import ProductClients from "../components/product-clients";
import ProductFeaturesList from "../components/product-features-list";
import SetForFuture from "../components/set-for-future";
import Image from "next/image";
import NavFooter from "../components/nav-footer";
import NavHeader from "../components/nav-header";
import ModalNotice from "../components/modal-notice";

const Home: NextPage = () => {
    return (
        <>
            <ModalNotice />
            <NavHeader />
            <JumboHero />
            <div style={{ borderRadius: "8px", overflow: "hidden" }}>
                <Image
                    src="/images/dashboard.png"
                    width={1200}
                    height={768}
                    layout="responsive"
                    alt="Dashboard"
                />
            </div>
            <SetForFuture />
            <EverythingYouExpect />
            <ProductFeaturesList />
            <ProductClients />

            <div className="mt-10" id="token">
                <p className="text-2xl font-medium lg:text-3xl text-center">
                    Token
                </p>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-5">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img
                                className="h-48 w-full object-cover md:h-full md:w-48"
                                src="/images/summer-music-ftr.jpg"
                                alt="Event Token"
                            />
                        </div>
                        <div className="p-8">
                            <div className="tracking-wide text-lg text-pir-green font-semibold">
                                Get Twin Event (GTEV)
                            </div>
                            <span className="block mt-1 text-sm leading-tight font-medium text-black hover:underline truncate">
                                {process.env.NEXT_PUBLIC_EVENT_CONTRACT}
                            </span>
                            <p className="mt-2 text-slate-500">
                                NFT Token untuk Acara yang akan dilaksanakan,
                                GTEV Token berfungsi sebagai induk dari
                                tiket-tiket yang telah terjual ataupun terclaim
                                oleh pembeli yang telah tercatat diblockchain.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-5">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img
                                className="h-48 w-full object-cover md:h-full md:w-48"
                                src="/images/ticket-collection.jpg"
                                alt="Ticket Token"
                            />
                        </div>
                        <div className="p-8">
                            <div className="tracking-wide text-lg text-pir-green font-semibold">
                                Get Twin (TWIN)
                            </div>
                            <span className="block mt-1 text-sm leading-tight font-medium text-black hover:underline truncate">
                                {process.env.NEXT_PUBLIC_TICKET_CONTRACT}
                            </span>
                            <p className="mt-2 text-slate-500">
                                Tiket-tiket dari berbagai Acara akan tersimpan
                                disini secara rinci, didalam transaksi terdapat
                                memori berupa EventID yang ber-relasi ke
                                database get-twin.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
            <NavFooter />
        </>
    );
};

export default Home;
