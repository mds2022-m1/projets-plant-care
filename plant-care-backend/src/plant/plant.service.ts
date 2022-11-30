import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from '../entity/Plant';

@Injectable()
export class PlantService {
    constructor(@InjectRepository(Plant) private plantRepository: Repository<Plant>) { }

    public async getPlant(): Promise<Plant[]> {
        const plants = await this.plantRepository.find();

        return plants;
    }

    public async createPlant(createPlantRequest: Plant): Promise<Plant> {
        const plant = new Plant;
        plant.name = createPlantRequest.name;
        plant.picture = createPlantRequest.picture;
        plant.uuidPlace = createPlantRequest.uuidPlace;

        await this.plantRepository.save(plant);

        return plant;
    }
}
