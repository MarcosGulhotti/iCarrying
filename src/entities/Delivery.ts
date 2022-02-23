import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Buy } from "./Buy";
import { Trucks } from "./Trucks";

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  status!: string;

  @Column()
  address!: string;

  @OneToOne((type) => Buy)
  @JoinColumn()
  buy!: Buy;

  @OneToOne((type) => Trucks)
  @JoinColumn()
  trucks!: Trucks;
}
