import { IInvoiceItem } from 'tsclass';
export declare class InvoiceItem implements IInvoiceItem {
    name: string;
    unitType: string;
    quantity: number;
    vatPercentage: any;
}
