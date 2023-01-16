import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entity/Task';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) { }

    public getTask(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    public async getTaskById(uuid: string): Promise<Task> {
        const task = await this.taskRepository.findOne({
            where: { uuid }
        });
        return task;
    }

    public async createTask(createTaskRequest: Task): Promise<Task> {
        const task = new Task;
        task.name = createTaskRequest.name;
        task.note = createTaskRequest.note;
        task.frequencyType = createTaskRequest.frequencyType;
        task.lastAction = createTaskRequest.lastAction;
        task.month = createTaskRequest.month;
        task.actionFrequency = createTaskRequest.actionFrequency;
        task.uuidPlant = createTaskRequest.uuidPlant;
        

        await this.taskRepository.save(task);

        return task;
    }

    public async updateTask(uuid: string, updateTaskRequest: Task): Promise<Task> {
        const task = new Task;
        task.name = updateTaskRequest.name;
        task.note = updateTaskRequest.note;
        task.frequencyType = updateTaskRequest.frequencyType;
        task.lastAction = updateTaskRequest.lastAction;
        task.month = updateTaskRequest.month;
        task.actionFrequency = updateTaskRequest.actionFrequency;
        task.uuidPlant = updateTaskRequest.uuidPlant;

        await this.taskRepository.update(uuid, task);

        return task;
    }

    //TODO
    public async deleteTask(uuid: string){
        await this.taskRepository.delete(uuid);
    }
}
