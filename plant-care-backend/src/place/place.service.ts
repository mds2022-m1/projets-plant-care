import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from '../entity/Place';

@Injectable()
export class PlaceService {
    constructor(@InjectRepository(Place) private placeRepository: Repository<Place>) { }

    public getPlace(): Promise<Place[]> {
        return this.placeRepository.find();
    }

    public async getPlaceById(uuid: string): Promise<Place> {
        const place = await this.placeRepository.findOne({
            where: { uuid }
        });
        return place;
    }

    public async createPlace(createPlaceRequest: Place): Promise<Place> {
        const place = new Place;
        place.name = createPlaceRequest.name;
        

        await this.placeRepository.save(place);

        return place;
    }

    public async updatePlace(uuid: string, updatePlaceRequest: Place): Promise<Place> {
        const place = new Place;
        place.name = updatePlaceRequest.name;

        await this.placeRepository.update(uuid, place);

        return place;
    }

    //TODO
    public async deletePlace(uuid: string){
        await this.placeRepository.delete(uuid);
    }
}
