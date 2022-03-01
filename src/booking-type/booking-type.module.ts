import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { BookingTypeController } from './booking-type.controller';
import { BookingTypeService } from './booking-type.service';
import { BookingTypeSchema } from './schemas/booking-type.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: 'BookingType', schema: BookingTypeSchema },
    ]),
  ],
  providers: [BookingTypeService],
  controllers: [BookingTypeController],
  exports: [BookingTypeService],
})
export class BookingTypeModule {}
