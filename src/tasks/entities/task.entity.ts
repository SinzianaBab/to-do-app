import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { TagEntity } from "../../tags/entities/tag.entity";
import { TaskStatusEnum } from '../enums/taskStatus.enum';


@Entity({schema:"public"})
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  // @OneToMany(() => TagEntity, (tag)=> tag.task)
  // @JoinTable()
  // tags: TagEntity[];

  @ManyToMany(() => TagEntity, { cascade: true })
  @JoinTable()
  tags: TagEntity[];


  @Column({type:"enum", enum: TaskStatusEnum})
  status: TaskStatusEnum;

}
