import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateTaskDto } from "../dtos/create-task.dto";
import { TaskDto } from "../dtos/task.dto";
import { CreateTaskCommand } from "../commands/create-task.command";
import { GetAllTasksQuery } from "../queries/get-all-tasks.query";

@Injectable()
export class TaskService {
  constructor(private commandBus: CommandBus,
              private queryBus: QueryBus
  ) {
  }

  async createTask(payload: CreateTaskDto): Promise<TaskDto> {
    const command = new CreateTaskCommand(payload);
    return this.commandBus.execute(command);
  }

  async getAll(): Promise<TaskDto[]> {
    const query = new GetAllTasksQuery();
    return this.queryBus.execute(query);
  }
}