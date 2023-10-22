import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dtos/user/user-dto';

@ApiTags('유저 API')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({
    summary: '유저조회 API',
    description: '사용자 정보를 조회합니다.',
  })
  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  async getUserInfo(@User() user) {
    return user;
  }

  @ApiOperation({
    summary: '회원가입 API',
    description: '사용자가 회원가입합니다.',
  })
  @ApiBody({ type: UserDto })
  @Post('register')
  async register(@Body() body) {
    const email = body?.email;
    const password = body?.password;

    return this.userService.register(email, password);
  }
}
