import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";
// import { Buy } from "./Buy";

@Entity()
export class CartProduct {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  status!: string;

  @ManyToOne((type) => Cart) cart!: Cart;

  @ManyToOne((type) => Product) product!: Product;

  // @ManyToOne((type) => Buy) buy!: Buy;
}
