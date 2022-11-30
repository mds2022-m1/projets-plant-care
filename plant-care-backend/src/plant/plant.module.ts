import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from '../entity/Plant';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';

@Module({
  controllers: [PlantController],
  providers: [PlantService],
  imports: [TypeOrmModule.forFeature([Plant])],
  exports: [PlantService],
})
export class PlantModule {}
