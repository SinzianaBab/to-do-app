import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "../services/task.service";
import { CreateTaskDto } from "../dtos/create-task.dto";
import { TaskDto } from "../dtos/task.dto";


@Controller('tasks')
export class TaskController {
  constructor(private readonly service: TaskService) {
  }

  @Post()
  createTask(@Body() data: CreateTaskDto): Promise<TaskDto> {
    return this.service.createTask(data);
  }

  @Get()
  getAll(): Promise<TaskDto[]>{
    return this.service.getAll()
  }
}