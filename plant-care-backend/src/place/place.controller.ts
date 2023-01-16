import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Res, HttpStatus, Patch } from '@nestjs/common';
import { Response } from 'express';
import { Place } from '../entity/Place';
import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) { }

  @Post()
  public createOne(@Body() createPlaceRequest: Place): Promise<Place> {
    return this.placeService.createPlace(createPlaceRequest);
  }

  @Get()
  public findAll(): Promise<Place[]> {
    return this.placeService.getPlace();
  }

  @Get(':uuid')
  public findOne(@Param('uuid') uuid: string): Promise<Place> {
    return this.placeService.getPlaceById(uuid);
  }

  @Patch(':uuid')
  public update(@Param('uuid') uuid: string, @Body() updatePlaceRequest: Place) {
    return this.placeService.updatePlace(uuid, updatePlaceRequest);
  }

  @Delete(':uuid')
  public async remove(@Param('uuid') uuid: string) {
    return await this.placeService.deletePlace(uuid);
  }

}