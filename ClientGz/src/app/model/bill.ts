import { BillInfo } from "./billInfo";

export interface Bill
{
    id: number;

    name: string;
    phone: string;
    address: string;

    totalPrice:number;

    billInfo:BillInfo;
}
