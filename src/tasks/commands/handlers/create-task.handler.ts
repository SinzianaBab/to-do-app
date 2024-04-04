import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateTaskCommand } from "../create-task.command";
import { TaskRepositoryService } from "../../repositories/task-repository.service";
import { Task } from "../../models/task";
import { TaskEntity } from "../../entities/task.entity";


@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly repository: TaskRepositoryService) {
  }

  async execute(command: CreateTaskCommand) {
    const task: Task = Task.create(command);
    return await this.repository.save(task);
  }

}
