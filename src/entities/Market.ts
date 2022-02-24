import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert} from "typeorm";
import bcrypt from "bcrypt";
import { Cart } from "./Cart";

@Entity()
export class Market {
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

    @OneToOne(type => Cart, { onDelete: 'CASCADE' }) @JoinColumn()
    cart!: Cart;

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}