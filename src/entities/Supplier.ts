import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  cnpj!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  address!: string;

  @Column({ nullable: true, default: 0 })
  grade!: string;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
