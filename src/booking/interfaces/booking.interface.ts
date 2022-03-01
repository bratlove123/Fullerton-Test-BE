import { Document } from 'mongoose';
import { User } from 'src/auth/interfaces/user.interface';
import { BookingType } from 'src/booking-type/interfaces/booking-type.interface';

export interface Booking extends Document {
  readonly type: BookingType;
  readonly location: string;
  readonly status: string;
  readonly date1: Date;
  readonly date2: Date;
  readonly date3: Date;
  readonly owner: User;
  readonly reason: string;
  readonly date1Confirmed: boolean;
  readonly date2Confirmed: boolean;
  readonly date3Confirmed: boolean;
}
