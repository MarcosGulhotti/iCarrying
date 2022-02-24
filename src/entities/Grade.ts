import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Market, Supplier } from ".";

@Entity()
export class Grade {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "float"})
    grade!: number;

    @OneToOne(type => Market) @JoinColumn()
    market!: Market;

    @ManyToOne(type => Supplier)
    supplier!: Supplier
}