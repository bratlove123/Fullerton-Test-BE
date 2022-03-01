import { Document } from 'mongoose';

export interface BookingType extends Document {
  readonly name: string;
}
