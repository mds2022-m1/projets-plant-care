import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/security/jwt.strategy';
import { DBConfig } from './data-source';
import { Place } from './entity/Place';
import { Plant } from './entity/Plant';
import { Task } from './entity/Task';
import { User } from './entity/User';
import { PlantModule } from './plant/plant.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DBConfig),
    PlantModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot()
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})

export class AppModule{}