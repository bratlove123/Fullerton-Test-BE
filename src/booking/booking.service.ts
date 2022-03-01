import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BookingDto } from './dtos/booking.dto';
import { Booking } from './interfaces/booking.interface';
import Status from './interfaces/status.enum';

@Injectable()
export class BookingService {
  constructor(@InjectModel('Booking') private bookingModel: Model<Booking>) {}

  async createBooking(bookingDto: BookingDto): Promise<Booking> {
    bookingDto.status = Status.PendingReview;
    const model = new this.bookingModel(bookingDto);
    try {
      const booking = await model.save();
      return booking;
    } catch (error) {
      throw error;
    }
  }

  async getAllBookings(): Promise<Booking[]> {
    try {
      const bookings = await this.bookingModel
        .find()
        .populate('owner', 'username')
        .populate('type', 'name');
      return bookings;
    } catch (error) {
      throw error;
    }
  }

  async getUserBookings(owner: string): Promise<Booking[]> {
    try {
      const bookings = await this.bookingModel
        .find({ owner })
        .populate('owner', 'username')
        .populate('type', 'name');
      return bookings;
    } catch (error) {
      throw error;
    }
  }

  async cancelBooking(value: any): Promise<boolean> {
    try {
      const bookings = await this.bookingModel.findOneAndUpdate(
        {
          _id: value.id,
        },
        { status: Status.Cancelled },
      );
      return !!bookings;
    } catch (error) {
      throw error;
    }
  }

  async approveRejectBooking(bookingDto: BookingDto): Promise<Booking> {
    try {
      const id = bookingDto._id;
      delete bookingDto._id;
      const booking = await this.bookingModel.findOneAndUpdate(
        {
          _id: id,
        },
        bookingDto,
      );
      return booking;
    } catch (error) {
      throw error;
    }
  }
}
