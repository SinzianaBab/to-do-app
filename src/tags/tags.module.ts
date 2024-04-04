import { TypeOrmModule } from "@nestjs/typeorm";
import { TagEntity } from "./entities/tag.entity";
import { Module } from '@nestjs/common';


@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  providers: [],
  controllers: []
})

export class TagsModule{}