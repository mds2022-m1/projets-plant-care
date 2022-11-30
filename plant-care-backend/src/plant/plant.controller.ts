import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Plant } from '../entity/Plant';
import { PlantService } from './plant.service';

@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) { }

  @Post()
  public async createOne(@Body() createPlantRequest: Plant): Promise<Plant> {
    const res = await this.plantService.createPlant(createPlantRequest);

    return res;
  }

  @Get()
  public async findAll(): Promise<Plant[]> {
    const res = await this.plantService.getPlant();
    return res;
  }

  // //   @Post()
  // //   create(@Body() createPlantDto: PlantDao) {
  // //     return 'This action adds a new plant';
  // //   }

  //   @Post()
  //   create(@Res() res: Response) {
  //     res.status(HttpStatus.CREATED).send();
  //   }



  // //   //TODO gérer la valeur de retour
  // //   @Get()
  // //   findAll(@Req() request: Request): String {
  // //     return 'This action returns all plants';
  // //   }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return `This action returns a #${id} plant`;
  //   }

  //   @Put(':id')
  //   update(@Param('id') id: string, @Body() updatePlantDao: PlantDao) {
  //     return `This action updates a #${id} plant`;
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return `This action removes a #${id} plant`;
  //   }

}