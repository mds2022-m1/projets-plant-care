import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from '../entity/Plant';

@Injectable()
export class PlantService {
    constructor(@InjectRepository(Plant) private plantRepository: Repository<Plant>) {}

        public async createPlant(createPlantRequest: Plant) {
            const plant = new Plant;
            plant.name = createPlantRequest.name;
            plant.picture = createPlantRequest.picture;
            plant.uuid_place = createPlantRequest.uuid_place;

            await this.plantRepository.save(plant);

            return plant;            
        }
}
