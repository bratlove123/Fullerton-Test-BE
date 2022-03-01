import { BookingType } from 'src/booking-type/interfaces/booking-type.interface';

export class BookingDto {
  _id: string;
  type: BookingType;
  location: string;
  status: string;
  date1: Date;
  date2: Date;
  date3: Date;
  reason: string;
  date1Confirmed: boolean;
  date2Confirmed: boolean;
  date3Confirmed: boolean;
}
