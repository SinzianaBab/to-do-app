import { TagEntity } from "../../tags/entities/tag.entity";
import { TaskStatusEnum } from "../enums/taskStatus.enum";


export interface CreateTaskDto {
  title: string;
  content: string;
  tags: TagEntity[];
  status: TaskStatusEnum;
}
