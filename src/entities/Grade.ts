import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Market, Supplier } from ".";

@Entity()
export class Grade {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "float"})
    grade!: number;

    @ManyToOne(type => Market)
    market!: Market;

    @ManyToOne(type => Supplier)
    supplier!: Supplier
}