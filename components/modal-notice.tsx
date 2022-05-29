import { Transition, Dialog } from "@headlessui/react";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";

const ModalNotice = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        openModal();
    }, []);
    return (
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-md font-medium leading-6 text-gray-900 p-4"
                                >
                                    Get Twin x BRMalang Nobar Final UCL 2022
                                    Liverpool vs Real Madrid on Hall Preston.co
                                </Dialog.Title>
                                <Image
                                    src="https://i.postimg.cc/vHKJQX3f/284005830-1053073735630538-555059073784666483-n.jpg"
                                    width={500}
                                    height={500}
                                    alt="Gwt Twin x BRMalang"
                                />
                                <div className="p-4">
                                    <p className="text-sm text-gray-500">
                                        Belum kebagian code untuk klaim NFT?
                                        <br />
                                        Kamu dapat melihat list kode melalui
                                        link dibawah
                                        <br />
                                        <a
                                            href="https://docs.google.com/spreadsheets/d/1TCvU5CosAVeEJpUCITyk4h5zYfPrUkFxvg4AewychPw/edit?usp=sharing"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-500"
                                        >
                                            https://docs.google.com/spreadsheets/d/1TCvU5CosAVeEJpUCITyk4h5zYfPrUkFxvg4AewychPw/edit?usp=sharing
                                        </a>
                                    </p>
                                </div>

                                <div className="p-4 float-right">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalNotice;
