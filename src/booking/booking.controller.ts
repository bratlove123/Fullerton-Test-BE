import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import RoleGuard from 'src/auth/guards/role.guard';
import Role from 'src/auth/interfaces/role.enum';

import { BookingService } from './booking.service';
import { BookingDto } from './dtos/booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @UseGuards(JwtAuthGuard, RoleGuard(Role.User))
  @Post()
  createBooking(@Body(ValidationPipe) bookingDto: BookingDto) {
    return this.bookingService.createBooking(bookingDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Get()
  getAllBookings() {
    return this.bookingService.getAllBookings();
  }

  @UseGuards(JwtAuthGuard, RoleGuard(Role.User))
  @Get('/user/:id')
  getUserBookings(@Param('id') id) {
    return this.bookingService.getUserBookings(id);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(Role.User))
  @Put('cancel')
  cancelBooking(@Body(ValidationPipe) id: string) {
    return this.bookingService.cancelBooking(id);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Put('update')
  approveRejectBooking(@Body(ValidationPipe) bookingDto: BookingDto) {
    return this.bookingService.approveRejectBooking(bookingDto);
  }
}
