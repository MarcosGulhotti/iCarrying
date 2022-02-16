import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Buy } from "./Buy";

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  status!: string;

  @OneToOne((type) => Buy)
  @JoinColumn()
  buy!: Buy;
}
