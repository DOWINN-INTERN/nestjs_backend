import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // GET ALL 'TASKS' FROM 'getAllTask' method in 'tasksService'
  @Get()
  getAllTask(): Task[] {
    return this.tasksService.getAllTask();
  }

  // RECEIVE REQUEST BODY 'TASK' TITLE AND DESCRIPTION, THEN PROCESS IT TO 'createTask' method in 'tasksService'
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
