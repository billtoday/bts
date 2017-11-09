import * as plugins from "./bts.plugins"
import { IInvoice, TInvoiceStatus } from 'tsclass'

export class Invoice implements IInvoice {
    status: TInvoiceStatus
};

let invoicePdf = function(invoiceArg:Invoice){
    return undefined;
}