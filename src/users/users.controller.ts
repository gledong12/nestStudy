import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDTO, UserInfo, VerifyEmailDTO } from './dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDTO):Promise<void> {
    console.log(dto);
  }
  
  @Post()
  async verifyEmail(@Query() dto: VerifyEmailDTO): Promise<string> {
    console.log(dto)
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId:string):Promise<UserInfo> {
    console.log(userId);
    return;
  }
}

