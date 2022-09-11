import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConnection: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "test_auth",
  entities: [__dirname + "/../**/*.entity.js"],
  synchronize: true,
}
