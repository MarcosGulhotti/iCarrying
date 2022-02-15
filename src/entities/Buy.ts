import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Buy {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  status!: string;
}
