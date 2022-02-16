import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class Adm {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
