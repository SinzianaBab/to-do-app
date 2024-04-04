import { TaskService } from "./services/task.service";
import { TaskRepositoryService } from "./repositories/task-repository.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./entities/task.entity";
import { CqrsModule } from "@nestjs/cqrs";
import { TaskController } from "./controllers/task.controller";
import { CreateTaskHandler } from "./commands/handlers/create-task.handler";
import { GetAllTasksHandler } from "./queries/handlers/get-all-tasks.handler";


const CommandHandlers = [CreateTaskHandler];

const Services = [
  TaskService
];

const Repositories = [
  TaskRepositoryService
];

const QueryHandlers = [GetAllTasksHandler];

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]), CqrsModule],
  controllers: [TaskController],
  providers: [
    ...Services,
    ...Repositories,
    ...CommandHandlers,
    ...QueryHandlers
  ]
})

export class TaskModule {
}