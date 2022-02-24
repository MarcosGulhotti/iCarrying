import {MigrationInterface, QueryRunner} from "typeorm";

export class admEntity1645023576402 implements MigrationInterface {
    name = 'admEntity1645023576402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adm" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_0f5ee0a519c677c5237a33b9516" UNIQUE ("email"), CONSTRAINT "PK_d4dab02cf2667fc5b673741b322" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "adm"`);
    }

}
