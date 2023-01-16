import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { AuthService } from './auth.service';
import { TokenController } from './token/token.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [AuthService],
  controllers: [TokenController],
  imports:[
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET||"MyDigitalSchool Lyon cest top",
      signOptions: {
        audience: process.env.JWT_AUDIENCE||"localhost:3000"},
    }),
    TypeOrmModule.forFeature([User])
  ]
})
export class AuthModule {}
