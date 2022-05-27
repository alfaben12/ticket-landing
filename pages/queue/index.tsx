import NavFooter from "../../components/nav-footer";
import NavHeader from "../../components/nav-header";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import moment from "moment";

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
                        name: "time",
                        formatter: (cell: number) =>
                            moment.unix(+cell).format("LLL"),
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
            <NavFooter />
        </>
    );
};

export default QueuePage;
