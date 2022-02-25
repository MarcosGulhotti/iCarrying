import {MigrationInterface, QueryRunner} from "typeorm";

export class updating1645726709153 implements MigrationInterface {
    name = 'updating1645726709153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grade" DROP CONSTRAINT "FK_1491efc3d242f101008cf8a2839"`);
        await queryRunner.query(`ALTER TABLE "grade" DROP CONSTRAINT "REL_1491efc3d242f101008cf8a283"`);
        await queryRunner.query(`ALTER TABLE "grade" ADD CONSTRAINT "FK_1491efc3d242f101008cf8a2839" FOREIGN KEY ("marketId") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grade" DROP CONSTRAINT "FK_1491efc3d242f101008cf8a2839"`);
        await queryRunner.query(`ALTER TABLE "grade" ADD CONSTRAINT "REL_1491efc3d242f101008cf8a283" UNIQUE ("marketId")`);
        await queryRunner.query(`ALTER TABLE "grade" ADD CONSTRAINT "FK_1491efc3d242f101008cf8a2839" FOREIGN KEY ("marketId") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
