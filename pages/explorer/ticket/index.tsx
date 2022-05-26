import NavFooter from "../../../components/nav-footer";
import NavHeader from "../../../components/nav-header";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const ExplorerTicketPage = () => {
    const router = useRouter();
    const [tx, setTx] = useState("");

    const findTx = (e: any) => {
        e.preventDefault();
        const url = `/explorer/ticket/${tx}`;

        router.push(url);
    };
    return (
        <>
            <NavHeader />
            <div className="flex flex-col items-center justify-center h-screen">
                <form
                    className="flex flex-col items-center mt-44 flex-grow w-4/5"
                    onSubmit={findTx}
                >
                    <Image
                        src="/images/logo/logo-text.svg"
                        width={420}
                        height={122}
                        alt="Get Twin"
                    />
                    <div className="flex w-full mt-5 shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            className="focus:outline-none flex-grow bg-transparent"
                            placeholder="Paste your tx address here!"
                            required
                            onChange={(e) => setTx(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col w-full space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <button className="px-4 py-1.5 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
                            Find Ticket
                        </button>
                    </div>
                </form>
            </div>
            <NavFooter />
        </>
    );
};

export default ExplorerTicketPage;
