import { MigrationInterface, QueryRunner } from "typeorm";

export class SetNullableUserCollumns1744163254761 implements MigrationInterface {
    name = 'SetNullableUserCollumns1744163254761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "challenge_question" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "challenge_answer" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "challenge_answer" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "challenge_question" SET NOT NULL`);
    }

}
