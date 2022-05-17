export interface ExplorerContextType {
    isLoading: boolean;
    ticket: any;
    ticketClaim: any;
    event: any;
    getEventByTx: (tx: string) => void;
    getTicketByTx: (tx: string) => void;
    getTicketClaimByTx: (tx: string) => void;
    resetState: () => void;
}
