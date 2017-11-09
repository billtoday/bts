import * as plugins from './bts.plugins'
import { IInvoiceItem } from 'tsclass'

export class InvoiceItem implements IInvoiceItem {
  name: string
  unitType: string
  quantity: number
  vatPercentage
}
