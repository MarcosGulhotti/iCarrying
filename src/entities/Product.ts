import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Supplier } from "./Supplier";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  price!: string;

  @Column()
  description!: string;

  @Column()
  image!: string;

  @ManyToOne((type) => Supplier)
  @JoinColumn()
  suplier!: Supplier;
}
