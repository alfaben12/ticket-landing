import Link from "next/link";
import NavFooter from "../../components/nav-footer";
import NavHeader from "../../components/nav-header";
import Image from "next/image";

const ExplorerPage = () => {
    return (
        <>
            <NavHeader />
            <div className="grid justify-center md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-7 my-10 place-items-center">
                <div className="max-w-md bg-white rounded-lg border border-gray-200">
                    <Image
                        src="/images/summer-music-ftr.jpg"
                        layout="responsive"
                        width={700}
                        height={475}
                        alt="Event Explorer"
                        className="rounded-t-lg"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Event Explorer
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            NFT Token untuk Acara yang akan dilaksanakan, GTEV
                            Token berfungsi sebagai induk dari tiket-tiket yang
                            telah terjual ataupun terkalim.
                        </p>
                        <Link href="/explorer/event">
                            <a className="px-4 py-1.5 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                                Find Event
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="max-w-md bg-white rounded-lg border border-gray-200">
                    <Image
                        src="/images/ticket-collection.jpg"
                        layout="responsive"
                        width={700}
                        height={475}
                        alt="Ticket Explorer"
                        className="rounded-t-lg"
                    />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Ticket Explorer
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Tiket-tiket dari berbagai Acara akan tersimpan
                            disini secara rinci, didalam transaksi terdapat
                            memori berupa EventID yang ber-relasi ke database
                            get-twin.com
                        </p>
                        <Link href="/explorer/ticket">
                            <a className="px-4 py-1.5 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                                Find Ticket
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="max-w-md bg-white rounded-lg border border-gray-200">
                    <Image
                        src="/images/claim.jpg"
                        layout="responsive"
                        width={700}
                        height={475}
                        alt="Ticket Explorer"
                        className="rounded-t-lg"
                    />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Ticket Claim Explorer
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Cari tiket yang telah diklaim disini. Tiket yang
                            kamu claim akan masuk ke wallet kamu, dapat dilihat
                            di{" "}
                            <a
                                href="https://opensea.io"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                opensea.io
                            </a>{" "}
                            dan kamu dapat jual kembali sesuai mekanisme.
                        </p>
                        <Link href="/explorer/claim">
                            <a className="px-4 py-1.5 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                                Find Ticket
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <NavFooter />
        </>
    );
};

export default ExplorerPage;
