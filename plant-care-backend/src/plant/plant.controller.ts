import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Res, HttpStatus, Patch } from '@nestjs/common';
import { Response } from 'express';
import { Plant } from '../entity/Plant';
import { PlantService } from './plant.service';

@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) { }

  @Post()
  public createOne(@Body() createPlantRequest: Plant): Promise<Plant> {
    return this.plantService.createPlant(createPlantRequest);
  }

  @Get()
  public findAll(): Promise<Plant[]> {
    return this.plantService.getPlant();
  }

  @Get(':uuid')
  public findOne(@Param('uuid') uuid: string): Promise<Plant> {
    return this.plantService.getPlantById(uuid);
  }

  @Patch(':uuid')
  public update(@Param('uuid') uuid: string, @Body() updatePlantRequest: Plant) {
    return this.plantService.updatePlant(uuid, updatePlantRequest);
  }

  @Delete(':uuid')
  public async remove(@Param('uuid') uuid: string) {
    return await this.plantService.deletePlant(uuid);
  }

}