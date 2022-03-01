import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import RoleGuard from 'src/auth/guards/role.guard';
import Role from 'src/auth/interfaces/role.enum';

import { BookingTypeService } from './booking-type.service';
import { BookingTypeDto } from './dtos/booking-type.dto';

@Controller('booking-type')
export class BookingTypeController {
  constructor(private bookingTypeService: BookingTypeService) {}

  @UseGuards(JwtAuthGuard, RoleGuard(Role.User))
  @Post()
  createBookingType(@Body(ValidationPipe) bookingDto: BookingTypeDto) {
    return this.bookingTypeService.createBookingType(bookingDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(Role.User))
  @Get()
  getBookingTypes() {
    return this.bookingTypeService.getBookingTypes();
  }
}
