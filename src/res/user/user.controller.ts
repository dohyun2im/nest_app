import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  async getUserInfo(@User() user) {
    return user;
  }

  @Post('register')
  async register(@Body() body) {
    const email = body?.email;
    const password = body?.password;

    return this.userService.register(email, password);
  }
}
