import NavHeader from "../../components/nav-header";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import NavFooter from "../../components/nav-footer";
import { useExplorer } from "../../context/ExplorerContext/Context";
import { useRouter } from "next/router";
import moment from "moment";
import ModalNotice from "../../components/modal-notice";

const ClaimPage = () => {
    const router = useRouter();
    const { claimTicket, claimed, isLoading, resetState } = useExplorer();
    const [code, setCode] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const body = {
            code,
            address,
            email,
            description: note,
            claimTime: moment().unix().toString(),
        };
        claimTicket(body);
    };

    useEffect(() => {
        if (claimed !== null) {
            if ([200, 201].includes(claimed.status)) {
                setTimeout(() => {
                    resetState();
                    router.push("/");
                }, 5000);
            }
        }
    }, [claimed]);

    return (
        <div>
            <ModalNotice />
            <NavHeader />
            <div className="flex justify-center lg:h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3 rounded-lg mr-6"
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

                <div className="flex items-center w-full max-w-md mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700">
                                The Claim Form
                            </h2>

                            <p className="mt-3 text-gray-500">
                                Isikan data dengan benar dan sesuai.
                            </p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={onSubmit}>
                                {claimed ? (
                                    <>
                                        {[200, 201].includes(claimed.status) ? (
                                            <div
                                                className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                                                role="alert"
                                            >
                                                <svg
                                                    className="inline flex-shrink-0 mr-3 w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <div>
                                                    {claimed.message}
                                                    <br />
                                                    Will redirect in 5 second.
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                                                role="alert"
                                            >
                                                <svg
                                                    className="inline flex-shrink-0 mr-3 w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <div>{claimed.message}</div>
                                            </div>
                                        )}
                                    </>
                                ) : null}
                                <div>
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
                                        onChange={(e) =>
                                            setCode(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mt-4">
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
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setNote(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mt-6">
                                    {isLoading ? (
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200"
                                        >
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            <span>Processing</span>
                                        </button>
                                    ) : (
                                        <button className="w-full px-4 py-2 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                                            Claim
                                        </button>
                                    )}
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
            <NavFooter />
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
                                            Kamu dapat melihat code diaplikasi
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
