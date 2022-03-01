import { Document } from 'mongoose';
import { Booking } from 'src/booking/interfaces/booking.interface';
import Role from './role.enum';

export interface User extends Document {
  readonly username: string;
  readonly password: string;
  readonly bookings: Booking[];
  readonly role: Role;
}
