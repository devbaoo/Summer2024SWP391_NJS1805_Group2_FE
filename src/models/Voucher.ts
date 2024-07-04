export interface IVoucher {
    id: number;
    name: string;
    thumbnailurl: string;
    from: string;
    to: string;
    minordervalue: number;
    value: number;
    quantity: number;
    createat: string;
    status: string;
}
export interface IVoucherCreate {
    id: number;
    name: string;
    thumbnailurl: string;
    from: string;
    to: string;
    minordervalue: number;
    value: number;
    quantity: number;
    createat: string;
    status: string;
}
