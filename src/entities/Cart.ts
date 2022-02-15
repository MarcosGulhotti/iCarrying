import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Market } from "./Market";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @OneToOne(type => Market) @JoinColumn()
    marketId!: Market;
}