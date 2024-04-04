import { CreateTaskDto } from "../dtos/create-task.dto";


export class CreateTaskCommand {
  readonly name: string;
  readonly payload: CreateTaskDto;

  constructor(payload: CreateTaskDto) {
    this.name = CreateTaskCommand.name;
    this.payload = payload;
  }
}

