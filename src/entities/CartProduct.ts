import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";
import { Buy } from "./Buy";

@Entity()
export class CartProduct {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  status!: string;

  @ManyToOne((type) => Cart)
  @JoinColumn()
  cart!: Cart;

  @ManyToOne((type) => Product)
  @JoinColumn()
  product!: Product;

  @ManyToOne((type) => Buy)
  @JoinColumn()
  buy!: Buy;
}
