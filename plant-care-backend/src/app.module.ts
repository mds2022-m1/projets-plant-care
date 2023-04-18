import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DBConfig } from './data-source';
import { PlaceModule } from './place/place.module';
import { PlantModule } from './plant/plant.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DBConfig),
    PlantModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
    PlaceModule,
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})

export class AppModule{}