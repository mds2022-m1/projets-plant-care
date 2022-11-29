import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PlantDao } from 'src/Interfaces/plant.interface';

@Controller('plant')
export class PlantController {

//   @Post()
//   create(@Body() createPlantDto: PlantDao) {
//     return 'This action adds a new plant';
//   }
  
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }


//   //TODO gérer la valeur de retour
//   @Get()
//   findAll(@Req() request: Request): String {
//     return 'This action returns all plants';
//   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} plant`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlantDao: PlantDao) {
    return `This action updates a #${id} plant`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} plant`;
  }

}