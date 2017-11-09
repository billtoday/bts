import { IContact, TContactType, TContactTitle, IAddress } from 'tsclass'

export class InvoiceContact implements IContact {
  name: string
  type: TContactType
  title: TContactTitle
  address: IAddress
}