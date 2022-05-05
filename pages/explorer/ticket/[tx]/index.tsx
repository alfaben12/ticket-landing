import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NavFooter from "../../../../components/nav-footer";
import NavHeader from "../../../../components/nav-header";
import { useExplorer } from "../../../../context/ExplorerContext/Context";

const ExplorerTicketDetailPage = () => {
    const router = useRouter();
    const { tx } = router.query;
    const { getTicketByTx, ticket, isLoading, resetState } = useExplorer();

    useEffect(() => {
        if (tx) {
            getTicketByTx(tx as string);
        }
    }, [tx]);

    useEffect(() => {
        if (ticket) {
            if (ticket.status !== 200) {
                resetState();
                router.push("/");
            }
        }
    }, [ticket]);

    return (
        <>
            <NavHeader />
            {isLoading || ticket == null ? (
                <p>Loading...</p>
            ) : (
                <div className=" font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
                    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                        <img
                            src={ticket.data.ticket.imageUrl}
                            className="rounded-none lg:rounded-lg shadow-2xl lg:hidden block mb-5 rounded-md"
                        />
                        <div
                            id="profile"
                            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none bg-white opacity-75 mx-6 lg:mx-0"
                        >
                            <div className="p-4 md:p-12 text-center lg:text-left">
                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                                    {ticket.data.ticket.event.name} #
                                    {ticket.data.ticket.refTicketId}
                                </h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                        />
                                    </svg>
                                    {ticket.data.ticket.event.name}
                                </p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    {moment(
                                        ticket.data.ticket.orderTime
                                    ).format("LLL")}
                                </p>
                                <p className="pt-8 text-sm">
                                    {ticket.data.ticket.description}
                                </p>

                                <div className="pt-12 pb-8">
                                    <a
                                        href={`${process.env.NEXT_PUBLIC_BLOCKCHAIN_URL}/tx/${tx}`}
                                        target="_blank"
                                        className="bg-pir-green hover:bg-pir-green-hover text-black font-bold py-2 px-4 rounded-full"
                                        rel="noreferrer"
                                    >
                                        View Blockchain
                                    </a>
                                </div>

                                <div className="truncate">
                                    Event Tx:{" "}
                                    <Link
                                        href={`/explorer/event/${ticket.data.ticket.event.eventBlockchains[0].transactionHash}`}
                                    >
                                        <a className="hover:underline">
                                            {
                                                ticket.data.ticket.event
                                                    .eventBlockchains[0]
                                                    .transactionHash
                                            }
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 px-5">
                            <img
                                src={ticket.data.ticket.imageUrl}
                                className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                            />
                        </div>
                    </div>
                </div>
            )}
            <NavFooter />
        </>
    );
};

export default ExplorerTicketDetailPage;
