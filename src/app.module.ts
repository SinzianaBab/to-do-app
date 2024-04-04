import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskModule } from "./tasks/task.module";
import { TagsModule } from "./tags/tags.module";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const Modules = [TaskModule, TagsModule];

@Module({
  imports: [
    TypeOrmModule.forRootAsync(
      {
        useFactory: () => (
          {
            type               : 'postgres',
            host               : 'localhost' ,
            port               : 5432,
            database           :"to-do-app",
            schema             : "public",
            username           : "postgres",
            password           : "PromovezCu10",
            synchronize        : true,
            autoLoadEntities   : true,
            entities           : [ `${ __dirname }/**/*.entity{.ts,.js}` ],
            migrations         : [ `${ __dirname }/migrations/*.{js, ts}` ],
            migrationsTableName: 'migrations',
            namingStrategy     : new SnakeNamingStrategy()
          }
        ),
      }
    ),
    ...Modules
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
