import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDTO, UserInfo } from './dto/create-user.dto';
import { VerifyEmailDTO } from './dto/verify-email.dto';
import { UsersService } from './users.service';
import { UserLoginDTO } from './dto/user-login.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDTO):Promise<void> {
    console.log(dto);
    const { name, email, password } = dto;
    await this.userService.createUser(name, email, password);
  }
  
  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDTO): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.userService.verifyEmail(signupVerifyToken);
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId:string):Promise<UserInfo> {
    return await this.userService.getUserInfo(userId);
  }

  @Post('/login')
  async Login(@Body() dto: UserLoginDTO):Promise<string> {
    const { email, password } = dto;

    return await this.userService.login(email, password)
  }
}

