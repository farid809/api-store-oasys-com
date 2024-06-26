import dayjs from 'dayjs/esm';
import { IInvoice } from 'app/entities/invoice/invoice/invoice.model';

export interface IShipment {
  id: number;
  trackingCode?: string | null;
  date?: dayjs.Dayjs | null;
  details?: string | null;
  invoice?: IInvoice | null;
}

export type NewShipment = Omit<IShipment, 'id'> & { id: null };
