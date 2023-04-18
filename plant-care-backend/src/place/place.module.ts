import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from '../entity/Place';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  controllers: [PlaceController],
  providers: [PlaceService],
  imports: [TypeOrmModule.forFeature([Place])],
  exports: [PlaceService],
})
export class PlaceModule {}
