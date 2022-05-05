export interface ExplorerContextType {
    isLoading: boolean;
    ticket: any;
    event: any;
    getEventByTx: (tx: string) => void;
    getTicketByTx: (tx: string) => void;
    resetState: () => void;
}
