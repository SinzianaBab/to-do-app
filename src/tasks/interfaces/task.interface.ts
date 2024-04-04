import { TagEntity } from "../../tags/entities/tag.entity";
import { TaskStatusEnum } from "../enums/taskStatus.enum";


export interface ITask {
  readonly id?: number;
  readonly title: string;
  readonly content: string;
  readonly tags: TagEntity[];
  readonly status: TaskStatusEnum;
}
