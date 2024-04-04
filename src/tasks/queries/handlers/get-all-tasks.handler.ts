import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllTasksQuery } from "../get-all-tasks.query";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskRepositoryService } from "../../repositories/task-repository.service";
import { Task } from "../../models/task";


@QueryHandler(GetAllTasksQuery)
export class GetAllTasksHandler implements IQueryHandler<GetAllTasksQuery>{
  constructor(
private readonly taskRepository : TaskRepositoryService
  ) {
  }

  async execute( query: GetAllTasksQuery): Promise<Task[]>{
    return await this.taskRepository.getAll()
  }
}