import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from '../entity/Plant';

@Injectable()
export class PlantService {
    constructor(@InjectRepository(Plant) private plantRepository: Repository<Plant>) { }

    public getPlant(): Promise<Plant[]> {
        return this.plantRepository.find();
    }

    public async getPlantById(uuid: string): Promise<Plant> {
        const plant = await this.plantRepository.findOne({
            where: { uuid }
        });
        return plant;
    }

    public async createPlant(createPlantRequest: Plant): Promise<Plant> {
        const plant = new Plant;
        plant.name = createPlantRequest.name;
        plant.picture = createPlantRequest.picture;
        plant.uuidPlace = createPlantRequest.uuidPlace;

        await this.plantRepository.save(plant);

        return plant;
    }

    public async updatePlant(uuid: string, updatePlantRequest: Plant): Promise<Plant> {
        const plant = new Plant;
        plant.name = updatePlantRequest.name;
        plant.picture = updatePlantRequest.picture;
        plant.uuidPlace = updatePlantRequest.uuidPlace;

        await this.plantRepository.update(uuid, plant);

        return plant;
    }

    //TODO
    public async deletePlant(uuid: string){
        await this.plantRepository.delete(uuid);
    }
}
