import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { User } from '../entity/User';

import { UserService } from './user.service';
import * as bcrypt from 'bcryptjs';
import { JwtAuthGuard } from '../auth/guard/jwt.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  public async createOne(@Body() createUserRequest: User): Promise<User> {
    createUserRequest.password = await bcrypt.hash(createUserRequest.password, 10);
    return this.userService.createUser(createUserRequest);
  }

  @UseGuards(JwtAuthGuard)
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