import dayjs from 'dayjs';
import { IShipment } from 'app/shared/model/invoice/shipment.model';
import { InvoiceStatus } from 'app/shared/model/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/shared/model/enumerations/payment-method.model';

export interface IInvoice {
  id?: number;
  code?: string;
  date?: dayjs.Dayjs;
  details?: string | null;
  status?: keyof typeof InvoiceStatus;
  paymentMethod?: keyof typeof PaymentMethod;
  paymentDate?: dayjs.Dayjs;
  paymentAmount?: number;
  shipments?: IShipment[] | null;
}

export const defaultValue: Readonly<IInvoice> = {};
