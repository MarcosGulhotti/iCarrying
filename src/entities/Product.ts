import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Suplier } from "./Suplier";

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

  @ManyToOne((type) => Suplier)
  @JoinColumn()
  suplier!: Suplier;
}
