import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  // 'TASKS' ARRAY THAT WILL HOLD ALL TASKS
  private tasks: Task[] = [];

  // RETURN ALL 'TASKS' FROM A 'GET' REQUEST in 'tasksController'
  getAllTask(): Task[] {
    return this.tasks;
  }

  // RETURN 'TASK' FROM A 'POST' REQUEST in 'tasksController'
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
