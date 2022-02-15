import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
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
  description!: number;

  @Column()
  image!: string;

  @ManyToOne((type) => Suplier) suplier!: Suplier;
}
