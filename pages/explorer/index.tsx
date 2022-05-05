import Link from "next/link";
import NavFooter from "../../components/nav-footer";
import NavHeader from "../../components/nav-header";

const ExplorerPage = () => {
    return (
        <>
            <NavHeader />
            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7 my-10 place-items-center">
                <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
                    <img
                        className="rounded-t-lg"
                        src="/images/summer-music-ftr.jpg"
                        alt="Event Explorer"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Event Explorer
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            NFT Token untuk Acara yang akan dilaksanakan, GTEV
                            Token berfungsi sebagai induk dari tiket-tiket yang
                            telah terjual ataupun terclaim oleh pembeli yang
                            telah tercatat diblockchain.
                        </p>
                        <Link href="/explorer/event">
                            <a className="px-4 py-1.5 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                                Find Event
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
                    <img
                        className="rounded-t-lg"
                        src="/images/ticket-collection.jpg"
                        alt="Ticket Explorer"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Ticket Explorer
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Tiket-tiket dari berbagai Acara akan tersimpan
                            disini secara rinci, didalam transaksi terdapat
                            memori berupa EventID yang ber-relasi ke database
                            get-twin.co
                        </p>
                        <Link href="/explorer/ticket">
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
