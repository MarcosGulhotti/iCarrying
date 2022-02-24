import {MigrationInterface, QueryRunner} from "typeorm";

export class updating1645713482361 implements MigrationInterface {
    name = 'updating1645713482361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ea8cfd623055b1afc450eb33898"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "suplierId" TO "supplierId"`);
        await queryRunner.query(`CREATE TABLE "grade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "grade" double precision NOT NULL, "marketId" uuid, "supplierId" uuid, CONSTRAINT "REL_1491efc3d242f101008cf8a283" UNIQUE ("marketId"), CONSTRAINT "PK_58c2176c3ae96bf57daebdbcb5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "grade"`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "grade" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_4346e4adb741e80f3711ee09ba4" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "grade" ADD CONSTRAINT "FK_1491efc3d242f101008cf8a2839" FOREIGN KEY ("marketId") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "grade" ADD CONSTRAINT "FK_f62db778a6e904fc2458f14d541" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grade" DROP CONSTRAINT "FK_f62db778a6e904fc2458f14d541"`);
        await queryRunner.query(`ALTER TABLE "grade" DROP CONSTRAINT "FK_1491efc3d242f101008cf8a2839"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_4346e4adb741e80f3711ee09ba4"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "grade"`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "grade" character varying DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery" DROP COLUMN "address"`);
        await queryRunner.query(`DROP TABLE "grade"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "supplierId" TO "suplierId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ea8cfd623055b1afc450eb33898" FOREIGN KEY ("suplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
