import NavHeader from "../../components/nav-header";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ClaimPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <div>
            <NavHeader />
            <div className="flex justify-center lg:h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3 rounded-lg"
                    style={{
                        backgroundImage: "url(./images/festival.jpg)",
                    }}
                >
                    <div className="flex h-full pt-20 px-20">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Get Your NFT Now!
                            </h2>

                            <p className="max-w-xl mt-3">
                                Selain barang fisik, pelanggan dapat membeli
                                gambar digitalnya, yang memungkinkan mereka
                                memiliki barang digital yang dapat dikoleksi dan
                                bukti keasliannya.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700">
                                The Claim Form
                            </h2>

                            <p className="mt-3 text-gray-500">
                                Isikan data dengan benar dengan benar!
                            </p>
                        </div>

                        <div className="mt-8">
                            <form>
                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block mb-2 text-sm text-gray-600"
                                    >
                                        Wallet Address (ETH)
                                    </label>
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="0x"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        autoComplete="off"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="your@email.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            htmlFor="code"
                                            className="text-sm text-gray-600"
                                        >
                                            Code
                                        </label>
                                        <a
                                            onClick={openModal}
                                            className="text-sm text-gray-400 focus:text-green-500 hover:text-green-500 hover:underline cursor-pointer"
                                        >
                                            What is Code?
                                        </a>
                                    </div>

                                    <input
                                        autoComplete="off"
                                        type="text"
                                        name="code"
                                        id="code"
                                        placeholder="Your Code"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label
                                        htmlFor="note"
                                        className="block mb-2 text-sm text-gray-600"
                                    >
                                        Note
                                    </label>
                                    <textarea
                                        name="description"
                                        id="note"
                                        placeholder="Add your note here"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                                        Claim
                                    </button>
                                </div>
                            </form>

                            {/* <p className="mt-6 text-sm text-center text-gray-400">
                                Don&#x27;t have an code yet?{" "}
                                <a
                                    href="#"
                                    className="text-green-500 focus:outline-none focus:underline hover:underline"
                                >
                                    Sign up
                                </a>
                                .
                            </p> */}

                            <p className="mt-6 text-sm text-center text-gray-400">
                                Proud your digital asset collection on{" "}
                                <a
                                    href="https://opensea.io/"
                                    target="_blank"
                                    className="text-green-500 focus:outline-none focus:underline hover:underline"
                                    rel="noreferrer"
                                >
                                    opensea.io
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        What is Code?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Kamu dapat melihat code daplikasi
                                            tempat kamu membeli tiket atau dapat
                                            dilihat ditiket yang sudah kamu
                                            terima.
                                            <br />
                                            <br />
                                            Jika kamu masih tidak dapat
                                            menemukan Code, kamu dapat
                                            menghubungi ke aplikasi yang telah
                                            menerbitkan tiketmu.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ClaimPage;
