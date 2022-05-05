import { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import createPersistedState from "use-persisted-state";
import api from "../../utils/api";
import { ExplorerContextType } from "./Type";

const ExplorerContext = createContext<ExplorerContextType>({
    isLoading: false,
    ticket: null,
    event: null,
    getEventByTx: (tx: string) => {},
    getTicketByTx: (tx: string) => {},
    resetState: () => {},
});

export const ExplorerProvider = ({ children }: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [event, setEvent] = useState(null);
    const [ticket, setTicket] = useState(null);

    const getEventByTx = async (tx: string) => {
        setIsLoading(true);
        try {
            const { data }: AxiosResponse<any> = await api.get(
                `/tx/event/${tx}`
            );

            setEvent(data);
            setIsLoading(false);
        } catch (error: any) {
            setEvent(error.response.data);
            setIsLoading(false);
        }
    };

    const getTicketByTx = async (tx: string) => {
        setIsLoading(true);
        try {
            const { data }: AxiosResponse<any> = await api.get(
                `/tx/ticket/${tx}`
            );

            setTicket(data);
            setIsLoading(false);
        } catch (error: any) {
            setTicket(error.response.data);
            setIsLoading(false);
        }
    };

    const resetState = async () => {
        setTicket(null);
        setEvent(null);
    };

    return (
        <ExplorerContext.Provider
            value={{
                isLoading,
                ticket,
                event,
                getTicketByTx,
                getEventByTx,
                resetState,
            }}
        >
            {children}
        </ExplorerContext.Provider>
    );
};

export const useExplorer = () => {
    return useContext(ExplorerContext);
};