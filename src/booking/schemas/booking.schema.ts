import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'BookingType' },
  location: String,
  status: String,
  date1: Date,
  date2: Date,
  date3: Date,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: String,
  date1Confirmed: Boolean,
  date2Confirmed: Boolean,
  date3Confirmed: Boolean,
});
