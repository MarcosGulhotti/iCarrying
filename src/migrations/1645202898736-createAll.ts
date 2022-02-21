import {MigrationInterface, QueryRunner} from "typeorm";

export class createAll1645202898736 implements MigrationInterface {
    name = 'createAll1645202898736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adm" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_0f5ee0a519c677c5237a33b9516" UNIQUE ("email"), CONSTRAINT "PK_d4dab02cf2667fc5b673741b322" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buy" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, CONSTRAINT "PK_634c4687b54f6a44ac0c142adf7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "marketId" character varying, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "address" character varying NOT NULL, "grade" character varying DEFAULT '0', CONSTRAINT "UQ_6bcf219f3f47c8de1c0c82fd523" UNIQUE ("cnpj"), CONSTRAINT "UQ_c40cbff7400f06ae1c8d9f42333" UNIQUE ("email"), CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "suplierId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "cartId" uuid, "productId" uuid, "buyId" uuid, CONSTRAINT "PK_dccd1ec2d6f5644a69adf163bc1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "trucks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "plate" character varying NOT NULL, CONSTRAINT "UQ_43b4c59e7939442f60013292443" UNIQUE ("plate"), CONSTRAINT "PK_6a134fb7caa4fb476d8a6e035f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "delivery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "buyId" uuid, "trucksId" uuid, CONSTRAINT "REL_9e75c7fc1a2a3da26733ddbafb" UNIQUE ("buyId"), CONSTRAINT "REL_38528cfe739eaedbeed3a4a084" UNIQUE ("trucksId"), CONSTRAINT "PK_ffad7bf84e68716cd9af89003b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "market" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "address" character varying NOT NULL, "cartId" uuid, CONSTRAINT "UQ_b16d758e54a7e9834e748325add" UNIQUE ("cnpj"), CONSTRAINT "UQ_df94b6d8a6b17068b8d436aa44e" UNIQUE ("email"), CONSTRAINT "REL_df9dea595d3bf2c887dc8bcbcf" UNIQUE ("cartId"), CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ea8cfd623055b1afc450eb33898" FOREIGN KEY ("suplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_product" ADD CONSTRAINT "FK_139f8024067696fe5a8400ebda2" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_product" ADD CONSTRAINT "FK_4f1b0c66f4e0b4610e14ca42e5c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_product" ADD CONSTRAINT "FK_12150d5faf075723bd2a19c018a" FOREIGN KEY ("buyId") REFERENCES "buy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD CONSTRAINT "FK_9e75c7fc1a2a3da26733ddbafbf" FOREIGN KEY ("buyId") REFERENCES "buy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery" ADD CONSTRAINT "FK_38528cfe739eaedbeed3a4a0847" FOREIGN KEY ("trucksId") REFERENCES "trucks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "market" ADD CONSTRAINT "FK_df9dea595d3bf2c887dc8bcbcfa" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "market" DROP CONSTRAINT "FK_df9dea595d3bf2c887dc8bcbcfa"`);
        await queryRunner.query(`ALTER TABLE "delivery" DROP CONSTRAINT "FK_38528cfe739eaedbeed3a4a0847"`);
        await queryRunner.query(`ALTER TABLE "delivery" DROP CONSTRAINT "FK_9e75c7fc1a2a3da26733ddbafbf"`);
        await queryRunner.query(`ALTER TABLE "cart_product" DROP CONSTRAINT "FK_12150d5faf075723bd2a19c018a"`);
        await queryRunner.query(`ALTER TABLE "cart_product" DROP CONSTRAINT "FK_4f1b0c66f4e0b4610e14ca42e5c"`);
        await queryRunner.query(`ALTER TABLE "cart_product" DROP CONSTRAINT "FK_139f8024067696fe5a8400ebda2"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ea8cfd623055b1afc450eb33898"`);
        await queryRunner.query(`DROP TABLE "market"`);
        await queryRunner.query(`DROP TABLE "delivery"`);
        await queryRunner.query(`DROP TABLE "trucks"`);
        await queryRunner.query(`DROP TABLE "cart_product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "buy"`);
        await queryRunner.query(`DROP TABLE "adm"`);
    }

}
