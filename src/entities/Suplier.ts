import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class Suplier {
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

  @Column()
  grade!: string;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
