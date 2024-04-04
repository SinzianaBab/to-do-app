import { TagEntity } from "../../tags/entities/tag.entity";
import { TaskStatusEnum } from "../enums/taskStatus.enum";
import { ITask } from "../interfaces/task.interface";
import { CreateTaskCommand } from "../commands/create-task.command";

export class Task {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly tags: TagEntity[];
  readonly status: TaskStatusEnum;

  private constructor(data: ITask) {
    this.id = data.id ?? undefined;
    this.title = data.title;
    this.content = data.content;
    this.tags = data.tags;
    this.status = data.status;
  }

  static create(command: CreateTaskCommand): Task {
    const { payload } = command;
    return new Task({
      id: undefined,
      title: payload.title,
      content: payload.content,
      tags: payload.tags,
      status: payload.status
    });
  }
}

