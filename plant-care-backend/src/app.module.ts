import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConfig } from './data-source';
import { Place } from './entity/Place';
import { Plant } from './entity/Plant';
import { Task } from './entity/Task';
import { User } from './entity/User';
import { PlantModule } from './plant/plant.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DBConfig),
    PlantModule,
    UserModule,
    TaskModule,
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})

export class AppModule {}

