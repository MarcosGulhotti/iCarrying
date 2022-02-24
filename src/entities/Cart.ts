import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { Market } from "./Market";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: true })
    marketId!: string;
}