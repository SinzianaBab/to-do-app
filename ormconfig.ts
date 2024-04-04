import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { TagEntity } from "./src/tags/entities/tag.entity";
import { TaskEntity } from "./src/tasks/entities/task.entity";

const options: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "PromovezCu10",
  database: "to-do-app",
  schema: "public",
  logging: false,
  logger: "advanced-console",
  synchronize: true,
  dropSchema: false,
  extra: {
    trustServerCertificate: true
  },
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/src/migrations/*{.ts,.js}`],
  migrationsTableName: "migrations",
  namingStrategy: new SnakeNamingStrategy()
};

export default new DataSource(options);