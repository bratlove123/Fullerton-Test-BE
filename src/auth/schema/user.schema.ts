import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  role: ['User', 'Admin'],
  password: String,
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
});
