import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";

@Entity()
export class Trucks {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  plate!: string;
}
