import { TagEntity } from "../../tags/entities/tag.entity";
import { TaskStatusEnum } from "../enums/taskStatus.enum";


export interface TaskDto {
  id: number;
  title: string;
  content: string;
  tags: TagEntity[];
  status: TaskStatusEnum;
}
