import {MigrationInterface, QueryRunner} from "typeorm";

export class trucksEntity1645022604802 implements MigrationInterface {
    name = 'trucksEntity1645022604802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trucks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "plate" character varying NOT NULL, CONSTRAINT "PK_6a134fb7caa4fb476d8a6e035f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD "trucksId" uuid`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD CONSTRAINT "UQ_38528cfe739eaedbeed3a4a0847" UNIQUE ("trucksId")`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD CONSTRAINT "FK_38528cfe739eaedbeed3a4a0847" FOREIGN KEY ("trucksId") REFERENCES "trucks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "delivery" DROP CONSTRAINT "FK_38528cfe739eaedbeed3a4a0847"`);
        await queryRunner.query(`ALTER TABLE "delivery" DROP CONSTRAINT "UQ_38528cfe739eaedbeed3a4a0847"`);
        await queryRunner.query(`ALTER TABLE "delivery" DROP COLUMN "trucksId"`);
        await queryRunner.query(`DROP TABLE "trucks"`);
    }

}
