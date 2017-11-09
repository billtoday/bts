import * as plugins from "./bts.plugins"
import { InvoiceContact } from './bts.invoicecontact'
import { InvoiceItem } from './bts.classes.invoiceitem'
import { IInvoice, TInvoiceStatus } from 'tsclass'

export class Invoice implements IInvoice {
    status: TInvoiceStatus
    billedTo: InvoiceContact
    billedBy: InvoiceContact
    items: InvoiceItem[] = []
}
