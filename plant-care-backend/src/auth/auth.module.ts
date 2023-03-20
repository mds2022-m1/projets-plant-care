import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { AuthService } from './auth.service';
import { TokenController } from './token/token.controller';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { JwtStrategy } from './security/jwt.strategy';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  controllers: [TokenController],
  providers: [UserService, JwtStrategy],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "MyDigitalSchool Lyon cest top",
      signOptions: {
        audience: process.env.JWT_AUDIENCE || "localhost:3000"
      },
    }),
    TypeOrmModule.forFeature([User]),
    ConfigModule
  ]
})
export class AuthModule { }
