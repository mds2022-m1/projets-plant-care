import { Response } from 'express';
import { PlantDao } from 'src/Interfaces/plant.interface';
export declare class PlantController {
    create(res: Response): void;
    findAll(res: Response): void;
    findOne(id: string): string;
    update(id: string, updatePlantDao: PlantDao): string;
    remove(id: string): string;
}
