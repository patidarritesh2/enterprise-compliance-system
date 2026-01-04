
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Disclosure } from "../entities/Disclosure";
import { AuditLog } from "../entities/AuditLog";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "compliance_db",
  synchronize: true,
  entities: [User, Disclosure, AuditLog]
});
