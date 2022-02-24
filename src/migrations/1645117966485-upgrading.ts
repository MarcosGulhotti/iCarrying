import {MigrationInterface, QueryRunner} from "typeorm";

export class upgrading1645117966485 implements MigrationInterface {
    name = 'upgrading1645117966485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_37c4dcdd6935302e6089cdda89d"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ea8cfd623055b1afc450eb33898"`);
        await queryRunner.query(`ALTER TABLE "market" DROP CONSTRAINT "FK_cdec5456fc4a04548cb29658ff5"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME COLUMN "marketIdId" TO "marketId"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME CONSTRAINT "REL_37c4dcdd6935302e6089cdda89" TO "UQ_d53d18a8487b36c5ca3fd493d1f"`);
        await queryRunner.query(`ALTER TABLE "market" RENAME COLUMN "cartIdId" TO "cartId"`);
        await queryRunner.query(`ALTER TABLE "market" RENAME CONSTRAINT "REL_cdec5456fc4a04548cb29658ff" TO "UQ_df9dea595d3bf2c887dc8bcbcfa"`);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "address" character varying NOT NULL, "grade" character varying DEFAULT '0', CONSTRAINT "UQ_6bcf219f3f47c8de1c0c82fd523" UNIQUE ("cnpj"), CONSTRAINT "UQ_c40cbff7400f06ae1c8d9f42333" UNIQUE ("email"), CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "UQ_d53d18a8487b36c5ca3fd493d1f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "marketId"`);
        await queryRunner.query(`ALTER TABLE "cart" ADD "marketId" character varying`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "suplierId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "trucks" ADD CONSTRAINT "UQ_43b4c59e7939442f60013292443" UNIQUE ("plate")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ea8cfd623055b1afc450eb33898" FOREIGN KEY ("suplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "market" ADD CONSTRAINT "FK_df9dea595d3bf2c887dc8bcbcfa" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "market" DROP CONSTRAINT "FK_df9dea595d3bf2c887dc8bcbcfa"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ea8cfd623055b1afc450eb33898"`);
        await queryRunner.query(`ALTER TABLE "trucks" DROP CONSTRAINT "UQ_43b4c59e7939442f60013292443"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "suplierId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "marketId"`);
        await queryRunner.query(`ALTER TABLE "cart" ADD "marketId" uuid`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "UQ_d53d18a8487b36c5ca3fd493d1f" UNIQUE ("marketId")`);
        await queryRunner.query(`DROP TABLE "supplier"`);
        await queryRunner.query(`ALTER TABLE "market" RENAME CONSTRAINT "UQ_df9dea595d3bf2c887dc8bcbcfa" TO "REL_cdec5456fc4a04548cb29658ff"`);
        await queryRunner.query(`ALTER TABLE "market" RENAME COLUMN "cartId" TO "cartIdId"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME CONSTRAINT "UQ_d53d18a8487b36c5ca3fd493d1f" TO "REL_37c4dcdd6935302e6089cdda89"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME COLUMN "marketId" TO "marketIdId"`);
        await queryRunner.query(`ALTER TABLE "market" ADD CONSTRAINT "FK_cdec5456fc4a04548cb29658ff5" FOREIGN KEY ("cartIdId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ea8cfd623055b1afc450eb33898" FOREIGN KEY ("suplierId") REFERENCES "suplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_37c4dcdd6935302e6089cdda89d" FOREIGN KEY ("marketIdId") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
