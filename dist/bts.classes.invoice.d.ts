import { InvoiceContact } from './bts.invoicecontact';
import { InvoiceItem } from './bts.classes.invoiceitem';
import { IInvoice, TInvoiceStatus } from 'tsclass';
export declare class Invoice implements IInvoice {
    status: TInvoiceStatus;
    billedTo: InvoiceContact;
    billedBy: InvoiceContact;
    items: InvoiceItem[];
}
