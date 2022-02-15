import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert} from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class Market {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column({unique: true})
    cnpj!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    password!: string;

    @Column()
    adress!: string;

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}