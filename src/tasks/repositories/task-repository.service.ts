import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity } from "../entities/task.entity";
import { Repository } from "typeorm";


@Injectable()
export class TaskRepositoryService {
  constructor(@InjectRepository(TaskEntity)
              private readonly taskRepository: Repository<TaskEntity>
  ) {
  }

  async save(entity: TaskEntity): Promise<TaskEntity> {
    return await this.taskRepository.save(entity);
  }

  async getAll(): Promise<TaskEntity[]>{
    return await this.taskRepository.find();
  }

}
