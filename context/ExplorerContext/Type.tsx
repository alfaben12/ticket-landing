export interface ExplorerContextType {
    isLoading: boolean;
    ticket: any;
    ticketClaim: any;
    event: any;
    claimed: any;
    getEventByTx: (tx: string) => void;
    getTicketByTx: (tx: string) => void;
    getTicketClaimByTx: (tx: string) => void;
    claimTicket: (body: any) => void;
    resetState: () => void;
}
