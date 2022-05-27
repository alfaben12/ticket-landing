import NavFooter from "../../components/nav-footer";
import NavHeader from "../../components/nav-header";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import moment from "moment";
import Link from "next/link";

const QueuePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any[]>([]);

    const fetchAll = async () => {
        setIsLoading(true);
        try {
            const { data }: AxiosResponse<any> = await api.get(`/queue`);

            setResult(data);
            setIsLoading(false);
        } catch (error: any) {
            setResult([]);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAll();
    }, []);

    return (
        <>
            <NavHeader />
            {result.length == 0 ? (
                <>
                    <div className="mx-auto lg:py-16 lg:flex lg:items-center lg:justify-between">
                        <h2 className="font-extrabold tracking-tight text-gray-900">
                            <span className="block">
                                No queue at this time!
                            </span>
                            <br />
                            <span className="text-3xl sm:text-4xl block">
                                Ready to dive in?
                            </span>
                            <span className="text-2xl sm:text-4xl block bg-pir-green">
                                Start claim your NFT today.
                            </span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <Link href="/claim">
                                    <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-pir-green text-black">
                                        Get started
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Grid
                    data={result}
                    columns={[
                        {
                            id: "event",
                            name: "Event",
                        },
                        {
                            id: "ticket",
                            name: "Ticket",
                        },
                        {
                            id: "status",
                            name: "Status",
                        },
                        {
                            id: "time",
                            name: "Time",
                            formatter: (cell: string) =>
                                moment.unix(+cell).format("LLL"),
                        },
                        {
                            id: "body",
                            name: "Address",
                            data: (row: any) =>
                                row.body.toAddress
                                    ? row.body.toAddress
                                    : "Self Contract",
                        },
                    ]}
                    search={true}
                    sort={true}
                    autoWidth={true}
                    pagination={{
                        enabled: true,
                        limit: 20,
                    }}
                />
            )}
            <NavFooter />
        </>
    );
};

export default QueuePage;
