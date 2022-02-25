import {MigrationInterface, QueryRunner} from "typeorm";

export class deliveryEntity1645022170881 implements MigrationInterface {
    name = 'deliveryEntity1645022170881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "delivery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "buyId" uuid, CONSTRAINT "REL_9e75c7fc1a2a3da26733ddbafb" UNIQUE ("buyId"), CONSTRAINT "PK_ffad7bf84e68716cd9af89003b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD CONSTRAINT "FK_9e75c7fc1a2a3da26733ddbafbf" FOREIGN KEY ("buyId") REFERENCES "buy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "delivery" DROP CONSTRAINT "FK_9e75c7fc1a2a3da26733ddbafbf"`);
        await queryRunner.query(`DROP TABLE "delivery"`);
    }

}
