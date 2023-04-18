import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Res, HttpStatus, Patch } from '@nestjs/common';
import { Response } from 'express';
import { Task } from '../entity/Task';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  public createOne(@Body() createTaskRequest: Task): Promise<Task> {
    return this.taskService.createTask(createTaskRequest);
  }

  @Get()
  public findAll(): Promise<Task[]> {
    return this.taskService.getTask();
  }

  @Get(':uuid')
  public findOne(@Param('uuid') uuid: string): Promise<Task> {
    return this.taskService.getTaskById(uuid);
  }

  @Patch(':uuid')
  public update(@Param('uuid') uuid: string, @Body() updateTaskRequest: Task) {
    return this.taskService.updateTask(uuid, updateTaskRequest);
  }

  @Delete(':uuid')
  public async remove(@Param('uuid') uuid: string) {
    return await this.taskService.deleteTask(uuid);
  }

}