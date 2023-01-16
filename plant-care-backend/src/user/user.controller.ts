import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Res, HttpStatus, Patch } from '@nestjs/common';
import { Response } from 'express';
import { User } from '../entity/User';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  public createOne(@Body() createUserRequest: User): Promise<User> {
    return this.userService.createUser(createUserRequest);
  }

  @Get()
  public findAll(): Promise<User[]> {
    return this.userService.getUser();
  }

  @Get(':uuid')
  public findOne(@Param('uuid') uuid: string): Promise<User> {
    return this.userService.getUserById(uuid);
  }

  @Patch(':uuid')
  public update(@Param('uuid') uuid: string, @Body() updateUserRequest: User) {
    return this.userService.updateUser(uuid, updateUserRequest);
  }

  @Delete(':uuid')
  public async remove(@Param('uuid') uuid: string) {
    return await this.userService.deleteUser(uuid);
  }

}