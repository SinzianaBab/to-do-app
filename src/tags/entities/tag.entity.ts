import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "../../tasks/entities/task.entity";


@Entity()
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;
  
  // @ManyToOne(() => TaskEntity, (task) => task.tags, {nullable: true})
  // task: TaskEntity;

}