
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Disclosure {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ default: "PENDING" })
  status!: "PENDING" | "APPROVED" | "REJECTED";
}
