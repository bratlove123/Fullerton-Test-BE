import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BookingTypeDto } from './dtos/booking-type.dto';
import { BookingType } from './interfaces/booking-type.interface';

@Injectable()
export class BookingTypeService {
  constructor(
    @InjectModel('BookingType') private bookingTypeModel: Model<BookingType>,
  ) {}

  async createBookingType(bookingTypeDto: BookingTypeDto): Promise<void> {
    const user = new this.bookingTypeModel(bookingTypeDto);

    try {
      await user.save();
    } catch (error) {
      throw error;
    }
  }

  async getBookingTypes(): Promise<BookingType[]> {
    try {
      const bookingTypes = await this.bookingTypeModel.find();
      return bookingTypes;
    } catch (error) {
      throw error;
    }
  }
}
