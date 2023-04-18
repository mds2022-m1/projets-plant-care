import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from '../entity/Plant';
import { Task } from '../entity/Task';
import { User } from '../entity/User';
import { TaskController } from '../task/task.controller';
import { TaskService } from '../task/task.service';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';

@Module({
  controllers: [PlantController],
  providers: [PlantService],
  imports: [TypeOrmModule.forFeature([Plant])],
  exports: [PlantService],
})
export class PlantModule {}
