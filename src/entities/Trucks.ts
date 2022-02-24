import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

@Entity()
export class Trucks {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  plate!: string;
}
